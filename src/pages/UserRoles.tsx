import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Shield, CheckCircle, Star, TrendingUp, FileText, CreditCard, Settings } from 'lucide-react';

const UserRoles = () => {
  const roles = [
    {
      title: 'Freelancers',
      icon: <Users className="h-12 w-12 text-blue-600" />,
      description: 'Talented professionals offering their skills and expertise to clients worldwide',
      color: 'from-blue-500 to-blue-600',
      features: [
        {
          icon: <Star className="h-6 w-6 text-blue-600" />,
          title: 'Build Your Reputation',
          description: 'Earn skill endorsements and build a credible professional profile'
        },
        {
          icon: <CreditCard className="h-6 w-6 text-blue-600" />,
          title: 'Secure Payments',
          description: 'Get paid through milestone-based escrow system'
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: 'Grow Your Business',
          description: 'Access premium projects and increase your earning potential'
        },
        {
          icon: <FileText className="h-6 w-6 text-blue-600" />,
          title: 'Professional Contracts',
          description: 'Use pre-designed templates for secure agreements'
        }
      ],
      capabilities: [
        'Create comprehensive professional profiles',
        'Browse and apply to relevant projects',
        'Showcase portfolio and work samples',
        'Receive and manage skill endorsements',
        'Track project milestones and deadlines',
        'Communicate with clients through secure channels',
        'Manage payments and financial records',
        'Build long-term client relationships'
      ]
    },
    {
      title: 'Clients',
      icon: <Briefcase className="h-12 w-12 text-teal-600" />,
      description: 'Businesses and individuals seeking top-quality freelance talent for their projects',
      color: 'from-teal-500 to-teal-600',
      features: [
        {
          icon: <Users className="h-6 w-6 text-teal-600" />,
          title: 'Find Top Talent',
          description: 'Access verified freelancers with proven track records'
        },
        {
          icon: <Shield className="h-6 w-6 text-teal-600" />,
          title: 'Protected Investments',
          description: 'Escrow system ensures work completion before payment'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-teal-600" />,
          title: 'Quality Assurance',
          description: 'Review work at each milestone before approval'
        },
        {
          icon: <FileText className="h-6 w-6 text-teal-600" />,
          title: 'Legal Protection',
          description: 'Comprehensive contracts protect your interests'
        }
      ],
      capabilities: [
        'Post detailed project requirements',
        'Review and compare freelancer proposals',
        'Check freelancer credentials and endorsements',
        'Set up milestone-based payment schedules',
        'Monitor project progress in real-time',
        'Provide feedback and request revisions',
        'Release payments upon milestone completion',
        'Endorse freelancer skills after project completion'
      ]
    },
    {
      title: 'Administrators',
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      description: 'Platform managers ensuring smooth operations, security, and dispute resolution',
      color: 'from-purple-500 to-purple-600',
      features: [
        {
          icon: <Settings className="h-6 w-6 text-purple-600" />,
          title: 'Platform Management',
          description: 'Oversee all platform operations and user activities'
        },
        {
          icon: <Shield className="h-6 w-6 text-purple-600" />,
          title: 'Security Monitoring',
          description: 'Ensure platform security and prevent fraudulent activities'
        },
        {
          icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
          title: 'Dispute Resolution',
          description: 'Mediate conflicts and resolve payment disputes'
        },
        {
          icon: <Users className="h-6 w-6 text-purple-600" />,
          title: 'User Verification',
          description: 'Verify user identities and professional credentials'
        }
      ],
      capabilities: [
        'Monitor platform usage and performance',
        'Verify user identities and business credentials',
        'Resolve disputes between clients and freelancers',
        'Manage payment processing and escrow services',
        'Enforce platform policies and guidelines',
        'Provide customer support and technical assistance',
        'Analyze platform metrics and user feedback',
        'Implement security measures and fraud prevention'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            User Roles & Modules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how different user types interact with SkillBridge and 
            the unique features available to each role
          </p>
        </div>

        {/* Role Cards */}
        <div className="space-y-16">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${role.color} text-white p-8`}>
                <div className="flex items-center justify-center mb-6">
                  {role.icon}
                </div>
                <h2 className="text-3xl font-bold text-center mb-4">
                  {role.title}
                </h2>
                <p className="text-lg text-center opacity-90 max-w-2xl mx-auto">
                  {role.description}
                </p>
              </div>

              <div className="p-8">
                {/* Key Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {role.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Capabilities */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    Platform Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {role.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interaction Flow */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Roles Interact
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the collaborative ecosystem of SkillBridge
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Freelancer to Client */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-md mb-4">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <span className="text-2xl">→</span>
                  <Briefcase className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Freelancer → Client
                </h3>
                <p className="text-gray-600 text-sm">
                  Submit proposals, complete milestones, deliver quality work, receive endorsements
                </p>
              </div>
            </div>

            {/* Client to Freelancer */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-md mb-4">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <Briefcase className="h-8 w-8 text-teal-600" />
                  <span className="text-2xl">→</span>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Client → Freelancer
                </h3>
                <p className="text-gray-600 text-sm">
                  Post projects, review proposals, manage payments, provide feedback
                </p>
              </div>
            </div>

            {/* Admin Oversight */}
            <div className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-md mb-4">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                  <span className="text-2xl">⟷</span>
                  <div className="flex space-x-1">
                    <Users className="h-6 w-6 text-blue-600" />
                    <Briefcase className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Admin Oversight
                </h3>
                <p className="text-gray-600 text-sm">
                  Monitor activities, resolve disputes, ensure platform security and compliance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Role Selection CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Choose Your Role
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to join SkillBridge? Select your role to get started with features 
            tailored specifically for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>Join as Freelancer</span>
            </Link>
            <Link
              to="/auth"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              <span>Join as Client</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoles;