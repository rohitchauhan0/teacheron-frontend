import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-teal-300 inline-block mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Learning mind <span className="text-red-500">💥</span></li>
            <li>About us</li>
            <li>Stay safe</li>
            <li>Blog</li>
            <li>Refer & earn coins</li>
            <li>FAQs</li>
            <li>Coins & Pricing</li>
            <li>How it works - Students</li>
            <li>Pay teachers</li>
          </ul>
        </div>

        {/* For teachers */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-teal-300 inline-block mb-4">For teachers</h3>
          <ul className="space-y-2">
            <li>Get paid</li>
            <li>Premium membership</li>
            <li>Online teaching guide</li>
            <li>How it works - Teachers</li>
            <li>How to get jobs</li>
            <li>Applying to jobs</li>
            <li>Teacher Rankings</li>
            <li>Share a story</li>
          </ul>
        </div>

        {/* Help and Feedback */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-teal-300 inline-block mb-4">Help and Feedback</h3>
          <ul className="space-y-2">
            <li>Feedback</li>
            <li>Testimonials</li>
            <li>Contact us</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <hr className="border-gray-600 my-2" />
            <li>Games</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
