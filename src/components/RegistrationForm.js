import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './RegistrationForm.css';

<link rel="stylesheet" href="./src/assets/all.min.css" />;
<link rel="stylesheet" href="./src/assets/fontawesome.min" />;

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'driver',
    shopName: '',
    vehicleNumber: '',
    images: []
  });
  
  const [previews, setPreviews] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      setErrors({
        ...errors,
        images: 'Please select maximum 3 images'
      });
      return;
    }

    setFormData({
      ...formData,
      images: files
    });

    // Create image previews
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.type === 'shop' && !formData.shopName.trim()) newErrors.shopName = 'Shop name is required';
    if (formData.images.length === 0) newErrors.images = 'Please upload at least one image';
    if (formData.type === 'driver' && !formData.vehicleNumber.trim()) {
      newErrors.vehicleNumber = 'Vehicle number is required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const imagePromises = formData.images.map(file => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        });

        const base64Images = await Promise.all(imagePromises);
        
        const templateParams = {
          to_email: 'chanuthdulmika@gmail.com', // my email
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          type: formData.type,
          shop_name: formData.type === 'shop' ? formData.shopName : 'N/A',
          vehicle_number: formData.type === 'driver' ? formData.vehicleNumber : 'N/A',
          images: base64Images.join('|')
        };

        await emailjs.send(
          'service_381dkn4',
          'template_k9y2h7r',
          templateParams,
          'v2nPiPldzNucK00cD'
        );

        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: 'driver',
          shopName: '',
          vehicleNumber: '',
          images: []
        });
        setPreviews([]);
        
        // Show success message
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000); // Hide message after 5 seconds

      } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="registration-section" id="registration">
      <div className="container" data-aos="fade-up">
        <h2 data-aos="fade-up" data-aos-delay="100">Join Our Network</h2>
        {submitStatus === 'success' && (
          <div className="success-message">
            Thank you for registering! We'll contact you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="error-message">
            Something went wrong. Please try again later.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group" data-aos="fade-up" data-aos-delay="200">
            <label>Register as:</label>
            <select name="type" value={formData.type} onChange={handleInputChange}>
              <option value="driver">Driver</option>
              <option value="shop">Shop Owner</option>
            </select>
          </div>

          <div className="form-group" data-aos="fade-up" data-aos-delay="300">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group" data-aos="fade-up" data-aos-delay="400">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group" data-aos="fade-up" data-aos-delay="500">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          {formData.type === 'shop' && (
            <div className="form-group" data-aos="fade-up" data-aos-delay="600">
              <label>Shop Name</label>
              <input
                type="text"
                name="shopName"
                placeholder="Enter your shop name"
                value={formData.shopName}
                onChange={handleInputChange}
              />
              {errors.shopName && <div className="error-message">{errors.shopName}</div>}
            </div>
          )}

          {formData.type === 'driver' && (
            <div className="form-group" data-aos="fade-up" data-aos-delay="600">
              <label>Vehicle Number</label>
              <input
                type="text"
                name="vehicleNumber"
                placeholder="Enter your vehicle number"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
              />
              {errors.vehicleNumber && <div className="error-message">{errors.vehicleNumber}</div>}
            </div>
          )}
          
          <div className="form-group" data-aos="fade-up" data-aos-delay="700">
            <label>{formData.type === 'driver' ? 'Upload Vehicle Images' : 'Upload Shop Images'} (Max 3)</label>
            <div className="file-upload-container">
              <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fas fa-plus fa-lg"></i>
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            {errors.images && <div className="error-message">{errors.images}</div>}
            
            {previews.length > 0 && (
              <div className="image-preview">
                {previews.map((preview, index) => (
                  <img key={index} src={preview} alt={`Preview ${index + 1}`} />
                ))}
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={isSubmitting}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;