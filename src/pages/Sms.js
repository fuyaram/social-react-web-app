import React, { useState } from 'react';
import '../pages/Sms.css'; // Import your CSS file

const Sms = () => {
  const [message, setMessage] = useState('');
  
  const handleSendMessage = () => {
    // Implement logic to send the message
    console.log('Message sent:', message);
    // Clear the input field after sending the message
    setMessage('');
  };

  return (
    <div className="messaging-container">
      <div className="user-info">
  <img src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" className="user-picture" />
  <div className="user-details">
    <h6 className='io'>mark-8</h6>
    <p className="user-status">Online</p>
  </div>
</div>
      <div className="message-container">
        {/* Messages will be displayed here */}
      </div>
      <div className="typing-bar">
        <input 
          type="text" 
          placeholder="Type your message..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Sms;
