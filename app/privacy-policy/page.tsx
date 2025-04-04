import React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>Privacy Policy | A.C.E Training</title>
        <meta name="description" content="Privacy Policy for A.C.E Training website" />
      </Head>
      
      <main>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm mb-4 bg-green-300 rounded-full px-4 py-2">Last updated: April 04, 2025</p>
        
        <div className="prose prose-lg">
          <p className="mb-4">
            This Privacy Policy describes Our policies and procedures on the collection,
            use and disclosure of Your information when You use the Service and tells You
            about Your privacy rights and how the law protects You.
          </p>
          
          <p className="mb-8">
            We use Your Personal data to provide and improve the Service. By using the
            Service, You agree to the collection and use of information in accordance with
            this Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Interpretation</h3>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings defined
            under the following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Definitions</h3>
          <p className="mb-2">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&ldquo; or &quot;Our&quot; in this Agreement) refers to AMOS Center of Excellence, 124 City Road, London, EC1V 2NX.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</li>
            <li><strong>Country</strong> refers to: United Kingdom</li>
            <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Website</strong> refers to A.C.E, accessible from <a href="https://theacetraining.com" className="text-blue-600 hover:underline">https://theacetraining.com</a></li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Types of Data Collected</h3>
          <div className='ring-1 ring-slate-200 p-3 rounded-xl'>
          <h4 className="text-lg font-medium mt-4 mb-2 border-b-2 border-b-slate-200 pb-4">Personal Data</h4>
          <p className="mb-2">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>
          
          </div>
          
         
          <h4 className="text-lg font-medium mt-4 mb-2">Usage Data</h4>
          <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Use of Your Personal Data</h3>
          <p className="mb-2">We may use Your Personal Data for purposes such as:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To manage Your Account</li>
            <li>To contact You regarding updates or informative communications</li>
            <li>To provide You with news and special offers</li>
            <li>To manage Your requests</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Retention of Your Personal Data</h3>
          <p className="mb-4">
            We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Security of Your Personal Data</h3>
          <p className="mb-4">
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Privacy Policy</h2>
          <p className="mb-4">
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
          <p className="mb-8">By email: <a href="mailto:info@theacetraining.com" className="text-blue-600 hover:underline">info@theacetraining.com</a></p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;