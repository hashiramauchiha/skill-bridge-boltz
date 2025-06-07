import React from 'react';
import { UserPlus, Search, FileText, CheckCircle, CreditCard, Star, ArrowRight, Users, Briefcase } from 'lucide-react';

const HowItWorks = () => {
  const freelancerSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Create Your Profile',
      description: 'Sign up and build a comprehensive profile showcasing your skills, experience, and portfolio.',
      details: ['Upload portfolio samples', 'List your skills and expertise', 'Set your hourly rates', 'Complete identity verification']
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Browse & Apply',
      description: 'Find projects that match your skills and submit compelling proposals.',
      details: ['Filter projects by skill and budget', 'Submit personalized proposals', 'Showcase relevant experience', 'Stand out with your profile']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Sign Contract',
      description: 'Use our pre-designed templates to create a secure, legally-binding agreement.',
      details: ['Choose appropriate contract template', 'Negotiate terms and milestones', 'Digital signature process', 'Automatic escrow setup']
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Complete Milestones',
      description: 'Work on defined milestones and track your progress through our dashboard.',
      details: ['Access real-time project dashboard', 'Submit work for milestone review', 'Communicate with client seamlessly', 'Track time and deliverables']
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Receive Payments',
      description: 'Get paid securely through our escrow system as you complete each milestone.',
      details: ['Automatic payment release', 'Multiple withdrawal options', 'Transaction history tracking', 'Tax documentation support']
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Build Reputation',
      description: 'Earn endorsements and reviews to build your credibility on the platform.',
      details: ['Receive skill endorsements', 'Collect client testimonials', 'Build credibility score', 'Unlock premium features']
    }
  ];

  const clientSteps = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Create Account',
      description: 'Sign up as a client and complete your company profile verification.',
      details: ['Business verification process', 'Set up payment methods', 'Define project requirements', 'Complete profile setup']
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Post Your Project',
      description: 'Create detailed project listings with clear requirements and budgets.',
      details: ['Define project scope and timeline', 'Set budget and payment terms', 'Specify required skills', 'Upload project materials']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Review Proposals',
      description: 'Evaluate freelancer proposals and choose the best fit for your project.',
      details: ['Review freelancer profiles', 'Compare proposals and rates', 'Check endorsements and reviews', 'Conduct interviews if needed']
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Finalize Contract',
      description: 'Use our contract templates to formalize the working relationship.',
      details: ['Select contract template', 'Define milestones and deliverables', 'Set payment schedule', 'Activate escrow protection']
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Monitor Progress',
      description: 'Track project progress through our real-time dashboard and communicate with your freelancer.',
      details: ['Monitor milestone completion', 'Review submitted work', 'Provide feedback and revisions', 'Approve completed milestones']
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Complete & Endorse',
      description: 'Review final deliverables, release final payment, and endorse your freelancer\'s skills.',
      details: ['Final project review', 'Release escrow payments', 'Leave detailed reviews', 'Endorse freelancer skills']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How SkillBridge Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A simple, secure, and transparent process that connects talented freelancers 
            with clients who value quality work
          </p>
        </div>

        {/* Process Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Complete Journey</h2>
            <p className="text-lg text-gray-600">From connection to completion, every step is designed for success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {['Sign Up', 'Connect', 'Contract', 'Work', 'Pay', 'Endorse'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <div className="text-sm font-medium text-gray-700">{step}</div>
                {index < 5 && (
                  <ArrowRight className="h-4 w-4 text-gray-400 mx-auto mt-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Freelancers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="h-4 w-4 mr-2" />
              For Freelancers
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From building your profile to earning endorsements, here's how freelancers thrive on SkillBridge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelancerSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Briefcase className="h-4 w-4 mr-2" />
              For Clients
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Idea to Completion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how clients successfully manage projects and build lasting relationships with top freelancers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mr-4">
                    {step.icon}
                  </div>
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-900 text-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Process Works</h2>
            <p className="text-lg text-gray-300">
              Built on trust, secured by technology, powered by community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Process</h3>
              <p className="text-gray-300">Every step is verified and secure, ensuring quality outcomes for all parties involved.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
              <p className="text-gray-300">Milestone-based escrow ensures freelancers get paid and clients get quality work.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Build Reputation</h3>
              <p className="text-gray-300">Our endorsement system helps build lasting professional relationships and credibility.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and clients who trust SkillBridge for their projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Start as Freelancer
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Post a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;