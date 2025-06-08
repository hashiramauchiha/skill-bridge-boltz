import React, { useState, useEffect } from 'react';
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
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [payments, setPayments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        
        // Fetch user's projects
        const projectsResponse = await axios.get('/projects/my-projects');
        setProjects(projectsResponse.data);

        // Fetch user's payments
        const paymentsResponse = await axios.get('/payments');
        setPayments(paymentsResponse.data);

        // Fetch recent messages
        const messagesResponse = await axios.get('/messages/recent');
        setMessages(messagesResponse.data);

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  // Freelancer Data
  const freelancerStats = [
    { title: 'Active Projects', value: projects.filter(p => p.status === 'in_progress').length.toString(), icon: <Briefcase className="h-6 w-6" />, color: 'text-blue-600', change: '+2' },
    { title: 'Completed Projects', value: projects.filter(p => p.status === 'completed').length.toString(), icon: <CheckCircle className="h-6 w-6" />, color: 'text-green-600', change: '+3' },
    { title: 'Total Earnings', value: `$${user?.totalEarnings || 0}`, icon: <DollarSign className="h-6 w-6" />, color: 'text-purple-600', change: '+$1,200' },
    { title: 'Client Rating', value: user?.rating?.toFixed(1) || '0.0', icon: <Star className="h-6 w-6" />, color: 'text-yellow-600', change: '+0.1' }
  ];

  // Client Data
  const clientStats = [
    { title: 'Active Projects', value: projects.filter(p => p.status === 'in_progress').length.toString(), icon: <Briefcase className="h-6 w-6" />, color: 'text-blue-600', change: '+1' },
    { title: 'Total Projects', value: projects.length.toString(), icon: <Users className="h-6 w-6" />, color: 'text-green-600', change: '+4' },
    { title: 'Total Spent', value: `$${payments.reduce((sum, p) => sum + (p.amount || 0), 0)}`, icon: <DollarSign className="h-6 w-6" />, color: 'text-purple-600', change: '+$2,100' },
    { title: 'Avg Project Rating', value: user?.rating?.toFixed(1) || '0.0', icon: <Star className="h-6 w-6" />, color: 'text-yellow-600', change: '+0.2' }
  ];

  // Filter payments based on selected filter
  const filteredPayments = payments.filter(payment => {
    if (paymentFilter === 'all') return true;
    return payment.status?.toLowerCase() === paymentFilter.toLowerCase();
  });

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'contracts', label: 'Contracts', icon: <FileText className="h-4 w-4" /> },
    { id: 'payments', label: 'Payments', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'endorsements', label: 'Endorsements', icon: <Award className="h-4 w-4" /> }
  ];

  const currentStats = user?.role === 'freelancer' ? freelancerStats : clientStats;

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': case 'released': return 'bg-green-100 text-green-800';
      case 'in_progress': case 'in_escrow': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in review': case 'disputed': return 'bg-purple-100 text-purple-800';
      case 'open': return 'bg-green-100 text-green-800';
      case 'cancelled': case 'refunded': return 'bg-red-100 text-red-800';
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

  const handlePaymentFilterChange = (e) => {
    setPaymentFilter(e.target.value);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">
                Welcome back, {user?.firstName} {user?.lastName}
              </p>
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
                  src={user?.avatar || "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"}
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
                  <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {projects.slice(0, 3).map((project) => (
                      <div key={project._id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                            <p className="text-sm text-gray-600">
                              {user?.role === 'freelancer' 
                                ? `Client: ${project.client?.firstName} ${project.client?.lastName}` 
                                : `Freelancer: ${project.freelancer?.firstName || 'Not assigned'} ${project.freelancer?.lastName || ''}`
                              }
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status?.replace('_', ' ')}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.timeline}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            ${project.budget?.min} - ${project.budget?.max}
                          </span>
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
                      {messages.slice(0, 3).map((message) => (
                        <div key={message._id} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${!message.isRead ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">
                                {message.sender?.firstName} {message.sender?.lastName}
                              </p>
                              <p className="text-xs text-gray-500">
                                {new Date(message.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{message.content}</p>
                            <p className="text-xs text-gray-500 mt-1">{message.project?.title}</p>
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
                      {user?.role === 'freelancer' ? (
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
                  <span>{user?.role === 'freelancer' ? 'Apply to Project' : 'New Project'}</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project._id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-gray-600">
                          {user?.role === 'freelancer' 
                            ? `Client: ${project.client?.firstName} ${project.client?.lastName}` 
                            : `Freelancer: ${project.freelancer?.firstName || 'Not assigned'} ${project.freelancer?.lastName || ''}`
                          }
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                          {project.status?.replace('_', ' ')}
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
                        <p className="font-medium">${project.budget?.min} - ${project.budget?.max}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Timeline</p>
                        <p className="font-medium">{project.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Proposals</p>
                        <p className="font-medium">{project.proposalCount || 0}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium">{project.category}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Created:</span> {new Date(project.createdAt).toLocaleDateString()}
                      </p>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                          View Details
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                          Message {user?.role === 'freelancer' ? 'Client' : 'Freelancer'}
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
                <select 
                  value={paymentFilter}
                  onChange={handlePaymentFilterChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Payments</option>
                  <option value="released">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="in_escrow">In Escrow</option>
                  <option value="disputed">Disputed</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {filteredPayments.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No payments found for the selected filter.</p>
                  </div>
                ) : (
                  filteredPayments.map((payment) => (
                    <div key={payment._id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 mb-1">{payment.project?.title}</h3>
                          <p className="text-gray-600 mb-1">Payment #{payment.transactionId}</p>
                          <p className="text-sm text-gray-500">{payment.type} payment</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900 mb-1">${payment.amount}</p>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                            {payment.status?.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Payment Date</p>
                          <p className="font-medium">{new Date(payment.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Payment Method</p>
                          <p className="font-medium">{payment.paymentMethod?.replace('_', ' ')}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Transaction ID</p>
                          <p className="font-medium text-blue-600">{payment.transactionId}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {payment.status === 'released' && (
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-600">Payment Released</span>
                            </div>
                          )}
                          {payment.status === 'pending' && (
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-yellow-500" />
                              <span className="text-sm text-gray-600">Awaiting Approval</span>
                            </div>
                          )}
                          {payment.status === 'in_escrow' && (
                            <div className="flex items-center space-x-1">
                              <Shield className="h-4 w-4 text-blue-500" />
                              <span className="text-sm text-gray-600">In Escrow</span>
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
                          {payment.status === 'released' && (
                            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                              Download Receipt
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Endorsements Tab */}
        {activeTab === 'endorsements' && (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {user?.role === 'freelancer' ? 'Skill Endorsements' : 'Give Endorsements'}
              </h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>{user?.role === 'freelancer' ? 'Request Endorsement' : 'Give Endorsement'}</span>
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
                        {user?.role === 'freelancer' ? 'Share Skill' : 'Endorse Skill'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Endorsement Request/Give Section */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {user?.role === 'freelancer' ? 'Request New Endorsements' : 'Give Endorsements to Freelancers'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {user?.role === 'freelancer' 
                    ? 'Ask your recent clients to endorse your skills and build your credibility on the platform.'
                    : 'Endorse the skills of freelancers you\'ve worked with to help them build their reputation.'
                  }
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    {user?.role === 'freelancer' ? 'Send Endorsement Request' : 'Give Endorsement'}
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