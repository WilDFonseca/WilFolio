import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ sections }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <div key={index} className="accordion-item">
          <button onClick={() => toggleSection(section.title)} className="accordion-title">
            {section.title}
          </button>
          {openSection === section.title && (
            <div className="accordion-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
