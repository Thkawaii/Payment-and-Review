import React, { useState } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';
import './Review.css';


  
const menuItems = [
    { name: "Home", icon: "https://cdn-icons-png.flaticon.com/128/18390/18390765.png", route: "/" },
    { name: "Payment", icon: "https://cdn-icons-png.flaticon.com/128/18209/18209461.png", route: "/payment" },
    { name: "Review", icon: "https://cdn-icons-png.flaticon.com/128/7656/7656139.png", route: "/review" },
    { name: "History", icon: "https://cdn-icons-png.flaticon.com/128/9485/9485945.png", route: "/review/history" },
  ];

  
const review: React.FC = () => {
      const navigate = useNavigate();
      const [rating, setRating] = useState<number | null>(null);
      const [reviewText, setReviewText] = useState<string>('');
      const [feedbackOptions, setFeedbackOptions] = useState<string[]>([]);
      const [hovered, setHovered] = useState(false);
      const [selectedImage, setSelectedImage] = useState<string>("");
      const handleMenuClick = (item: { name: string; icon: string; route: string }) => {
        setSelectedImage(item.icon);
        navigate(item.route);
      };
      const toggleFeedbackOption = (option: string) => {
        setFeedbackOptions((prevOptions) =>
          prevOptions.includes(option)
            ? prevOptions.filter((o) => o !== option)
            : [...prevOptions, option]
        );
      };  
    
      const handleRatingClick = (value: number) => {
        setRating(value);
      };
      const handleSubmit = () => {
        console.log({
          rating,
          reviewText,
          feedbackOptions,
        });
        alert('Review Submitted!');
        navigate('/review/history'); // Navigate to a thank-you or confirmation page
        };

        const handleCancel = () => {
            console.log("/payment");
          };
    
      const handleReviewLater = () => {
        alert("You can review later!");
        navigate("/"); // Redirect to the home or another page
      };
      return (
        <div className="review-container">
            {/* Sidebar */}
      <div className="sidebar">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="menu-item"
            onClick={() => handleMenuClick(item)}
          >
            <img src={item.icon} alt={item.name} className="menu-icon" />
            <p className="menu-text">{item.name}</p>
          </div>
        ))}
      </div>
          <header className="review-header">
            <h1>REVIEW</h1>
            <div className="step-indicator4">
              <div className="step completed"></div>
              <div className="step active"></div>
              <div className="step"></div>
            </div>
          </header>
    
          <div className="review-content">
            <div className="rating-section">
        <div className="review-card driver-card">
        <div className="driver-card">
        <div className="driver-image-frame">
  <img
    className="driver-image"
    src="https://cdn-icons-png.flaticon.com/128/2684/2684218.png"
    alt="Driver Avatar"
  />
</div>

<p className="driver-id">Driver_ID: 09</p>

</div>

<div className="rating-buttons">
        <button
          className={`reaction-button like ${
            feedbackOptions.includes('like') ? 'active' : ''
          }`}
          onClick={() => toggleFeedbackOption('like')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/456/456115.png"
            alt="Like"
            className="reaction-icon"
          />
          Like
        </button>
        <button
          className={`reaction-button dislike ${
            feedbackOptions.includes('dislike') ? 'active' : ''
          }`}
          onClick={() => toggleFeedbackOption('dislike')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/9849/9849304.png"
            alt="Dislike"
            className="reaction-icon"
          />
          Dislike
        </button>
        <button
          className={`reaction-button love ${
            feedbackOptions.includes('love') ? 'active' : ''
          }`}
          onClick={() => toggleFeedbackOption('love')}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107845.png"
            alt="Love"
            className="reaction-icon"
          />
          Love
        </button>
      </div>
        <p className="rating-label">Rating</p>
<div className="rating-stars">
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      className={`star ${rating && rating >= star ? 'selected' : ''}`}
      onClick={() => handleRatingClick(star)}
    >
      ★
    </span>
  ))}
</div>
      </div>
              <textarea
                className="comment-box"
                placeholder="                    ----Comment Here----"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>
    
           
            <div className="review-card feedback-card">
  <h3>Optional Feedback</h3>
  <div className="feedback-options">
  {[
    { id: "comfortable", label: "Comfortable", icon: "https://cdn-icons-png.flaticon.com/128/1703/1703123.png" },
    { id: "safety", label: "Safety", icon: "https://cdn-icons-png.flaticon.com/128/1161/1161388.png" },
    { id: "communication", label: "Communication", icon: "https://cdn-icons-png.flaticon.com/128/610/610413.png" },
    { id: "cleanliness", label: "Cleanliness", icon: "https://cdn-icons-png.flaticon.com/128/2059/2059802.png" },
  ].map((option) => (
    <button
      key={option.id}
      className={`feedback-button ${feedbackOptions.includes(option.id) ? "active" : ""}`}
      onClick={() => toggleFeedbackOption(option.id)}
    >
      <img src={option.icon} alt={option.label} className="feedback-icon" />
      {option.label}
    </button>
  ))}
</div>

  <div className="contact-info-container">
  <div className="contact-message">
  <img
    src="https://cdn-icons-png.flaticon.com/128/2058/2058197.png"
    alt="Contact Icon"
    className="contact-icon"
  />
  <p>
  If the driver was rude or if you need further assistance, please do not hesitate to contact us.:
  </p>
</div>

  <div className="contact-info-item">
    <img
      src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png"
      alt="Email Icon"
      className="contact-icon"
    />
    <p>Email: <a href="mailto:Cabana@email.com">Cabana@email.com</a></p>
  </div>
  <div className="contact-info-item">
    <img
      src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
      alt="Phone Icon"
      className="contact-icon"
    />
    <p>Tel: 098-456-3211</p>
  </div>
</div>

</div>


<div className="review-card passenger-card">
  <div className="passenger-image-frame">
    <img
      className="passenger-image"
      src="https://cdn-icons-png.flaticon.com/128/1611/1611733.png"
      alt="Passenger Avatar"
    />
  </div>
  <div className="passenger-details">
    <p className="passenger-title">Review BY</p>
    <p className="passenger-id">Passenger_ID: 01</p>
  </div>
</div>


      </div>
    
          <div className="button-container">
            <button className="primary-btn" onClick={handleSubmit}>
              Submit Review
            </button>
            <button className="review-later-btn" onClick={handleReviewLater}>
          Review Later
        </button>
          </div>
        </div>
      );
    };
export default review;


