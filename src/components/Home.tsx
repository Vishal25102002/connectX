import React from 'react';
import { motion } from 'framer-motion';
import "../App.css";
import Chatbot from './chatbot/Chatbot';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaUserCircle,
  FaRocket,
  FaCheckCircle,
  FaGlobeAmericas,
  FaUsers,
  FaMapMarkerAlt,
  FaServer,
  FaBars,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';
import bannerImage from '../assets/network_ 1.png';
import productImg from '../assets/product1.jpg';
import feature from "../assets/campaign_launch 1.png";
import worldMap from '../assets/worldmap.png';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const customers = [
    { id: 1, name: 'Alice Johnson', feedback: 'Outstanding service and reliability!' },
    { id: 2, name: 'Michael Smith', feedback: 'Exceptional support and seamless connectivity.' },
    { id: 3, name: 'Samantha Lee', feedback: 'A perfect blend of innovative technology.' },
    { id: 4, name: 'Robert Brown', feedback: 'Innovative products that truly transform.' },
    { id: 5, name: 'Emily Davis', feedback: 'My go-to solution for connectivity.' },
  ];

  const products = [1, 2, 3, 4];
  const mapPins = [
    { id: 1, top: '30%', left: '23%', location: 'North America' },
    { id: 2, top: '45%', left: '50%', location: 'Europe' },
    { id: 3, top: '60%', left: '75%', location: 'Asia' },
    { id: 4, top: '70%', left: '85%', location: 'Australia' },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Custom CSS for link underline animation */}
      <style>{`
        .nav-link {
          position: relative;
          overflow: hidden;
          padding: 0.5rem 1rem;
          transition: color 0.3s;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::before {
          width: 100%;
        }
        
        .product-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
          overflow: hidden;
        }
        
        .product-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
        }
        
        .review-card {
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
        }
        
        .review-card:hover {
          border-bottom-color: #3b82f6;
          transform: translateY(-8px);
        }
        
        .hero-button {
          overflow: hidden;
          position: relative;
        }
        
        .hero-button span {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }
        
        .hero-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .hero-button:hover::after {
          width: 100%;
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
          padding-left: 0;
        }
        
        .footer-link:hover {
          padding-left: 5px;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 bg-white shadow-md backdrop-blur-md bg-opacity-90">
        <div className="flex items-center justify-between max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <FaRocket className="text-blue-600 text-2xl" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">ConnectX</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['About', 'Features', 'Products', 'Reviews', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link font-semibold text-gray-700 hover:text-blue-600"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              className="text-2xl text-gray-700"
            >
              <FaBars />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
        >
          <motion.button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <FaTimes />
          </motion.button>
          <ul className="space-y-8 text-center">
            {['About', 'Features', 'Products', 'Reviews', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-[90%] mx-auto">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital</span> Connectivity
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience seamless global connectivity with innovative, state-of-the-art technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hero-button px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow group flex items-center gap-3 hover:gap-5 transition-all duration-300"
            >
              <span>Start Free Trial</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={bannerImage}
              alt="Network"
              className="w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <FaUsers className="text-4xl text-blue-600" />, number: '+900K', label: 'Customers' },
            { icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />, number: '+30', label: 'Countries' },
            { icon: <FaServer className="text-4xl text-blue-600" />, number: '+8K', label: 'Servers' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div 
                className="p-4 bg-blue-100 rounded-full"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">{item.number}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[90%] mx-auto">
          <motion.img
            src={feature}
            alt="Features"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)"
            }}
          />
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Advanced Features</h2>
            <p className="text-gray-600 max-w-md">
              Unleash the full potential of your digital infrastructure with our cutting-edge solutions.
            </p>
            <ul className="space-y-4">
              {['AI-Powered Optimization', 'Military-Grade Security', 'Global CDN Network', '24/7 Expert Support'].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-transparent hover:border-blue-600"
                  whileHover={{ x: 10, backgroundColor: "#f9fafb" }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheckCircle className="text-blue-600 text-xl" />
                  <span className="font-medium text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[90%] mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our Products
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Innovative solutions for modern connectivity challenges
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product}
                className="product-card group relative bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={productImg}
                    alt={`Product ${product}`}
                    className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-4">Product {product}</h3>
                <p className="text-gray-600 mb-6">Advanced connectivity solution</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto group">
                  <span>Learn More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Customer Reviews
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hear from our satisfied clients
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="review-card p-6 bg-white rounded-xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 text-blue-500 text-2xl">❝</div>
                <p className="text-gray-600 italic mb-6 min-h-[80px] flex items-center justify-center">
                  "{customer.feedback}"
                </p>
                <div className="flex items-center justify-center space-x-4 mt-auto">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaUserCircle className="text-3xl text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-800">{customer.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="inline-block p-4 mb-6 bg-blue-100 rounded-full">
              <FaGlobeAmericas className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Global Network Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving clients in over 150 locations worldwide
            </p>
          </motion.div>
          <motion.div
            className="relative h-[400px] md:h-[600px] bg-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <img
              src={worldMap}
              alt="World Map"
              className="w-full h-full object-contain p-8"
            />
            {mapPins.map((pin) => (
              <motion.div
                key={pin.id}
                className="absolute flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl shadow-lg"
                style={{ top: pin.top, left: pin.left }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', delay: pin.id * 0.2 }}
              >
                <span className="text-sm font-medium">{pin.location}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-white to-gray-50 text-black py-16 border-t border-gray-200">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <FaRocket className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">ConnectX</h3>
            </div>
            <p className="text-gray-600">Revolutionizing global connectivity through innovation and excellence.</p>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ConnectX. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-100 pb-2 inline-block">Products</h4>
            <ul className="space-y-3">
              {['Enterprise VPN', 'Cloud Network', 'Security Suite', 'SD-WAN'].map((item) => (
                <li
                  key={item}
                  className="footer-link text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-100 pb-2 inline-block">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li
                  key={item}
                  className="footer-link text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b-2 border-blue-100 pb-2 inline-block">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaGithub, label: "GitHub" }, 
                { icon: FaYoutube, label: "YouTube" }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  title={item.label}
                >
                  <item.icon className="text-xl text-blue-600 group-hover:text-blue-700 transition-colors" />
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full" 
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div><Chatbot/></div>
    </div>
  );
};

export default Home;