import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Shield, CreditCard, Users, FileText, Star } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'general', label: 'General', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'endorsements', label: 'Endorsements', icon: <Star className="h-5 w-5" /> },
    { id: 'contracts', label: 'Contracts', icon: <FileText className="h-5 w-5" /> },
    { id: 'users', label: 'User Accounts', icon: <Users className="h-5 w-5" /> }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is SkillBridge and how does it work?',
      answer: 'SkillBridge is a secure freelance marketplace that connects talented professionals with clients who need quality work. Our platform features peer-reviewed skill endorsements, milestone-based escrow payments, and pre-designed contract templates to ensure trust and transparency in every project. The process is simple: create your profile, find or post projects, sign secure contracts, work on milestones, and build your reputation through endorsements.'
    },
    {
      id: 2,
      category: 'security',
      question: 'How secure is the SkillBridge platform?',
      answer: 'Security is our top priority. We use bank-grade 256-bit SSL encryption for all communications and transactions. Our platform is PCI DSS compliant for payment processing, and we implement multi-factor authentication, regular security audits, and advanced fraud detection systems. All user data is encrypted and stored securely, and we never share personal information with third parties without explicit consent.'
    },
    {
      id: 3,
      category: 'payments',
      question: 'How does the escrow payment system work?',
      answer: 'Our milestone-based escrow system protects both freelancers and clients. When a project begins, the client deposits the agreed amount into our secure escrow account. Funds are released to the freelancer only when each milestone is completed and approved by the client. If there are disputes, our mediation team helps resolve them fairly. This ensures freelancers get paid for their work and clients receive the deliverables they expect.'
    },
    {
      id: 4,
      category: 'endorsements',
      question: 'Are skill endorsements verified?',
      answer: 'Yes, all skill endorsements on SkillBridge are verified and come from clients who have actually worked with the freelancer on completed projects. Unlike other platforms where anyone can endorse skills, our endorsements are tied to real project outcomes and client satisfaction. This creates a credible system where endorsements truly reflect a freelancer\'s proven abilities and work quality.'
    },
    {
      id: 5,
      category: 'contracts',
      question: 'What contract templates are available?',
      answer: 'SkillBridge provides a comprehensive library of pre-designed, legally-sound contract templates for various types of projects including web development, graphic design, content creation, marketing, consulting, and more. Each template is customizable and includes standard clauses for intellectual property rights, payment terms, deliverables, timelines, and dispute resolution. All contracts are created with input from legal professionals to ensure they protect both parties.'
    },
    {
      id: 6,
      category: 'users',
      question: 'How do I create an account and get started?',
      answer: 'Getting started is easy! Click the "Sign Up" button and choose whether you\'re a freelancer or client. Complete your profile with relevant information, skills (for freelancers), or company details (for clients). Verify your email address and optionally complete identity verification for enhanced trust. Freelancers can then browse and apply to projects, while clients can post projects and review proposals.'
    },
    {
      id: 7,
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and digital wallets. Payments are processed securely through our PCI DSS compliant payment gateway. Freelancers can withdraw their earnings via bank transfer, PayPal, or other supported methods depending on their location. We also support multiple currencies to facilitate international transactions.'
    },
    {
      id: 8,
      category: 'general',
      question: 'What fees does SkillBridge charge?',
      answer: 'SkillBridge charges a competitive service fee on completed transactions to maintain the platform and provide security features. The fee structure is transparent and varies based on the transaction amount and user tier. There are no hidden charges, and all fees are clearly displayed before any transaction is completed. Premium users enjoy reduced fees and additional features.'
    },
    {
      id: 9,
      category: 'security',
      question: 'How do you handle disputes between freelancers and clients?',
      answer: 'Our dispute resolution process is fair and thorough. When a dispute arises, both parties can escalate it to our mediation team. We review all project communications, deliverables, and contract terms to make an informed decision. Our goal is to resolve disputes quickly and fairly, ensuring both parties are satisfied. In most cases, disputes are resolved within 48-72 hours through our structured mediation process.'
    },
    {
      id: 10,
      category: 'endorsements',
      question: 'How can I increase my chances of getting endorsed?',
      answer: 'To earn endorsements, focus on delivering high-quality work that exceeds client expectations, communicate clearly and professionally throughout projects, meet all deadlines and milestones, be responsive to feedback and revision requests, and maintain a professional attitude. After successful project completion, politely remind clients about the endorsement system and its benefits for future collaborations.'
    },
    {
      id: 11,
      category: 'contracts',
      question: 'Can I modify the contract templates?',
      answer: 'Absolutely! Our contract templates are fully customizable to suit your specific project needs. You can modify terms, add custom clauses, adjust payment schedules, and include project-specific requirements. However, we recommend keeping the core legal protections intact. If you need significant modifications, consider consulting with a legal professional to ensure your contract remains legally sound.'
    },
    {
      id: 12,
      category: 'users',
      question: 'How do I build credibility on the platform?',
      answer: 'Building credibility takes time and consistent quality work. Start by completing your profile thoroughly, including professional photos and detailed skill descriptions. Begin with smaller projects to build your reputation, always deliver on time and exceed expectations, maintain professional communication, collect endorsements and reviews, showcase your best work in your portfolio, and stay active on the platform by regularly updating your profile and applying to relevant projects.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about SkillBridge, our security measures, 
            payment system, and how to get the most out of our platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:contact@skillbridge.dev"
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-teal-600 mb-2">&lt;2hrs</div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Issue Resolution Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;