import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SkipGrid = ({ skips, selectedSkipId, onSkipSelected, onSkipClick }) => {
  const calculateTotalPrice = (skip) => {
    const subtotal = skip.price_before_vat;
    const vatAmount = (subtotal * skip.vat) / 100;
    return subtotal + vatAmount;
  };

  return (
    <Row className="g-4">
      {skips.map((skip) => (
        <Col key={skip.id} lg={4} md={6} sm={6} xs={12}>
          <div 
            className={`skip-card ${selectedSkipId === skip.id ? 'selected' : ''}`}
            onClick={() => onSkipClick(skip)}
          >
            <div className="skip-size-overlay">
              {skip.size} Yard
            </div>
            
            <img 
              src={skip.image} 
              alt={`${skip.size} Yard Skip`}
              className="skip-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDIwMCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTYwIiBmaWxsPSIjRjVGMUU4Ii8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI4MCIgZmlsbD0iI0QyODQ1QSIvPgo8dGV4dCB4PSIxMDAiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5Ta2lwPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
            
            <div className="px-3 pb-3">
              <div className="skip-price">
                £{calculateTotalPrice(skip).toFixed(0)}
              </div>
            </div>
            
            <button 
              className={`select-btn ${selectedSkipId === skip.id ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onSkipSelected(skip.id);
              }}
            >
              {selectedSkipId === skip.id ? 'Selected' : 'Select'}
            </button>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SkipGrid;

