import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import Chatbot from '../components/Chatbot';
import bannerImage from "../assets/traveler-man-talking-on-mobile-phone-against-of-the-mountain-free-photo.jpg";
import customerService from "../assets/customerservice.jpg";
import newtworkPlan from "../assets/networkplan.avif";
import reliablenetwork from "../assets/reliablenetwork.jpg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <header className="relative">
        <img
          src={bannerImage}
          alt="Telecommunication Banner"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1
            className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
            style={{
              fontFamily: `'Poppins', sans-serif`,
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
              animation: 'fadeIn 2s ease-in-out',
            }}
          >
            Stay Connected Anywhere
          </h1>
          <p
            className="text-lg mb-6 max-w-2xl text-white drop-shadow"
            style={{
              fontFamily: `'Roboto', sans-serif`,
              textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
              animation: 'fadeIn 2.5s ease-in-out',
            }}
          >
            Discover reliable mobile network solutions tailored to your needs.
            Affordable, seamless, and always available.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-teal-500 px-6 py-3 rounded-lg text-lg font-medium text-white hover:bg-teal-600 transition transform hover:scale-105"
              style={{
                animation: 'buttonSlideIn 2s ease-in-out',
              }}
            >
              Learn More
            </button>
            <button
              className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-medium text-white hover:bg-blue-600 transition transform hover:scale-105"
              style={{
                animation: 'buttonSlideIn 2.5s ease-in-out',
              }}
            >
              View Plans
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="py-12 px-6">
        <h2
          className="text-3xl font-semibold text-center mb-8 text-gray-800 animate-fadeIn"
          style={{ fontFamily: `'Poppins', sans-serif` }}
        >
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 animate-fadeIn">
            <img
              src={newtworkPlan}
              alt="Network Plans"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3
              className="text-lg font-bold mb-2 text-gray-700"
              style={{ fontFamily: `'Roboto', sans-serif` }}
            >
              Affordable Plans
            </h3>
            <p className="text-gray-600">
              Choose from a variety of affordable plans tailored to your needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 animate-fadeIn">
            <img
              src={customerService}
              alt="Customer Support"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3
              className="text-lg font-bold mb-2 text-gray-700"
              style={{ fontFamily: `'Roboto', sans-serif` }}
            >
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Our support team is available round-the-clock to assist you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 animate-fadeIn">
            <img
              src={reliablenetwork}
              alt="Mobile Technology"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3
              className="text-lg font-bold mb-2 text-gray-700"
              style={{ fontFamily: `'Roboto', sans-serif` }}
            >
              Reliable Network
            </h3>
            <p className="text-gray-600">
              Enjoy seamless connectivity with our advanced technology.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
          {/* Logo Section */}
          <div>
            <div className="text-blue-600 text-3xl font-bold">
              <span>Telecom</span>
            </div>
            <p className="text-gray-600 mt-2">
              Reliable and affordable telecommunication solutions.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Solutions</h4>
            <ul className="text-gray-600 space-y-1">
              <li className='cursor-pointer'>Marketing</li>
              <li className='cursor-pointer'>Analytics</li>
              <li className='cursor-pointer'>Automation</li>
              <li className='cursor-pointer'>Commerce</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
            <ul className="text-gray-600 space-y-1">
              <li className='cursor-pointer'>Submit Ticket</li>
              <li className='cursor-pointer'>Documentation</li>
              <li className='cursor-pointer'>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
            <ul className="text-gray-600 space-y-1">
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Jobs</li>
              <li className='cursor-pointer'>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
            <ul className="text-gray-600 space-y-1">
              <li className='cursor-pointer' >Terms of Service</li>
              <li className='cursor-pointer'>Privacy Policy</li>
              <li className='cursor-pointer'>License</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600">&copy; 2024 Telecom, Inc. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 text-gray-500">
            <a href="#" className="hover:text-blue-500 cursor-pointer"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500 cursor-pointer"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500 cursor-pointer"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-500 cursor-pointer"><FaGithub /></a>
            <a href="#" className="hover:text-blue-500 cursor-pointer"><FaYoutube /></a>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Home;
