import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, FileCheck, Star, TrendingUp, Award, Search, MapPin, Clock, DollarSign } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchRole, setSearchRole] = useState('client');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&role=${searchRole}`);
    }
  };

  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Skill Endorsements',
      description: 'Peer-reviewed skill validation that builds credible professional profiles'
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600" />,
      title: 'Escrow Payments',
      description: 'Milestone-based secure payments that protect both clients and freelancers'
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: 'Contract Templates',
      description: 'Pre-designed legal templates that ensure clear project agreements'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Marketing Specialist',
      content: 'SkillBridge gave me the confidence to showcase my verified skills. The endorsement system is game-changing!',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Startup Founder',
      content: 'Finally, a platform where I can hire with confidence. The escrow system eliminated all payment concerns.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Web Developer',
      content: 'The contract templates saved me hours of legal work. Professional and secure platform.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Freelancers' },
    { number: '5K+', label: 'Completed Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Where Trust
                <span className="text-blue-600"> Meets </span>
                <span className="text-teal-600">Talent</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The secure freelance marketplace with peer-reviewed skill endorsements, 
                milestone-based escrow payments, and professional contract templates.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                      <button
                        type="button"
                        onClick={() => setSearchRole('client')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          searchRole === 'client' 
                            ? 'bg-white text-blue-600 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Hire Talent
                      </button>
                      <button
                        type="button"
                        onClick={() => setSearchRole('freelancer')}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          searchRole === 'freelancer' 
                            ? 'bg-white text-teal-600 shadow-sm' 
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Find Work
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={
                        searchRole === 'client' 
                          ? 'Search for freelancers (e.g., "React developer", "UI designer")' 
                          : 'Search for projects (e.g., "web development", "logo design")'
                      }
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Search
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    {searchRole === 'client' 
                      ? 'Find verified freelancers with proven track records' 
                      : 'Discover projects that match your skills and expertise'
                    }
                  </p>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl p-8 transform rotate-1">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Freelancers collaborating"
                  className="rounded-xl shadow-2xl transform -rotate-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with security, trust, and professionalism at its core
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of freelancers and clients worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking to hire top talent or showcase your skills, 
            SkillBridge provides the secure platform you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;