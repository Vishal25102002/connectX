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
  FaStar
} from 'react-icons/fa';
import bannerImage from '../assets/network_ 1.png';
import productImg from '../assets/product1.jpg';
import feature from "../assets/campaign_launch 1.png";
import worldMap from '../assets/worldmap.png';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const customers = [
    { id: 1, name: 'Alice Johnson', feedback: 'Outstanding service and reliability!', rating: 5 },
    { id: 2, name: 'Michael Smith', feedback: 'Exceptional support and seamless connectivity.', rating: 4 },
    { id: 3, name: 'Samantha Lee', feedback: 'A perfect blend of innovative technology.', rating: 5 },
    { id: 4, name: 'Robert Brown', feedback: 'Innovative products that truly transform.', rating: 5 },
    { id: 5, name: 'Emily Davis', feedback: 'My go-to solution for connectivity.', rating: 4 },
  ];

  const products = [
    { id: 1, name: 'ConnectX Pro', description: 'Enterprise-grade secure connection solution', price: '$99/month' },
    { id: 2, name: 'CloudNet', description: 'Cloud-based network management system', price: '$79/month' },
    { id: 3, name: 'SecureLink', description: 'Advanced security for distributed teams', price: '$129/month' },
    { id: 4, name: 'DataStream', description: 'High-speed data transfer optimization', price: '$89/month' },
  ];

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
        .footer-link {
          position: relative;
          display: inline-block;
          transition: transform 0.3s ease;
          padding-left: 5px;
        }
        .footer-link:hover {
          transform: translateX(5px);
        }
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }
        .product-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        .product-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.15);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        .pulse-animation {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 py-4 px-6 bg-white shadow-md">
        <div className="flex items-center justify-between max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <FaRocket className="text-blue-600 text-2xl" />
            <span className="text-xl font-bold">ConnectX</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['About', 'Features', 'Products', 'Reviews', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link font-semibold text-gray-700 hover:text-blue-600"
                  whileHover={{ y: -2 }}
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
            className="absolute top-4 right-4 text-3xl text-gray-700"
          >
            <FaTimes />
          </motion.button>
          <ul className="space-y-8 text-center">
            {['About', 'Features', 'Products', 'Reviews', 'Contact'].map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-semibold text-gray-700"
                  whileHover={{ y: -2 }}
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
      <section id="about" className="pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-[90%] mx-auto">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-600">Digital</span> Connectivity
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience seamless global connectivity with innovative, state-of-the-art technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-all pulse-animation"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={bannerImage}
              alt="Network"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <FaUsers className="text-4xl text-blue-600" />, number: '+900K', label: 'Customers' },
            { icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />, number: '+30', label: 'Countries' },
            { icon: <FaServer className="text-4xl text-blue-600" />, number: '+8K', label: 'Servers' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-4 bg-blue-100 rounded-full">{item.icon}</div>
              <motion.h3 
                className="text-2xl font-bold mt-4"
                initial={{ scale: 1 }}
                whileInView={{ 
                  scale: [1, 1.2, 1],
                  transition: { duration: 0.5, delay: 0.3 + index * 0.2 }
                }}
              >
                {item.number}
              </motion.h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-[90%] mx-auto">
          <motion.img
            src={feature}
            alt="Features"
            className="w-full md:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">Advanced Features</h2>
            <p className="text-gray-600 max-w-md">
              Unleash the full potential of your digital infrastructure with our cutting-edge solutions.
            </p>
            <ul className="space-y-4">
              {['AI-Powered Optimization', 'Military-Grade Security', 'Global CDN Network', '24/7 Expert Support'].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
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
      <section id="products" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 mb-8">
            Innovative solutions for modern connectivity challenges
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg product-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs py-1 px-2 rounded-full">
                  {product.price}
                </div>
                <img
                  src={productImg}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <motion.button 
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-gray-600 mb-8">Hear from our satisfied clients</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.id}
                className="p-6 bg-white rounded-xl shadow transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-lg ${i < customer.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{customer.feedback}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-2">
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
      <section className="py-16">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="inline-block p-4 mb-6 bg-blue-100 rounded-full">
              <FaGlobeAmericas className="text-blue-600 text-4xl" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Global Network Coverage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving clients in over 150 locations worldwide
            </p>
          </motion.div>
          <motion.div
            className="relative h-[400px] md:h-[600px] bg-gray-50 rounded-2xl shadow overflow-hidden"
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
                className="absolute flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
                style={{ top: pin.top, left: pin.left }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', delay: pin.id * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm">{pin.location}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-12 border-t border-gray-200">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold">ConnectX</h3>
            <p className="text-gray-600">Revolutionizing global connectivity</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {['Enterprise VPN', 'Cloud Network', 'Security Suite', 'SD-WAN'].map((item) => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-blue-600 transition footer-link"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-blue-600 transition footer-link"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[FaTwitter, FaLinkedin, FaGithub, FaYoutube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition social-icon"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="text-xl text-blue-600" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} ConnectX. All rights reserved.
        </motion.div>
      </footer>
      <div><Chatbot/></div>
    </div>
  );
};

export default Home;
