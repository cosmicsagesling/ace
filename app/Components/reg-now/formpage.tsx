"use client"
import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',

    // Course & Program Info
    programOfInterest: '',
    learningMode: '',
    preferredStartDate: '',

    // Education & Goals
    currentProfession: '',
    studyDestination: '',
    experienceLevel: '',

    // Additional Info
    message: '',
    referralCode: '',
    hearAboutUs: '',

    // Consent
    marketingConsent: false
  });

  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Program Details' },
    { number: 3, label: 'Goals & Background' },
    { number: 4, label: 'Final Step' }
  ];

  const countryCodes = [
    '+1', '+44', '+91', '+61', '+86', '+81', '+49', '+33'
  ];

  const programOptions = [
    'IELTS', 'PTE', 'OET', 'TOEFL', 'Skill Development'
  ];

  const learningModeOptions = [
    'Online', 'Offline', 'Hybrid'
  ];

  const destinationOptions = [
    'Canada', 'UK', 'USA', 'Australia', 'New Zealand', 'Ireland'
  ];

  const experienceLevels = [
    'Beginner', 'Intermediate', 'Advanced'
  ];

  const hearAboutUsSources = [
    'Google', 'Social Media', 'Friend Referral', 'Advertisement', 'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContinue = () => {
    // Basic validation for each step
    switch (currentStep) {
      case 1:
        if (formData.fullName && formData.email && formData.phone) {
          setCurrentStep(2);
        }
        break;
      case 2:
        if (formData.programOfInterest && formData.learningMode) {
          setCurrentStep(3);
        }
        break;
      case 3:
        setCurrentStep(4);
        break;
      default:
        break;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 1: Personal Information</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Phone Number</label>
              <div className="flex space-x-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-1/3 px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countryCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="WhatsApp preferred"
                  className="w-2/3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button 
              onClick={handleContinue}
              disabled={!formData.fullName || !formData.email || !formData.phone}
              className={`w-full py-2 rounded-md text-white ${
                formData.fullName && formData.email && formData.phone
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 2: Program Details</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Program of Interest</label>
              <select
                name="programOfInterest"
                value={formData.programOfInterest}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Program</option>
                {programOptions.map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Preferred Learning Mode</label>
              <div className="space-y-2">
                {learningModeOptions.map(mode => (
                  <label key={mode} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="learningMode"
                      value={mode}
                      checked={formData.learningMode === mode}
                      onChange={handleInputChange}
                      className="form-radio"
                    />
                    <span className="ml-2">{mode}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Preferred Start Date</label>
              <input
                type="date"
                name="preferredStartDate"
                value={formData.preferredStartDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              onClick={handleContinue}
              disabled={!formData.programOfInterest || !formData.learningMode}
              className={`w-full py-2 rounded-md text-white ${
                formData.programOfInterest && formData.learningMode
                  ? 'bg-blue-500 hover:bg-blue-600' 
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Step 3: Goals & Background</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Current Profession/Education</label>
              <input
                type="text"
                name="currentProfession"
                value={formData.currentProfession}
                onChange={handleInputChange}
                placeholder="Your current role or education"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Study/Work Destination</label>
              <select
                name="studyDestination"
                value={formData.studyDestination}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Destination</option>
                {destinationOptions.map(destination => (
                  <option key={destination} value={destination}>{destination}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Experience Level</label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Level</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <button 
              onClick={handleContinue}
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Final Step: Additional Information</h2>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Additional Message/Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any specific concerns or goals?"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">Referral Code (Optional)</label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleInputChange}
                placeholder="Enter referral code if any"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700">How Did You Hear About Us?</label>
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Source</option>
                {hearAboutUsSources.map(source => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Subscribe to WhatsApp/Email Updates</span>
              </label>
            </div>
            <button 
              onClick={() => {
                if (formData.termsAccepted) {
                  console.log('Form submitted', formData);
                  alert('Registration Completed Successfully!');
                } else {
                  alert('Please accept Terms & Conditions');
                }
              }}
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit Registration
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Progress Indicator */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`w-full flex items-center ${
                index < currentStep ? 'text-blue-500' : 'text-gray-300'
              } ${index < steps.length - 1 ? 'mr-2' : ''}`}
            >
              <div className={`w-full h-1 ${
                index < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-300'
              }`}></div>
              <div className={`w-12 h-8 rounded-full flex items-center justify-center border-2 ${
                currentStep === step.number 
                  ? 'bg-blue-500 text-white border-blue-500'
                  : index < currentStep 
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white text-gray-300 border-gray-300'
              }`}>
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Form Content */}
        {renderStepContent()}
      </div>
    </div>
  );
};

export default MultiStepForm;