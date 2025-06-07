import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@skillbridge.dev',
      description: 'Send us an email anytime!'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 9876543210',
      description: 'Mon-Fri from 9am to 6pm IST'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      content: 'JNTUH UCEJ, Jagtial',
      description: 'Hyderabad, Telangana, India'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Support Hours',
      content: '24/7 Available',
      description: 'We are here to help anytime'
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: 'GitHub', href: '#' },
    { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', href: '#' },
    { icon: <Twitter className="h-6 w-6" />, label: 'Twitter', href: '#' }
  ];

  const faqs = [
    {
      question: 'How do I get started on SkillBridge?',
      answer: 'Simply sign up for an account, choose your role (freelancer or client), and complete your profile. You can start browsing projects or posting work immediately.'
    },
    {
      question: 'Is there a fee to use the platform?',
      answer: 'SkillBridge charges a small service fee on completed transactions to maintain the platform and provide security features like escrow payments.'
    },
    {
      question: 'How secure are the payments?',
      answer: 'We use bank-grade encryption and milestone-based escrow payments to ensure both freelancers and clients are protected throughout the project lifecycle.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about SkillBridge? We're here to help. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 font-medium mb-1">
                {info.content}
              </p>
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                  I am a...
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="client">Client</option>
                  <option value="investor">Potential Investor</option>
                  <option value="partner">Business Partner</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Team Information */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                SkillBridge is developed by passionate Computer Science students at JNTUH UCEJ 
                as part of our Advanced Software Engineering project. We're committed to 
                building the future of secure freelance collaboration.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Project Leadership</h3>
                  <p className="text-gray-600 text-sm">Rajesh Kumar - Lead Developer & Architecture</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900">Development Team</h3>
                  <p className="text-gray-600 text-sm">Priya, Arjun, Sneha - Full Stack Development</p>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Answers
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-300 mb-6">
                Follow our development journey and get updates on new features.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Looking for Documentation?
            </h2>
            <p className="text-gray-600 mb-6">
              Access our technical documentation, API references, and development guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Documentation
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;