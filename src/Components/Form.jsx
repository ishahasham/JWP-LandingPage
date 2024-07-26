import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        comment: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
  return (
    <div className="contact-form-container">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name<span className='span1'>*</span></label>
        <input
          type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email<span className='span1'>*</span></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='abc@gmail.com'
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number<span className='span1'>*</span></label>
        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required placeholder='03001234567'
        />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment<span className='span1'>*</span></label>
        <textarea id="comment" name="comment" value={formData.comment}  onChange={handleChange} required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Form
