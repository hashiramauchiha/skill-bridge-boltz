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
  Settings,
  Users,
  Plus,
  Download,
  Eye,
  Edit,
  Filter,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState('freelancer'); // 'freelancer' or 'client'

  // Freelancer Data
  const freelancerStats = [
    { title: 'Active Projects', value: '8', icon: <Briefcase className="h-6 w-6" />, color: 'text-blue-600', change: '+2' },
    { title: 'Completed Projects', value: '24', icon: <CheckCircle className="h-6 w-6" />, color: 'text-green-600', change: '+3' },
    { title: 'Total Earnings', value: '$12,450', icon: <DollarSign className="h-6 w-6" />, color: 'text-purple-600', change: '+$1,200' },
    { title: 'Client Rating', value: '4.9', icon: <Star className="h-6 w-6" />, color: 'text-yellow-600', change: '+0.1' }
  ];

  // Client Data
  const clientStats = [
    { title: 'Active Projects', value: '5', icon: <Briefcase className="h-6 w-6" />, color: 'text-blue-600', change: '+1' },
    { title: 'Total Freelancers', value: '18', icon: <Users className="h-6 w-6" />, color: 'text-green-600', change: '+4' },
    { title: 'Total Spent', value: '$8,750', icon: <DollarSign className="h-6 w-6" />, color: 'text-purple-600', change: '+$2,100' },
    { title: 'Avg Project Rating', value: '4.8', icon: <Star className="h-6 w-6" />, color: 'text-yellow-600', change: '+0.2' }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      client: 'TechCorp Solutions',
      freelancer: 'Alex Thompson',
      progress: 75,
      deadline: '2025-02-15',
      budget: '$2,500',
      status: 'In Progress',
      nextMilestone: 'Homepage Design Review',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX',
      client: 'StartupXYZ',
      freelancer: 'Sarah Chen',
      progress: 40,
      deadline: '2025-03-01',
      budget: '$1,800',
      status: 'In Progress',
      nextMilestone: 'Wireframe Approval',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Creative Agency',
      freelancer: 'Mike Rodriguez',
      progress: 90,
      deadline: '2025-01-30',
      budget: '$1,200',
      status: 'Almost Complete',
      nextMilestone: 'Final Logo Delivery',
      priority: 'High'
    }
  ];

  const contracts = [
    {
      id: 1,
      title: 'Web Development Contract',
      project: 'E-commerce Website Design',
      client: 'TechCorp Solutions',
      freelancer: 'Alex Thompson',
      value: '$2,500',
      status: 'Active',
      signedDate: '2025-01-10',
      milestones: 4,
      completedMilestones: 3
    },
    {
      id: 2,
      title: 'UI/UX Design Agreement',
      project: 'Mobile App UI/UX',
      client: 'StartupXYZ',
      freelancer: 'Sarah Chen',
      value: '$1,800',
      status: 'Active',
      signedDate: '2025-01-05',
      milestones: 5,
      completedMilestones: 2
    },
    {
      id: 3,
      title: 'Brand Design Contract',
      project: 'Brand Identity Package',
      client: 'Creative Agency',
      freelancer: 'Mike Rodriguez',
      value: '$1,200',
      status: 'Pending Completion',
      signedDate: '2024-12-20',
      milestones: 3,
      completedMilestones: 3
    }
  ];

  const payments = [
    {
      id: 1,
      project: 'E-commerce Website Design',
      amount: '$625',
      type: 'Milestone Payment',
      status: 'Completed',
      date: '2025-01-20',
      milestone: 'Homepage Design',
      method: 'Escrow Release'
    },
    {
      id: 2,
      project: 'Mobile App UI/UX',
      amount: '$360',
      type: 'Milestone Payment',
      status: 'Pending',
      date: '2025-01-25',
      milestone: 'Wireframe Completion',
      method: 'Escrow Hold'
    },
    {
      id: 3,
      project: 'Brand Identity Package',
      amount: '$400',
      type: 'Milestone Payment',
      status: 'Completed',
      date: '2025-01-18',
      milestone: 'Logo Concepts',
      method: 'Escrow Release'
    },
    {
      id: 4,
      project: 'E-commerce Website Design',
      amount: '$625',
      type: 'Milestone Payment',
      status: 'In Review',
      date: '2025-01-22',
      milestone: 'Product Pages',
      method: 'Escrow Hold'
    }
  ];

  const endorsements = [
    { 
      skill: 'UI/UX Design', 
      count: 12, 
      recent: 'Sarah J.', 
      level: 'Expert',
      projects: 8,
      avgRating: 4.9
    },
    { 
      skill: 'React Development', 
      count: 8, 
      recent: 'Mike C.', 
      level: 'Advanced',
      projects: 6,
      avgRating: 4.8
    },
    { 
      skill: 'Brand Design', 
      count: 6, 
      recent: 'Lisa R.', 
      level: 'Intermediate',
      projects: 4,
      avgRating: 4.7
    },
    { 
      skill: 'Figma', 
      count: 10, 
      recent: 'John D.', 
      level: 'Expert',
      projects: 7,
      avgRating: 4.9
    }
  ];

  // Freelancer messages (from clients)
  const freelancerMessages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      message: 'Great work on the homepage! Could you adjust the color scheme?',
      time: '2 hours ago',
      unread: true,
      project: 'E-commerce Website'
    },
    {
      id: 2,
      sender: 'Mike Chen',
      message: 'The wireframes look perfect. When can we expect the next milestone?',
      time: '5 hours ago',
      unread: true,
      project: 'Mobile App UI/UX'
    },
    {
      id: 3,
      sender: 'Lisa Rodriguez',
      message: 'Thank you for the quick turnaround on the logo concepts.',
      time: '1 day ago',
      unread: false,
      project: 'Brand Identity'
    }
  ];

  // Client messages (from freelancers)
  const clientMessages = [
    {
      id: 1,
      sender: 'Alex Thompson',
      message: 'I\'ve completed the homepage design. Ready for your review!',
      time: '1 hour ago',
      unread: true,
      project: 'E-commerce Website'
    },
    {
      id: 2,
      sender: 'Sarah Chen',
      message: 'The wireframes are ready. Could we schedule a review call?',
      time: '3 hours ago',
      unread: true,
      project: 'Mobile App UI/UX'
    },
    {
      id: 3,
      sender: 'Mike Rodriguez',
      message: 'Final logo files have been uploaded to the project folder.',
      time: '6 hours ago',
      unread: false,
      project: 'Brand Identity'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'contracts', label: 'Contracts', icon: <FileText className="h-4 w-4" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'endorsements', label: 'Endorsements', icon: <Award className="h-4 w-4" /> }
  ];

  const currentStats = userRole === 'freelancer' ? freelancerStats : clientStats;
  const recentMessages = userRole === 'freelancer' ? freelancerMessages : clientMessages;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in review': return 'bg-purple-100 text-purple-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'almost complete': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">
                Welcome back, {userRole === 'freelancer' ? 'Alex Thompson' : 'Sarah Johnson'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Role Switcher */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setUserRole('freelancer')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    userRole === 'freelancer' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Freelancer
                </button>
                <button
                  onClick={() => setUserRole('client')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    userRole === 'client' 
                      ? 'bg-white text-teal-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Client
                </button>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={userRole === 'freelancer' 
                    ? "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
                    : "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100"
                  }
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
              {currentStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 flex items-center mt-1">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        {stat.change}
                      </p>
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
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {activeProjects.slice(0, 3).map((project) => (
                      <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                            <p className="text-sm text-gray-600">
                              {userRole === 'freelancer' ? project.client : project.freelancer}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {project.priority && (
                              <span className={`text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                {project.priority}
                              </span>
                            )}
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
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
                            <p className="text-xs text-gray-500 mt-1">{message.project}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {userRole === 'freelancer' ? (
                        <>
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Browse New Projects
                          </button>
                          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Update Portfolio
                          </button>
                          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Request Endorsement
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Post New Project
                          </button>
                          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Find Freelancers
                          </button>
                          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Review Proposals
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">All Projects</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Plus className="h-4 w-4" />
                  <span>{userRole === 'freelancer' ? 'Apply to Project' : 'New Project'}</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-gray-600">
                          {userRole === 'freelancer' ? `Client: ${project.client}` : `Freelancer: ${project.freelancer}`}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Edit className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Budget</p>
                        <p className="font-medium">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Deadline</p>
                        <p className="font-medium">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Progress</p>
                        <p className="font-medium">{project.progress}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Priority</p>
                        <p className={`font-medium ${getPriorityColor(project.priority)}`}>{project.priority}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Next Milestone:</span> {project.nextMilestone}
                      </p>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                          Message {userRole === 'freelancer' ? 'Client' : 'Freelancer'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contracts Tab */}
        {activeTab === 'contracts' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Contracts</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>New Contract</span>
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {contracts.map((contract) => (
                  <div key={contract.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{contract.title}</h3>
                        <p className="text-gray-600 mb-2">{contract.project}</p>
                        <p className="text-sm text-gray-500">
                          {userRole === 'freelancer' ? `Client: ${contract.client}` : `Freelancer: ${contract.freelancer}`}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(contract.status)}`}>
                          {contract.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Contract Value</p>
                        <p className="font-medium text-lg">{contract.value}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Signed Date</p>
                        <p className="font-medium">{contract.signedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Milestones</p>
                        <p className="font-medium">{contract.completedMilestones}/{contract.milestones}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Progress</p>
                        <p className="font-medium">{Math.round((contract.completedMilestones / contract.milestones) * 100)}%</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(contract.completedMilestones / contract.milestones) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Escrow Protected</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CheckCircle2 className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">Digitally Signed</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                          View Contract
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                          Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
              <div className="flex items-center space-x-3">
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Payments</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>In Review</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{payment.project}</h3>
                        <p className="text-gray-600 mb-1">{payment.milestone}</p>
                        <p className="text-sm text-gray-500">{payment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 mb-1">{payment.amount}</p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Payment Date</p>
                        <p className="font-medium">{payment.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Payment Method</p>
                        <p className="font-medium">{payment.method}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Transaction ID</p>
                        <p className="font-medium text-blue-600">#TXN{payment.id}2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {payment.status === 'Completed' && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">Payment Released</span>
                          </div>
                        )}
                        {payment.status === 'Pending' && (
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-gray-600">Awaiting Approval</span>
                          </div>
                        )}
                        {payment.status === 'In Review' && (
                          <div className="flex items-center space-x-1">
                            <AlertCircle className="h-4 w-4 text-blue-500" />
                            <span className="text-sm text-gray-600">Under Review</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">Escrow Protected</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                          View Details
                        </button>
                        {payment.status === 'Completed' && (
                          <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                            Download Receipt
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Endorsements Tab */}
        {activeTab === 'endorsements' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {userRole === 'freelancer' ? 'Skill Endorsements' : 'Give Endorsements'}
              </h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>{userRole === 'freelancer' ? 'Request Endorsement' : 'Give Endorsement'}</span>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {endorsements.map((endorsement, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{endorsement.skill}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          endorsement.level === 'Expert' ? 'bg-green-100 text-green-800' :
                          endorsement.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {endorsement.level}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="text-lg font-bold text-gray-900">{endorsement.count}</span>
                        </div>
                        <p className="text-sm text-gray-500">endorsements</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Projects</p>
                        <p className="font-medium">{endorsement.projects}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Avg Rating</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{endorsement.avgRating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Recent Endorser</p>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-blue-600">
                            {endorsement.recent.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{endorsement.recent}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                        View All
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                        {userRole === 'freelancer' ? 'Share Skill' : 'Endorse Skill'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Endorsement Request/Give Section */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {userRole === 'freelancer' ? 'Request New Endorsements' : 'Give Endorsements to Freelancers'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {userRole === 'freelancer' 
                    ? 'Ask your recent clients to endorse your skills and build your credibility on the platform.'
                    : 'Endorse the skills of freelancers you\'ve worked with to help them build their reputation.'
                  }
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {userRole === 'freelancer' ? 'Send Endorsement Request' : 'Give Endorsement'}
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;