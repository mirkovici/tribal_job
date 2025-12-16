'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

// Mock articles data
const articles = [
  {
    id: 1,
    category: 'Market Trends',
    title: 'How Serbia Became a Rising Force in Global Game Development',
    excerpt: 'Discover the key factors behind Serbia\'s rapid growth in the gaming industry and how it\'s attracting major studios from around the world.',
    fullContent: 'Serbia\'s game development industry has seen significant growth in recent years, driven by a combination of factors including a skilled workforce, favorable tax incentives, and a supportive government. The country has become a hub for game development, attracting major studios from around the world.',
    imageUrl: 'https://images.unsplash.com/photo-1760999462723-765888b01772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBpbmR1c3RyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNTA2NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-15',
    tags: ['Game Development', 'Market Trends', 'Europe'],
  },
  {
    id: 2,
    category: 'Industry News',
    title: 'The Rise of Remote Game Development Teams',
    excerpt: 'How distributed teams are reshaping the future of game creation and what it means for talent acquisition.',
    fullContent: 'The rise of remote work has transformed the game development industry, allowing teams to collaborate across different time zones and locations. This shift has led to a more diverse and talented workforce.',
    imageUrl: 'https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzNDE2MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-10',
    tags: ['Remote Work', 'Industry News', 'Teams'],
  },
  {
    id: 3,
    category: 'Career Advice',
    title: 'Essential Skills Every Game Developer Needs in 2025',
    excerpt: 'Stay competitive with this comprehensive guide to the most in-demand technical and soft skills in gaming.',
    fullContent: 'The gaming industry is constantly evolving, and staying ahead requires a combination of technical skills and soft skills. This guide covers the most in-demand skills.',
    imageUrl: 'https://images.unsplash.com/photo-1759701547036-bf7d7b05cc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3BvcnRzJTIwdGVhbSUyMGNvbXBldGl0aXZlfGVufDF8fHx8MTc2MzQ4MzQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '2025-01-05',
    tags: ['Career Advice', 'Skills', 'Learning'],
  },
  {
    id: 4,
    category: 'Industry News',
    title: 'Unity\'s Latest Update: What Game Developers Need to Know',
    excerpt: 'Explore the new features and improvements in Unity\'s latest release and how they impact your development workflow.',
    fullContent: 'Unity\'s latest update introduces several new features and improvements that can enhance your game development workflow.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1080&fit=crop',
    date: '2024-12-28',
    tags: ['Unity', 'Technology', 'Game Development'],
  },
  {
    id: 5,
    category: 'Market Trends',
    title: 'Mobile Gaming Market Expected to Reach $200B by 2026',
    excerpt: 'Analysis of the explosive growth in mobile gaming and what it means for developers and investors.',
    fullContent: 'The mobile gaming market is experiencing rapid growth, driven by the increasing number of smartphone users.',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1080&fit=crop',
    date: '2024-12-20',
    tags: ['Mobile Gaming', 'Market Trends', 'Business'],
  },
  {
    id: 6,
    category: 'Career Advice',
    title: 'How to Build a Standout Game Development Portfolio',
    excerpt: 'Expert tips on showcasing your work and landing your dream job in the gaming industry.',
    fullContent: 'Building a standout game development portfolio is crucial for landing your dream job in the industry.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&fit=crop',
    date: '2024-12-15',
    tags: ['Career Advice', 'Portfolio', 'Job Search'],
  },
];

