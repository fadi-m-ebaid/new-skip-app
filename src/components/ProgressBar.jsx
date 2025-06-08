import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProgressBar = ({ currentStep = 1 }) => {
  const steps = [
    { number: 1, label: 'Location' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Skip Size' },
  ];

  return (
    <div className="progress-container">
      <Row className="justify-content-center">
        {steps.map((step, index) => (
          <Col key={step.number} xs="auto" className="text-center">
            <div className={`progress-step ${
              step.number < currentStep ? 'completed' : 
              step.number === currentStep ? 'active' : ''
            }`}>
              {step.number < currentStep ? (
                <i className="bi bi-check-lg"></i>
              ) : (
                step.number
              )}
            </div>
            <div className="mt-2">
              <small className={`fw-medium ${
                step.number === currentStep ? 'text-dark' : 'text-muted'
              }`}>
                {step.label}
              </small>
            </div>
            {index < steps.length - 1 && (
              <div 
                className="position-absolute top-50 start-100 translate-middle-y"
                style={{
                  width: '60px',
                  height: '2px',
                  backgroundColor: step.number < currentStep ? 'var(--select-green)' : '#e9ecef',
                  zIndex: -1
                }}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProgressBar;

