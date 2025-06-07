import React from 'react';
import { Award, Shield, FileCheck, Eye, BarChart3, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: 'Skill Endorsements',
      description: 'Peer-reviewed skill validation system that builds credible professional profiles',
      details: [
        'Verified endorsements from completed project clients',
        'Skill level ratings and competency assessments',
        'Public endorsement history and credibility scores',
        'Industry-specific skill categorization and tags'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="h-12 w-12 text-teal-600" />,
      title: 'Milestone-based Escrow Payments',
      description: 'Secure payment system that protects both clients and freelancers throughout the project lifecycle',
      details: [
        'Funds held securely until milestone completion',
        'Automated release based on client approval',
        'Dispute resolution with mediation support',
        'Multiple payment methods and currency support'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <FileCheck className="h-12 w-12 text-purple-600" />,
      title: 'Pre-designed Contract Templates',
      description: 'Professional, legally-sound contract templates that ensure clear project agreements',
      details: [
        'Industry-specific contract templates',
        'Customizable terms and conditions',
        'Digital signature integration',
        'Legal compliance and intellectual property protection'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Eye className="h-12 w-12 text-green-600" />,
      title: 'Profile Credibility Indicators',
      description: 'Comprehensive credibility system that helps clients identify trustworthy freelancers',
      details: [
        'Verification badges for identity and skills',
        'Project completion rates and quality scores',
        'Client satisfaction ratings and reviews',
        'Portfolio validation and work samples'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
      title: 'Real-time Project Tracking Dashboard',
      description: 'Comprehensive dashboard for monitoring project progress, milestones, and payments',
      details: [
        'Live project status updates and notifications',
        'Milestone progress tracking and timeline views',
        'Communication logs and file sharing',
        'Performance analytics and insights'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-indigo-600" />,
      title: 'Quality Assurance System',
      description: 'Multi-layered quality control system ensuring high standards across all projects',
      details: [
        'Automated quality checks and validations',
        'Peer review processes for completed work',
        'Client feedback integration and analysis',
        'Continuous improvement recommendations'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of features that make SkillBridge 
            the most secure and professional freelance marketplace
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}>
              {/* Feature Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-4">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Visualization */}
              <div className="flex-1">
                <div className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                  <div className="text-center">
                    <div className="mb-6">
                      {React.cloneElement(feature.icon, { className: 'h-16 w-16 mx-auto text-white opacity-80' })}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <div className="bg-white bg-opacity-20 rounded-lg p-6">
                      <div className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-left text-sm opacity-90">
                            • {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Highlight */}
        <div className="mt-20 bg-gray-900 text-white rounded-2xl p-12">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Security</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Every feature is built with security at its core. From encrypted communications 
              to secure payment processing, your data and transactions are protected by 
              bank-level security protocols.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">256-bit</div>
                <div className="text-gray-300">SSL Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">PCI DSS</div>
                <div className="text-gray-300">Compliant Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why SkillBridge Stands Out
            </h2>
            <p className="text-lg text-gray-600">
              See how our features compare to traditional freelance platforms
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-gray-50 p-6 font-semibold text-gray-900">Features</div>
              <div className="bg-blue-50 p-6 text-center font-semibold text-blue-900">SkillBridge</div>
              <div className="bg-gray-50 p-6 text-center font-semibold text-gray-700">Platform A</div>
              <div className="bg-gray-50 p-6 text-center font-semibold text-gray-700">Platform B</div>
              
              <div className="p-6 border-t">Peer-reviewed Endorsements</div>
              <div className="p-6 border-t bg-blue-50 text-center text-green-600 font-semibold">✓</div>
              <div className="p-6 border-t text-center text-red-500">✗</div>
              <div className="p-6 border-t text-center text-red-500">✗</div>
              
              <div className="p-6 border-t bg-gray-50">Milestone-based Escrow</div>
              <div className="p-6 border-t bg-blue-50 text-center text-green-600 font-semibold">✓</div>
              <div className="p-6 border-t bg-gray-50 text-center text-yellow-500">Partial</div>
              <div className="p-6 border-t bg-gray-50 text-center text-red-500">✗</div>
              
              <div className="p-6 border-t">Contract Templates</div>
              <div className="p-6 border-t bg-blue-50 text-center text-green-600 font-semibold">✓</div>
              <div className="p-6 border-t text-center text-red-500">✗</div>
              <div className="p-6 border-t text-center text-yellow-500">Basic</div>
              
              <div className="p-6 border-t bg-gray-50">24/7 Support</div>
              <div className="p-6 border-t bg-blue-50 text-center text-green-600 font-semibold">✓</div>
              <div className="p-6 border-t bg-gray-50 text-center text-yellow-500">Business Hours</div>
              <div className="p-6 border-t bg-gray-50 text-center text-red-500">✗</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;