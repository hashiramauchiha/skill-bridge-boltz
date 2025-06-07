import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Clock, 
  CreditCard, 
  FileText, 
  MessageSquare, 
  Star, 
  TrendingUp,
  User,
  DollarSign,
  Briefcase,
  Award,
  Bell,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Active Projects', value: '8', icon: <Briefcase className="h-6 w-6" />, color: 'text-blue-600' },
    { title: 'Completed Projects', value: '24', icon: <CheckCircle className="h-6 w-6" />, color: 'text-green-600' },
    { title: 'Total Earnings', value: '$12,450', icon: <DollarSign className="h-6 w-6" />, color: 'text-purple-600' },
    { title: 'Client Rating', value: '4.9', icon: <Star className="h-6 w-6" />, color: 'text-yellow-600' }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      client: 'TechCorp Solutions',
      progress: 75,
      deadline: '2025-02-15',
      budget: '$2,500',
      status: 'In Progress',
      nextMilestone: 'Homepage Design Review'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX',
      client: 'StartupXYZ',
      progress: 40,
      deadline: '2025-03-01',
      budget: '$1,800',
      status: 'In Progress',
      nextMilestone: 'Wireframe Approval'
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Creative Agency',
      progress: 90,
      deadline: '2025-01-30',
      budget: '$1,200',
      status: 'Almost Complete',
      nextMilestone: 'Final Logo Delivery'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      message: 'Great work on the homepage! Could you adjust the color scheme?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      sender: 'Mike Chen',
      message: 'The wireframes look perfect. When can we expect the next milestone?',
      time: '5 hours ago',
      unread: true
    },
    {
      id: 3,
      sender: 'Lisa Rodriguez',
      message: 'Thank you for the quick turnaround on the logo concepts.',
      time: '1 day ago',
      unread: false
    }
  ];

  const endorsements = [
    { skill: 'UI/UX Design', count: 12, recent: 'Sarah J.' },
    { skill: 'React Development', count: 8, recent: 'Mike C.' },
    { skill: 'Brand Design', count: 6, recent: 'Lisa R.' },
    { skill: 'Figma', count: 10, recent: 'John D.' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'contracts', label: 'Contracts', icon: <FileText className="h-4 w-4" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'endorsements', label: 'Endorsements', icon: <Award className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back, Alex Thompson</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Active Projects */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {activeProjects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                            <p className="text-sm text-gray-600">{project.client}</p>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {project.status}
                          </span>
                        </div>
                        
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.deadline}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {project.budget}
                          </span>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Next:</span> {project.nextMilestone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Messages */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Messages</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentMessages.map((message) => (
                        <div key={message.id} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${message.unread ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">{message.sender}</p>
                              <p className="text-xs text-gray-500">{message.time}</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{message.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Endorsements */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Skill Endorsements</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {endorsements.map((endorsement, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{endorsement.skill}</p>
                            <p className="text-xs text-gray-500">Latest: {endorsement.recent}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-900">{endorsement.count}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Other Tab Content Placeholders */}
        {activeTab !== 'overview' && (
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <div className="text-gray-400 mb-4">
              {tabs.find(tab => tab.id === activeTab)?.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {tabs.find(tab => tab.id === activeTab)?.label} Section
            </h3>
            <p className="text-gray-600">
              This section would contain detailed {activeTab} information and functionality.
              This is a UI mockup demonstrating the dashboard layout and navigation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;