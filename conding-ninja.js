import React, { useState } from 'react';
import { Home, GraduationCap, Code, Users, Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, PlayCircle, Star } from 'lucide-react';

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">CodeCrafters</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center">
              <Home className="h-5 w-5 mr-1" /> Home
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center">
              <Code className="h-5 w-5 mr-1" /> Courses
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center">
              <Users className="h-5 w-5 mr-1" /> Community
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center">
              <Briefcase className="h-5 w-5 mr-1" /> Placements
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center">
              <Mail className="h-5 w-5 mr-1" /> Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 px-4 pb-4 bg-white rounded-lg shadow-md">
            <a href="#" className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              <Home className="h-5 w-5 mr-2" /> Home
            </a>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              <Code className="h-5 w-5 mr-2" /> Courses
            </a>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              <Users className="h-5 w-5 mr-2" /> Community
            </a>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              <Briefcase className="h-5 w-5 mr-2" /> Placements
            </a>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 py-2 px-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              <Mail className="h-5 w-5 mr-2" /> Contact Us
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Master Coding Skills & Land Your Dream Job
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Learn from industry experts, build real-world projects, and get placed at top tech companies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <PlayCircle className="h-6 w-6 mr-2" /> Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://placehold.co/500x300/6366F1/FFFFFF?text=Coding+Hero"
              alt="Coding Hero"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/6366F1/FFFFFF?text=Image+Not+Found"; }}
            />
          </div>
        </section>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x200/4F46E5/FFFFFF?text=Data+Structures"
                alt="Data Structures & Algorithms"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/4F46E5/FFFFFF?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Structures & Algorithms</h3>
                <p className="text-gray-600 text-sm mb-4">Master DSA for competitive programming and interviews.</p>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  <span className="text-gray-600 ml-2">(4.9/5)</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                  View Details
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x200/4F46E5/FFFFFF?text=Full+Stack"
                alt="Full Stack Web Development"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/4F46E5/FFFFFF?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Web Development</h3>
                <p className="text-gray-600 text-sm mb-4">Build powerful web applications from scratch.</p>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  <span className="text-gray-600 ml-2">(4.8/5)</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                  View Details
                </button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x200/4F46E5/FFFFFF?text=Machine+Learning"
                alt="Machine Learning & AI"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/4F46E5/FFFFFF?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning & AI</h3>
                <p className="text-gray-600 text-sm mb-4">Dive into the world of AI and build intelligent systems.</p>
                <div className="flex items-center text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  <span className="text-gray-600 ml-2">(4.7/5)</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12 bg-indigo-50 rounded-2xl p-8 md:p-12 shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img
                src="https://placehold.co/80x80/E0E7FF/4F46E5?text=JS"
                alt="Student John Doe"
                className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-indigo-300"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E7FF/4F46E5?text=Image+Not+Found"; }}
              />
              <p className="text-gray-700 italic mb-4">
                "CodeCrafters transformed my career! The instructors are amazing, and the curriculum is top-notch. I landed my dream job thanks to them."
              </p>
              <p className="font-semibold text-gray-800">- Jane Doe, Software Engineer at TechCorp</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <img
                src="https://placehold.co/80x80/E0E7FF/4F46E5?text=AS"
                alt="Student Alice Smith"
                className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-indigo-300"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/E0E7FF/4F46E5?text=Image+Not+Found"; }}
              />
              <p className="text-gray-700 italic mb-4">
                "The practical approach and constant support helped me grasp complex concepts easily. Highly recommend CodeCrafters for anyone serious about coding."
              </p>
              <p className="font-semibold text-gray-800">- John Smith, Data Scientist at DataSolutions</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Why Choose CodeCrafters?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Code className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from experienced professionals with years of industry expertise.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Curriculum</h3>
              <p className="text-gray-600">Hands-on projects and real-world case studies to build strong skills.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <Briefcase className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Placements</h3>
              <p className="text-gray-600">Dedicated placement assistance to help you land your dream job.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-indigo-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Join thousands of successful students and accelerate your career today!</p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CodeCrafters</h3>
            <p className="text-sm">
              Empowering the next generation of developers with cutting-edge coding education and career opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Courses</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Community</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Placements</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Blogs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Code Street, Tech City, India</li>
              <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 98765 43210</li>
              <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@codecrafters.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} CodeCrafters. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
