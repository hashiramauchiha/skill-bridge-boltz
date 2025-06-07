import React from 'react';
import { Users, Target, Award, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Project Lead & Full Stack Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading the development of secure marketplace architecture'
    },
    {
      name: 'Priya Reddy',
      role: 'Frontend Developer & UI/UX Designer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Crafting intuitive user experiences and responsive designs'
    },
    {
      name: 'Arjun Singh',
      role: 'Backend Developer & Security Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Implementing secure payment systems and data protection'
    },
    {
      name: 'Sneha Sharma',
      role: 'Database Engineer & System Analyst',
      image: 'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Designing scalable database architecture and analytics'
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Security First',
      description: 'Every transaction, every contract, every interaction is secured with enterprise-grade encryption.'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: 'Trust & Transparency',
      description: 'Peer-reviewed endorsements and milestone-based payments ensure complete transparency.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Quality Focused',
      description: 'We prioritize quality over quantity, connecting the right talent with the right projects.'
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: 'Professional Excellence',
      description: 'Built by professionals, for professionals, with enterprise-level standards.'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About SkillBridge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where Trust Meets Talent - Building the future of secure freelance collaboration
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SkillBridge was born from a simple yet powerful vision: to create a freelance 
                marketplace where trust, security, and professional excellence are not just 
                promises, but guarantees.
              </p>
              <p>
                We recognized that traditional freelance platforms often lack the security 
                measures and trust-building mechanisms that both clients and freelancers 
                desperately need. That's why we built SkillBridge with three core pillars:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Peer-reviewed skill endorsements</strong> that validate real expertise</li>
                <li><strong>Milestone-based escrow payments</strong> that protect all parties</li>
                <li><strong>Professional contract templates</strong> that ensure clear agreements</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl p-4">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Context */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Institutional Excellence</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                SkillBridge is proudly developed as an Advanced Software Engineering project 
                at <strong>JNTUH University College of Engineering Jagtial (UCEJ)</strong>, 
                Department of Computer Science and Engineering.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">JNTUH UCEJ</div>
                  <div className="text-gray-600">Premier Engineering Institution</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-teal-600 mb-2">CSE Department</div>
                  <div className="text-gray-600">Computer Science Excellence</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2025 Project</div>
                  <div className="text-gray-600">Advanced Software Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The passionate developers behind SkillBridge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Standards */}
        <div className="mt-20 text-center bg-gray-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Professional Standards</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            SkillBridge is built with enterprise-grade security, scalable architecture, 
            and industry best practices. We're not just creating a platform; we're 
            setting new standards for secure freelance collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-2">Bank-Grade</div>
              <div className="text-gray-300">Security Standards</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;