"use client";
import React, { FormEvent, useState } from "react";

const ImprovedCTA = () => {
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!contactInfo.trim()) {
      setError("Please enter your email or mobile number");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      // Simulate API call with timeout
      setTimeout(() => {
        console.log("Contact info submitted:", contactInfo);
        setSubmitted(true);
        setLoading(false);
      }, 2000); // 2 seconds delay to show the loading state
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="m-5 bg-[url('https://images.unsplash.com/photo-1737365505612-7ff3ef8f7970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] from-green-500 to-green-200 p-15 rounded-xl text-white">
      <div className="mx-auto">
        <h2 className="max-md:text-3xl text-4xl font-bold mb-4">
          Take the First Step Towards Your Success!
        </h2>
        <p className="max-md:text-sm text-slate-400 mb-6">
          Start your journey with The A.C.E. today! Get expert training, flexible learning, and proven success strategies.
        </p>

        {!submitted ? (
          <div>
            {error && <p className="text-red-200 text-sm mt-1">{error}</p>}

            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mt-6 flex flex-col md:flex-row"
            >
              <div className="flex-grow">
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Enter your email or mobile number"
                  className="w-full px-4 py-3 rounded-l-lg md:rounded-l-lg md:rounded-r-none rounded-r-lg bg-white text-gray-800 focus:outline-none"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className={`${
                  isLoading ? "bg-green-600" : "bg-green-700 hover:bg-green-600"
                } border-l-2 text-white font-semibold px-6 py-3 rounded-r-lg md:rounded-l-none rounded-l-lg transition cursor-pointer duration-300`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Get Free Consultation"
                )}
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="bg-green-700 p-6 rounded-lg text-center">
              <p className="text-xl mb-2">Thank you for reaching out!</p>
              <p>
                We&apos;ll contact you shortly to schedule your free consultation.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setContactInfo("");
                }}
                className="mt-4 underline hover:text-purple-200"
              >
                Submit another request
              </button>
            </div>
          </>
        )}

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="text-purple-100 mb-4 md:mb-0">
            Don&apos;t wait—your future starts now!
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm">⭐⭐⭐⭐⭐</span>
            <span className="text-purple-100">Exceptional Ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedCTA;