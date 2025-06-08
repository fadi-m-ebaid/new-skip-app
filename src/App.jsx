import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { skips } from './data/skips';
import ProgressBar from './components/ProgressBar';
import SkipGrid from './components/SkipGrid';
import SkipModal from './components/SkipModal';

function App() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalSkip, setModalSkip] = useState(null);

  const handleSkipSelection = (skipId) => {
    setSelectedSkipId(skipId);
  };

  const handleSkipClick = (skip) => {
    setModalSkip(skip);
    setShowModal(true);
  };

  const handleModalSelect = (skipId) => {
    setSelectedSkipId(skipId);
    setShowModal(false);
  };

  const handleContinue = () => {
    if (selectedSkipId) {
      alert(`You selected skip ID: ${selectedSkipId}. In a real application, this would navigate to the next step.`);
    }
  };

  return (
    <div className="min-vh-100">
      <Container className="py-4">
        <ProgressBar currentStep={3} />
        
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{color: 'var(--text-dark)'}}>
            Choose Your Skip Size
          </h1>
          <p className="lead text-muted">
            Select the skip size you require.
          </p>
        </div>
        
        <SkipGrid 
          skips={skips} 
          selectedSkipId={selectedSkipId} 
          onSkipSelected={handleSkipSelection}
          onSkipClick={handleSkipClick}
        />
        
        <div className="d-flex justify-content-between align-items-center mt-5">
          <Button 
            variant="outline-secondary" 
            size="lg"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </Button>
          
          <Button 
            variant="outline-secondary"
            size="lg"
            onClick={handleContinue}
            disabled={!selectedSkipId}
            // style={{
            //   backgroundColor: 'var(--select-orange)',
            //   borderColor: 'var(--select-orange)'
            // }}
          >
            Next
            <i className="bi bi-arrow-right ms-2"></i>
          </Button>
        </div>
      </Container>

      {showModal && modalSkip && (
        <SkipModal 
          skip={modalSkip}
          onClose={() => setShowModal(false)}
          onSelect={handleModalSelect}
          isSelected={selectedSkipId === modalSkip.id}
        />
      )}
    </div>
  );
}

export default App;

