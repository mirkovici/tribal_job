'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CustomDropdown } from '@/components/CustomDropdown';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    subject: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      subject: '',
      message: ''
    });
    
    // Auto-close modal after 4 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 4000);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          {/* Contact Form Card */}
          <div className={styles.formCard}>
            {/* Heading */}
            <h1 className={styles.heading}>Get in Touch</h1>

            {/* Description */}
            <p className={styles.description}>
              Whether you're interested in cooperation, outsourcing opportunities, our services, 
              or you have suggestions about our platform design, or want to report a bug or problem—
              don't hesitate to reach out. We're here to listen and help make your experience better. 
              Your feedback matters to us!
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>

              {/* Role Input */}
              <div>
                <CustomDropdown
                  options={['Job Seeker / Candidate', 'Employer / Recruiter', 'Potential Partner', 'Other']}
                  value={formData.role}
                  onChange={(value) => setFormData({ ...formData, role: value })}
                  placeholder="Select Your Role"
                />
              </div>

              {/* Subject Input */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className={styles.input}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className={styles.textarea}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoHeading}>We're here to help</h2>
            <p className={styles.infoText}>
              Our team is committed to providing you with the best support possible.
            </p>
            <p className={styles.infoText}>
              Expect a response within 24-48 hours.
            </p>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:info@tribal-jobs.com" className={styles.contactLink}>
                  info@tribal-jobs.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>WhatsApp:</span>
                <a 
                  href="https://wa.me/381641298597" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  +381 64 129 8597
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={closeModal} className={styles.closeBtn}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Success Icon with Animation */}
            <div className={styles.iconWrapper}>
              <div className={styles.iconContainer}>
                <svg className={styles.checkIcon} width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="36" fill="none" stroke="#FE0032" strokeWidth="2"/>
                  <path d="M30 42L38 50L52 32" stroke="#FE0032" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={styles.pulse}></div>
              </div>
            </div>

            {/* Message */}
            <div className={styles.modalMessage}>
              <h3 className={styles.modalHeading}>Thank You!</h3>
              <p className={styles.modalText}>
                Thank you for contacting us! We appreciate you reaching out and will get back to you as soon as possible.
              </p>
              <button onClick={closeModal} className={styles.modalBtn}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
