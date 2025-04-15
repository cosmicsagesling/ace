"use client";
import React, { FormEvent, useState } from "react";

const ImprovedCTA = () => {
  const [contactInfo, setContactInfo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Regex for email and phone number validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();

    // Trim the input
    const trimmedContactInfo = contactInfo.trim();

    // Validate input
    if (!trimmedContactInfo) {
      setError("Please enter your email or mobile number");
      return;
    }

    // Check if input is a valid email or phone number
    if (!emailRegex.test(trimmedContactInfo) && !phoneRegex.test(trimmedContactInfo)) {
      setError("Please enter a valid email address or phone number");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      const response  = await fetch("/api/submitForm",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({mobcta: trimmedContactInfo})
      })
      
      if(response.ok){
        console.log("Form submitted successfully");
        setSubmitted(true);
      }// 2 seconds delay to show the loading state
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="m-5  text-black bg-[url('/more-leaves.png')] bg-no-repeat ring-1  ring-slate-300  rounded-xl bg-right from-green-500 to-green-200 md:p-15 px-5 py-10 rounded-">
      <div className="md:mx-auto">
        <h2 className="max-md:text-3xl text-4xl font-bold mb-4 max-md:text-white">
          Take the First Step Towards Your Success!
        </h2>
        <p className="max-md:text-sm md:text-slate-400 max-md:text-slate-200  mb-6">
          Start your journey with The A.C.E. today! Get expert training, flexible learning, and proven <span className="bg-green-800 text-white px-2 ml-2 "> <i>success strategies</i></span> 
        </p>

        {!submitted ? (
          <div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mt-6  flex flex-col md:flex-row "
            >
              <div className="flex-grow">
                <input
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Enter your email or mobile number"
                  className="w-full px-4 py-3 rounded-l-lg md:rounded-l-lg ring-1 ring-slate-300 md:rounded-r-none rounded-r-lg bg-white text-gray-800 focus:outline-none"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className={`${
                  isLoading ? "bg-green-900" : "bg-green-900 hover:bg-green-600"
                } md:border-l-2 max-md:mt-6 text-white font-semibold px-6 py-3 rounded-r-lg md:rounded-l-none rounded-l-lg transition cursor-pointer duration-300`}
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
              <p className="text-xl mb-2 text-white">Thank you for reaching out!</p>
              <p className="text-white">
                We&apos;ll contact you shortly to schedule your free consultation.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setContactInfo("");
                }}
                className="text-white mt-4 underline hover:text-purple-200"
              >
                Submit another request
              </button>
            </div>
          </>
        )}

        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-center md:justify-between">
          <p className="text-green-600 max-md:text-green-400 mb-4 md:mb-0">
            Don&apos;t wait—your future starts now!
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm ">⭐⭐⭐⭐⭐</span>
            <span className="text-black">Exceptional Ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedCTA;