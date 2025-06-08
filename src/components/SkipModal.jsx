import React from 'react';

const SkipModal = ({ skip, onClose, onSelect, isSelected }) => {
  const calculateTotalPrice = (skip) => {
    const subtotal = skip.price_before_vat;
    const vatAmount = (subtotal * skip.vat) / 100;
    return subtotal + vatAmount;
  };

  const subtotal = skip.price_before_vat;
  const vatAmount = (subtotal * skip.vat) / 100;
  const total = subtotal + vatAmount;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-custom" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
        
        <div className="text-center">
          <div className="position-relative d-inline-block">
            <img 
              src={skip.image} 
              alt={`${skip.size} Yard Skip`}
              className="modal-skip-image"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjN0E5QkI4Ii8+CjxyZWN0IHg9IjEwMCIgeT0iNzUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRDI4NDVBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5Ta2lwIENvbnRhaW5lcjwvdGV4dD4KPHN2ZyB4PSIxNTAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8bGluZSB4MT0iMCIgeTE9IjEwIiB4Mj0iMTAwIiB5Mj0iMTAiLz4KPHN2ZyB4PSIwIiB5PSIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMjAiPgo8bGluZSB4MT0iNSIgeTE9IjAiIHgyPSI1IiB5Mj0iMjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4KPHN2ZyB4PSI5MCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjIwIj4KPGxpbmUgeDE9IjUiIHkxPSIwIiB4Mj0iNSIgeTI9IjIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+CjwvdGV4dD4KPC9zdmc+Cg==';
              }}
            />
            
            {/* Dimension overlays with actual measurements */}
            <div className="dimension-overlay" style={{top: '20px', left: '50%', transform: 'translateX(-50%)'}}>
              {skip.dimensions}
            </div>
            <div className="dimension-overlay" style={{bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
              {skip.metric_dimensions}
            </div>
          </div>
          
          <h3 className="mt-3 mb-4" style={{color: 'var(--text-dark)'}}>
            <i className="bi bi-truck me-2"></i>
            {skip.size} Yard Skip
          </h3>
        </div>
        
        <div className="status-item">
          <i className={`bi ${skip.allowed_on_road ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'} status-icon`}></i>
          <span>Road Access: {skip.allowed_on_road ? 'Allowed' : 'Not Allowed'}</span>
        </div>
        
        <div className="status-item">
          <i className={`bi ${skip.allows_heavy_waste ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'} status-icon`}></i>
          <span>Heavy Waste: {skip.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}</span>
        </div>
        
        <div className="price-breakdown">
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span>VAT ({skip.vat}%):</span>
            <span>£{vatAmount.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="total-price">Total:</span>
            <span className="total-price">£{total.toFixed(2)}</span>
          </div>
        </div>
        
        <button 
          className={`modal-select-btn ${isSelected ? 'selected' : ''}`}
          onClick={() => onSelect(skip.id)}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default SkipModal;

