'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function AboutUs() {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => {
    setOpenModal(null);
  };

  const openModalHandler = (type) => {
    setOpenModal(type);
  };

  const getModalContent = () => {
    switch (openModal) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className={styles.modalContentText}>
              <p className={styles.modalStrong}>
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              
              <section>
                <h3>1. Information We Collect</h3>
                <p>
                  At Tribal Jobs, we collect information to provide better services to all our users. The information we collect includes:
                </p>
                <ul>
                  <li>Personal information you provide (name, email, phone number)</li>
                  <li>Profile information (resume, work experience, skills)</li>
                  <li>Usage data and browsing activity on our platform</li>
                  <li>Device information and IP addresses</li>
                  <li>Communications you send to us</li>
                </ul>
              </section>

              <section>
                <h3>2. How We Use Your Information</h3>
                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul>
                  <li>To provide and maintain our job matching services</li>
                  <li>To connect job seekers with potential employers</li>
                  <li>To improve and personalize your experience</li>
                  <li>To send you relevant job opportunities and updates</li>
                  <li>To communicate with you about our services</li>
                  <li>To prevent fraud and enhance security</li>
                </ul>
              </section>

              <section>
                <h3>3. Data Sharing and Disclosure</h3>
                <p>
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul>
                  <li>Employers when you apply for jobs</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section>
                <h3>4. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h3>5. Your Rights</h3>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data</li>
                </ul>
              </section>

              <section>
                <h3>6. Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@tribaljobs.com
                </p>
              </section>
            </div>
          ),
        };
      case 'terms':
        return {
          title: 'Terms of Use',
          content: (
            <div className={styles.modalContentText}>
              <p className={styles.modalStrong}>
                <strong>Last Updated:</strong> January 1, 2025
              </p>
              
              <section>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using Tribal Jobs, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h3>2. Use of Services</h3>
                <p>
                  Tribal Jobs provides a platform for connecting gaming industry professionals with job opportunities. You agree to:
                </p>
                <ul>
                  <li>Provide accurate and truthful information</li>
                  <li>Maintain the security of your account</li>
                  <li>Not misuse or abuse the platform</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not create fake profiles or impersonate others</li>
                </ul>
              </section>

              <section>
                <h3>3. Account Registration</h3>
                <p>
                  To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h3>4. Content Guidelines</h3>
                <p>
                  Users must not post content that:
                </p>
                <ul>
                  <li>Is false, misleading, or fraudulent</li>
                  <li>Violates intellectual property rights</li>
                  <li>Contains harmful or malicious code</li>
                  <li>Is discriminatory, harassing, or offensive</li>
                  <li>Violates privacy or confidentiality</li>
                </ul>
              </section>

              <section>
                <h3>5. Intellectual Property</h3>
                <p>
                  All content on Tribal Jobs, including text, graphics, logos, and software, is the property of Tribal Jobs or its licensors and is protected by copyright and trademark laws.
                </p>
              </section>

              <section>
                <h3>6. Limitation of Liability</h3>
                <p>
                  Tribal Jobs is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use our services.
                </p>
              </section>

              <section>
                <h3>7. Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason at our discretion.
                </p>
              </section>

              <section>
                <h3>8. Changes to Terms</h3>
                <p>
                  We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h3>9. Contact Information</h3>
                <p>
                  For questions about these Terms of Use, contact us at legal@tribaljobs.com
                </p>
              </section>
            </div>
          ),
        };
      case 'cookies':
        return {
          title: 'Cookie Policy',
          content: (
            <div className={styles.modalContentText}>
              <p className={styles.modalStrong}>
                <strong>Last Updated:</strong> January 1, 2025
              </p>
              
              <section>
                <h3>1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                </p>
              </section>

              <section>
                <h3>2. Types of Cookies We Use</h3>
                
                <div className={styles.cookieTypes}>
                  <div>
                    <h4>Essential Cookies</h4>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure areas access, and authentication.
                    </p>
                  </div>

                  <div>
                    <h4>Performance Cookies</h4>
                    <p>
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.
                    </p>
                  </div>

                  <div>
                    <h4>Functionality Cookies</h4>
                    <p>
                      These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                    </p>
                  </div>

                  <div>
                    <h4>Targeting Cookies</h4>
                    <p>
                      These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant content.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3>3. How We Use Cookies</h3>
                <p>
                  We use cookies for various purposes:
                </p>
                <ul>
                  <li>To keep you signed in</li>
                  <li>To remember your preferences and settings</li>
                  <li>To understand how you use our platform</li>
                  <li>To improve our services and user experience</li>
                  <li>To deliver personalized content and job recommendations</li>
                  <li>To analyze site traffic and usage patterns</li>
                </ul>
              </section>

              <section>
                <h3>4. Third-Party Cookies</h3>
                <p>
                  We may also use third-party cookies from trusted partners for analytics and advertising purposes. These partners have their own privacy policies governing the use of such information.
                </p>
              </section>

              <section>
                <h3>5. Managing Cookies</h3>
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <ul>
                  <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                  <li>Delete cookies: You can delete cookies already stored on your device</li>
                  <li>Opt-out tools: Use third-party opt-out tools for advertising cookies</li>
                </ul>
                <p>
                  Please note that disabling certain cookies may affect the functionality of our website.
                </p>
              </section>

              <section>
                <h3>6. Cookie Duration</h3>
                <p>
                  Some cookies are session cookies (deleted when you close your browser) while others are persistent cookies (remain on your device for a set period or until you delete them).
                </p>
              </section>

              <section>
                <h3>7. Updates to This Policy</h3>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Please check this page periodically for updates.
                </p>
              </section>

              <section>
                <h3>8. Contact Us</h3>
                <p>
                  If you have questions about our use of cookies, please contact us at cookies@tribaljobs.com
                </p>
              </section>
            </div>
          ),
        };
      default:
        return null;
    }
  };

  const modalData = getModalContent();

  return (
    <div className={styles.container}>
      <Header />
      
      {/* Main Content */}
      <main className={`${styles.main} ${openModal ? styles.blurred : ''}`}>
        <div className={styles.contentWrapper}>
          {/* Hero Section */}
          <div className={styles.heroSection}>
            <h1 className={styles.heroTitle}>About Tribal Jobs</h1>
            <div className={styles.divider}></div>
          </div>

          {/* Mission Section */}
          <div className={styles.missionSection}>
            <div className={styles.missionCard}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <div className={styles.missionContent}>
                <p>
                  Tribal Jobs was born from a shared passion for gaming and a vision to revolutionize how talent connects within the gaming industry. We're a small group of friends who decided to turn our love for gaming into something meaningful—a platform that contributes to the growth of the gaming industry, both locally and globally.
                </p>
                <p>
                  Operating fully remotely from different corners of the world, we understand the unique dynamics of the gaming ecosystem. We've experienced firsthand the challenges of finding the right opportunities and connecting with the right people in this rapidly evolving industry.
                </p>
                <p>
                  Our goal is simple: to bridge the gap between exceptional gaming talent and innovative companies. Whether you're a game developer, esports professional, content creator, or industry specialist, Tribal Jobs is your gateway to meaningful career opportunities in the gaming world.
                </p>
                <p>
                  We believe in building a community where passion meets opportunity, where creativity is celebrated, and where the next generation of gaming professionals can thrive. This isn't just a job board—it's a movement to elevate the entire gaming industry.
                </p>
              </div>
            </div>
          </div>

          {/* Legal & Documents Section */}
          <div className={styles.legalSection}>
            <h2 className={styles.legalTitle}>Legal & Documents</h2>
            <div className={styles.legalGrid}>
              {/* Privacy Policy */}
              <button 
                className={styles.legalCard}
                onClick={() => openModalHandler('privacy')}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FE0032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    </svg>
                  </div>
                  <h3>Privacy Policy</h3>
                </div>
                <p>
                  Learn how we collect, use, and protect your personal information on our platform.
                </p>
              </button>

              {/* Terms of Use */}
              <button 
                className={styles.legalCard}
                onClick={() => openModalHandler('terms')}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FE0032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"/>
                      <path d="M10 9H8"/>
                      <path d="M16 13H8"/>
                      <path d="M16 17H8"/>
                    </svg>
                  </div>
                  <h3>Terms of Use</h3>
                </div>
                <p>
                  Review the terms and conditions for using Tribal Jobs and our services.
                </p>
              </button>

              {/* Cookie Policy */}
              <button 
                className={styles.legalCard}
                onClick={() => openModalHandler('cookies')}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FE0032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                      <path d="M8.5 8.5v.01"/>
                      <path d="M16 15.5v.01"/>
                      <path d="M12 12v.01"/>
                      <path d="M11 17v.01"/>
                      <path d="M7 14v.01"/>
                    </svg>
                  </div>
                  <h3>Cookie Policy</h3>
                </div>
                <p>
                  Understand how we use cookies and similar technologies to enhance your experience.
                </p>
              </button>
            </div>
          </div>

          {/* Legal Entity Information */}
          <div className={styles.companyInfo}>
            <div className={styles.infoContent}>
              <p><span>Founder & CEO:</span> Rastko Petrović Zlatanović</p>
              <p><span>Email:</span> rastko@tribal-jobs.com</p>
              <p><span>Registration Date:</span> 20.03.2025.</p>
              <p><span>Country:</span> Serbia</p>
              <p><span>VAT Number (PIB):</span> 114935694</p>
              <p><span>Company ID (MB):</span> 67966678</p>
              <p><span>Legal Entity Name:</span> Rastko Petrović Zlatanović Entrepreneur Combined Office and Administrative Services TRIBAL Vrnjačka Banja</p>
              <p><span>Registered Address:</span> Zaselak Glavica 12, 36210 Vrnjačka Banja, Serbia</p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalData && (
        <div 
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <h2>{modalData.title}</h2>
              <button 
                className={styles.closeButton}
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className={styles.modalBody}>
              {modalData.content}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