// Extract unique tags
const allTags = Array.from(new Set(articles.flatMap((article) => article.tags))).sort();

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('newest');
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  // Filter articles by search query
  const filterBySearch = (article) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query)
    );
  };

  // Filter articles by tags
  const filterByTags = (article) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some((tag) => article.tags.includes(tag));
  };

  // Apply filters and sorting
  const filteredArticles = articles
    .filter(filterBySearch)
    .filter(filterByTags)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section with Search */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* Headline */}
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleBold}>Stay ahead of the game. </span>
              <span className={styles.heroTitleRed}>Read here</span>
            </h1>

            {/* Search Bar */}
            <div className={styles.searchBar}>
              <div className={styles.searchInput}>
                <input
                  type="text"
                  placeholder="Search by keywords or title..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.input}
                />
              </div>
              <button className={styles.searchBtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Filters */}
        <div className={styles.filtersSection}>
          <div className={styles.tagsLabel}>
            <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
            </svg>
            <span className={styles.filterLabel}>Filter by Tags</span>
          </div>
          <div className={styles.tagsList}>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`${styles.tagButton} ${selectedTags.includes(tag) ? styles.tagButtonActive : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Heading and Sort Control */}
        <div className={styles.headingSection}>
          <h2 className={styles.sectionHeading}>
            {selectedTags.length === 0 ? 'Latest Insights' : `Filtered Articles (${filteredArticles.length})`}
          </h2>

          {/* Sort Dropdown */}
          <div className={styles.sortDropdown}>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.selectInput}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <svg className={styles.chevronIcon} viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Articles Grid */}
        <div className={`${styles.articlesGrid} ${expandedArticleId ? styles.hasExpanded : ''}`}>
          {filteredArticles.map((article) => {
            const isExpanded = expandedArticleId === article.id;
            
            return (
              <div
                key={article.id}
                className={`${styles.articleCard} ${isExpanded ? styles.expandedCard : ''}`}
              >
                {!isExpanded ? (
                  // COLLAPSED CARD VIEW
                  <>
                    {/* Article Image */}
                    <div className={styles.articleImage}>
                      <img src={article.imageUrl} alt={article.title} />
                    </div>

                    {/* Content */}
                    <div className={styles.articleContent}>
                      {/* Category Badge and Date */}
                      <div className={styles.articleMeta}>
                        <span className={styles.categoryBadge}>{article.category}</span>
                        <span className={styles.articleDate}>{formatDate(article.date)}</span>
                      </div>

                      {/* Title */}
                      <h3 className={styles.articleTitle}>{article.title}</h3>

                      {/* Excerpt */}
                      <p className={styles.articleExcerpt}>{article.excerpt}</p>

                      {/* Read More CTA */}
                      <div className={styles.articleFooter}>
                        <button 
                          onClick={() => setExpandedArticleId(article.id)}
                          className={styles.readMoreBtn}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  // EXPANDED ARTICLE VIEW
                  <div className={styles.expandedView}>
                    {/* Full Width Hero Image */}
                    <div className={styles.expandedImage}>
                      <img src={article.imageUrl} alt={article.title} />
                      {/* Close Button Overlay */}
                      <button
                        onClick={() => setExpandedArticleId(null)}
                        className={styles.closeBtn}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    {/* Article Content */}
                    <div className={styles.expandedContent}>
                      {/* Category Badge and Date */}
                      <div className={styles.expandedMeta}>
                        <span className={styles.expandedCategoryBadge}>{article.category}</span>
                        <span className={styles.expandedDate}>{formatDate(article.date)}</span>
                      </div>

                      {/* Full Article Title */}
                      <h2 className={styles.expandedTitle}>{article.title}</h2>

                      {/* Tags */}
                      <div className={styles.expandedTags}>
                        {article.tags.map((tag) => (
                          <span key={tag} className={styles.expandedTag}>{tag}</span>
                        ))}
                      </div>

                      {/* Full Article Content */}
                      <div className={styles.expandedText}>
                        <p>{article.fullContent}</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>

                      {/* Close Button at Bottom */}
                      <div className={styles.expandedFooter}>
                        <button
                          onClick={() => setExpandedArticleId(null)}
                          className={styles.closeArticleBtn}
                        >
                          Close Article
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className={styles.noResults}>
            <svg className={styles.noResultsIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
            </svg>
            <h3 className={styles.noResultsTitle}>No articles found</h3>
            <p className={styles.noResultsText}>
              Try adjusting your filters or check back later for new content
            </p>
            <button
              onClick={() => {
                setSelectedTags([]);
                setSearchQuery('');
              }}
              className={styles.clearFiltersBtn}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
