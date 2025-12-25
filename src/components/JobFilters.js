'use client';

import styles from './JobFilters.module.css';

export default function JobFilters({
  isOpen,
  onClose,
  selectedLocation,
  setSelectedLocation,
  selectedWorkModel,
  setSelectedWorkModel,
  selectedJobType,
  setSelectedJobType,
  selectedContractType,
  setSelectedContractType,
  selectedSeniority,
  setSelectedSeniority,
  selectedRoleType,
  setSelectedRoleType,
  selectedRoleDepartment,
  setSelectedRoleDepartment,
  collapsedFilters,
  toggleFilterCollapse,
  handleFilterToggle,
  clearAllFilters
}) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Filters</h2>
        <button className={styles.closeSidebarBtn} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
    

      <div className={styles.filterGroup}>
        <div className={styles.filterHeader} onClick={() => toggleFilterCollapse('location')}>
          <h3 className={styles.filterTitle}>LOCATION</h3>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`${styles.filterArrow} ${collapsedFilters.location ? styles.collapsed : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {!collapsedFilters.location && (
          <>
            <div className={styles.searchFilter}>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className={styles.searchIcon}>
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input type="text" placeholder="Search location..." className={styles.filterSearch} />
            </div>
            {['Global (Remote)', 'Europe', 'Serbia', 'Bosnia', 'Montenegro', 'Macedonia', 'Romania', 'Bulgaria'].map(loc => (
              <label key={loc} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedLocation.includes(loc)}
                  onChange={() => handleFilterToggle(selectedLocation, setSelectedLocation, loc)}
                />
                <span>{loc}</span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.filterHeader} onClick={() => toggleFilterCollapse('workModel')}>
          <h3 className={styles.filterTitle}>WORKING MODEL</h3>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`${styles.filterArrow} ${collapsedFilters.workModel ? styles.collapsed : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {!collapsedFilters.workModel && (
          <>
            {['Remote', 'Hybrid', 'On-site', 'Flexible'].map(model => (
              <label key={model} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedWorkModel.includes(model)}
                  onChange={() => handleFilterToggle(selectedWorkModel, setSelectedWorkModel, model)}
                />
                <span>{model}</span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.filterHeader} onClick={() => toggleFilterCollapse('jobType')}>
          <h3 className={styles.filterTitle}>JOB TYPE</h3>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`${styles.filterArrow} ${collapsedFilters.jobType ? styles.collapsed : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {!collapsedFilters.jobType && (
          <>
            {['Full-time', 'Part-time', 'Project-Based'].map(type => (
              <label key={type} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedJobType.includes(type)}
                  onChange={() => handleFilterToggle(selectedJobType, setSelectedJobType, type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.filterHeader} onClick={() => toggleFilterCollapse('contractType')}>
          <h3 className={styles.filterTitle}>CONTRACT TYPE</h3>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`${styles.filterArrow} ${collapsedFilters.contractType ? styles.collapsed : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {!collapsedFilters.contractType && (
          <>
            {['Employment contract', 'B2B', 'Freelance', 'Internship Contract'].map(contract => (
              <label key={contract} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedContractType.includes(contract)}
                  onChange={() => handleFilterToggle(selectedContractType, setSelectedContractType, contract)}
                />
                <span>{contract}</span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.filterHeader} onClick={() => toggleFilterCollapse('seniority')}>
          <h3 className={styles.filterTitle}>SENIORITY</h3>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="currentColor"
            className={`${styles.filterArrow} ${collapsedFilters.seniority ? styles.collapsed : ''}`}
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {!collapsedFilters.seniority && (
          <>
            {['Intern', 'Junior', 'Mid-level', 'Senior', 'Lead', 'Principal', 'C-level'].map(level => (
              <label key={level} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedSeniority.includes(level)}
                  onChange={() => handleFilterToggle(selectedSeniority, setSelectedSeniority, level)}
                />
                <span>{level}</span>
              </label>
            ))}
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>ROLE TYPE</h3>
        {['Individual contributor', 'Leadership'].map(type => (
          <label key={type} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedRoleType.includes(type)}
              onChange={() => handleFilterToggle(selectedRoleType, setSelectedRoleType, type)}
            />
            <span>{type}</span>
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>ROLE DEPARTMENT</h3>
        {['Engineering & Development', 'Art', 'Product & Project', 'Design', 'Marketing & Growth', 'QA & Customer Development', 'Operations & Support', 'People & Culture', 'Finance & Legal', 'HR & People Leadership'].map(dept => (
          <label key={dept} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedRoleDepartment.includes(dept)}
              onChange={() => handleFilterToggle(selectedRoleDepartment, setSelectedRoleDepartment, dept)}
            />
            <span>{dept}</span>
          </label>
        ))}
      </div>

      <div className={styles.filterFooter}>
        <button className={styles.clearBtnBottom} onClick={clearAllFilters}>Clear Filters</button>
      </div>
    </aside>
  );
}
