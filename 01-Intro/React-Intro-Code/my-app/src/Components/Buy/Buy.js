import React, { useState } from 'react';
import './Buy.css';

function Buy() {
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="buy-container">
      <div className="buy-box">
        <p className="product-info">Nike 9000</p>
        <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to proceed with the purchase?</p>
            <button className="confirm-button" onClick={handleClosePopup}>Confirm</button>
            <button className="cancel-button" onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buy;
