'use client';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function PricingPage() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Bronze',
      color: 'bronze',
      price: '€49',
      period: 'per job post',
      popular: false,
      description: 'Best for companies looking to post their project based hiring',
      features: [
        { 
          title: 'FEATURES', 
          items: [
            { text: '30 days duration', included: true },
            { text: 'Tribal Engine mini ATS', included: true }
          ] 
        },
        { 
          title: 'VISIBILITY', 
          items: [
            { text: 'Logo display', included: true },
            { text: 'Standard listing position', included: true },
            { text: 'Featured listing', included: false },
            { text: 'Home Page visibility', included: false }
          ] 
        },
        { 
          title: 'HIRING ADS CONNECT', 
          items: [
            { text: 'About the role', included: true },
            { text: 'Requirements', included: true },
            { text: 'Responsibilities', included: true },
            { text: 'Job Details', included: true },
            { text: 'Tech stack', included: false },
            { text: 'Nice-to-have', included: false },
            { text: 'Salary Range', included: false },
            { text: 'Benefits section', included: false }
          ] 
        },
        { 
          title: 'PROMOTION', 
          items: [
            { text: 'Social Media Posting', included: false },
            { text: 'Paid Social Media Campaigns', included: false },
            { text: 'Linkedin Job Post', included: false },
            { text: 'Custom PPC Campaigns', included: false }
          ] 
        }
      ],
      buttonText: 'Buy Job Posting'
    },
    {
      id: 2,
      name: 'Silver',
      color: 'silver',
      price: '€99',
      period: 'per job post',
      popular: false,
      description: 'Best for growing studios looking to build already significant flow',
      features: [
        { 
          title: 'FEATURES', 
          items: [
            { text: '30 days duration', included: true },
            { text: 'Tribal Engine max 20%', included: true }
          ] 
        },
        { 
          title: 'VISIBILITY', 
          items: [
            { text: 'Logo display', included: true },
            { text: 'Standard listing position', included: true },
            { text: 'Featured listing', included: true },
            { text: 'Home Page visibility', included: false }
          ] 
        },
        { 
          title: 'HIRING ADS CONNECT', 
          items: [
            { text: 'About the role', included: true },
            { text: 'Requirements', included: true },
            { text: 'Responsibilities', included: true },
            { text: 'Job Details', included: true },
            { text: 'Tech stack', included: true },
            { text: 'Nice-to-have', included: false },
            { text: 'Salary Range', included: true },
            { text: 'Benefits section', included: true }
          ] 
        },
        { 
          title: 'PROMOTION', 
          items: [
            { text: 'Social Media Posting', included: true },
            { text: 'Paid Social Media Campaigns', included: false },
            { text: 'Linkedin Job Post', included: false },
            { text: 'Custom PPC Campaigns', included: false }
          ] 
        }
      ],
      buttonText: 'Buy Job Posting'
    },
    {
      id: 3,
      name: 'Gold',
      color: 'gold',
      price: '€199',
      period: 'per job post',
      popular: true,
      description: 'Best for increased visibility and talent applicant’s engagement',
      features: [
        { 
          title: 'FEATURES', 
          items: [
            { text: '30 days duration', included: true },
            { text: 'Tribal Engine max 20%', included: true }
          ] 
        },
        { 
          title: 'VISIBILITY', 
          items: [
            { text: 'Logo display', included: true },
            { text: 'Standard listing position', included: true },
            { text: 'Featured listing', included: true },
            { text: 'Home Page visibility', included: true }
          ] 
        },
        { 
          title: 'HIRING ADS CONNECT', 
          items: [
            { text: 'About the role', included: true },
            { text: 'Requirements', included: true },
            { text: 'Responsibilities', included: true },
            { text: 'Job Details', included: true },
            { text: 'Tech stack', included: true },
            { text: 'Nice-to-have', included: true },
            { text: 'Salary Range', included: true },
            { text: 'Benefits section', included: true }
          ] 
        },
        { 
          title: 'PROMOTION', 
          items: [
            { text: 'Social Media Posting', included: true },
            { text: 'Paid Social Media Campaigns', included: true },
            { text: 'Linkedin Job Post', included: true },
            { text: 'Custom PPC Campaigns', included: true }
          ] 
        }
      ],
      buttonText: 'Buy Job Posting'
    },
    {
      id: 4,
      name: 'Diamond',
      color: 'diamond',
      price: '€299',
      period: 'per job post',
      popular: false,
      description: 'Best for maximum reach and talent pool mobilization across roles',
      features: [
        { 
          title: 'FEATURES', 
          items: [
            { text: '30 days duration', included: true },
            { text: 'Tribal Engine max 20%', included: true }
          ] 
        },
        { 
          title: 'VISIBILITY', 
          items: [
            { text: 'Logo display', included: true },
            { text: 'Standard listing position', included: true },
            { text: 'Featured listing', included: true },
            { text: 'Home Page visibility', included: true }
          ] 
        },
        { 
          title: 'HIRING ADS CONNECT', 
          items: [
            { text: 'About the role', included: true },
            { text: 'Requirements', included: true },
            { text: 'Responsibilities', included: true },
            { text: 'Job Details', included: true },
            { text: 'Tech stack', included: true },
            { text: 'Nice-to-have', included: true },
            { text: 'Salary Range', included: true },
            { text: 'Benefits section', included: true }
          ] 
        },
        { 
          title: 'PROMOTION', 
          items: [
            { text: 'Social Media Posting', included: true },
            { text: 'Paid Social Media Campaigns', included: true },
            { text: 'Linkedin Job Post', included: true },
            { text: 'Custom PPC Campaigns', included: true }
          ] 
        }
      ],
      buttonText: 'Buy Job Posting'
    }
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.background}>
          <Image
            src="/images/pricingHero_svg.svg"
            alt="Pricing Hero"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Find the perfect <span className={styles.highlight}>talent</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Choose the pricing tier that fits your hiring needs
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
          <h2 className={styles.sectionTitle}>Featured Job Ads</h2>

          <div className={styles.plansGrid}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>POPULAR</div>
                )}

                <h3
                  className={`${styles.planName} ${
                    styles[`plan${plan.color.charAt(0).toUpperCase() + plan.color.slice(1)}`]
                  }`}
                >
                  {plan.name}
                </h3>

                {/* DESCRIPTION */}
                <p className={styles.planDescription}>
                  {plan.description}
                </p>

                <div className={styles.featuresContainer}>
                  {plan.features.map((featureGroup, idx) => (
                    <div key={idx} className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>
                        {featureGroup.title}
                      </h4>
                      <ul className={styles.featuresList}>
                        {featureGroup.items.map((item, itemIdx) => (
                          <li 
                            key={itemIdx} 
                            className={`${styles.featureItem} ${!item.included ? styles.featureItemDisabled : ''}`}
                          >
                            {item.included ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.3333 4L5.99996 11.3333L2.66663 8" stroke="#FE0032" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            ) : (
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12 4L4 12" stroke="white" strokeOpacity="0.2" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4 4L12 12" stroke="white" strokeOpacity="0.2" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                            )}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className={styles.planFooter}>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  <button
                    className={`${styles.buyBtn} ${
                      plan.popular ? styles.buyBtnPopular : ''
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.customPackageSection}>
        <div>
          <h2 className={styles.customPackageTitle}>Need more than one job post?</h2>
          <p className={styles.customPackageText}>
            If you're planning to hire for multiple positions, we can create a custom package tailored to your needs. Get in touch and we'll help you build the most cost-effective and high-visibility plan for your studio.
          </p>
          <button
            className={styles.customPackageBtn}
            onClick={() => window.open('mailto:info@yourdomain.com?subject=Custom%20Job%20Post%20Package', '_blank')}
          >
            Schedule a Call
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
