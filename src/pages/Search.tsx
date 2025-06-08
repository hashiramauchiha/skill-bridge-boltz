import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users, 
  Briefcase,
  Award,
  CheckCircle,
  Calendar,
  Eye,
  Heart,
  MessageSquare,
  ArrowRight,
  Sliders,
  Grid,
  List
} from 'lucide-react';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchRole, setSearchRole] = useState(searchParams.get('role') || 'client');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [filters, setFilters] = useState({
    budget: { min: '', max: '' },
    timeline: '',
    location: '',
    experience: '',
    rating: '',
    skills: [],
    projectType: '',
    clientType: ''
  });

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setSearchRole(searchParams.get('role') || 'client');
  }, [searchParams]);

  // Mock data for freelancers
  const freelancers = [
    {
      id: 1,
      name: 'Alex Thompson',
      title: 'Full Stack Developer',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      location: 'San Francisco, CA',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      endorsements: 24,
      completedProjects: 89,
      responseTime: '2 hours',
      availability: 'Available',
      description: 'Experienced full-stack developer specializing in modern web applications with React and Node.js.',
      verified: true,
      topRated: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      title: 'UI/UX Designer',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.8,
      reviews: 94,
      hourlyRate: 75,
      location: 'New York, NY',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      endorsements: 18,
      completedProjects: 67,
      responseTime: '1 hour',
      availability: 'Available',
      description: 'Creative UI/UX designer with expertise in creating intuitive and beautiful user experiences.',
      verified: true,
      topRated: false
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      title: 'Brand Designer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.7,
      reviews: 156,
      hourlyRate: 65,
      location: 'Austin, TX',
      skills: ['Branding', 'Logo Design', 'Illustrator', 'Photoshop'],
      endorsements: 31,
      completedProjects: 112,
      responseTime: '3 hours',
      availability: 'Busy',
      description: 'Brand designer helping businesses create memorable visual identities and marketing materials.',
      verified: true,
      topRated: true
    },
    {
      id: 4,
      name: 'Emily Davis',
      title: 'Content Writer',
      avatar: 'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4.9,
      reviews: 203,
      hourlyRate: 45,
      location: 'Remote',
      skills: ['Content Writing', 'SEO', 'Copywriting', 'Blog Writing'],
      endorsements: 42,
      completedProjects: 178,
      responseTime: '30 minutes',
      availability: 'Available',
      description: 'Professional content writer specializing in SEO-optimized content and engaging copy.',
      verified: true,
      topRated: true
    }
  ];

  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      client: 'TechCorp Solutions',
      clientAvatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
      budget: '$2,500 - $5,000',
      timeline: '2-3 months',
      postedDate: '2 days ago',
      proposals: 12,
      skills: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      description: 'Looking for an experienced developer to build a modern e-commerce platform with payment integration.',
      projectType: 'Fixed Price',
      experience: 'Intermediate',
      verified: true,
      urgent: false
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      client: 'StartupXYZ',
      clientAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
      budget: '$1,500 - $3,000',
      timeline: '1-2 months',
      postedDate: '1 day ago',
      proposals: 8,
      skills: ['Figma', 'Mobile Design', 'Prototyping', 'User Research'],
      description: 'Need a talented designer to create intuitive mobile app interfaces for our fintech startup.',
      projectType: 'Fixed Price',
      experience: 'Expert',
      verified: true,
      urgent: true
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Creative Agency',
      clientAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      budget: '$800 - $1,500',
      timeline: '3-4 weeks',
      postedDate: '3 days ago',
      proposals: 15,
      skills: ['Branding', 'Logo Design', 'Brand Guidelines', 'Print Design'],
      description: 'Seeking a creative designer to develop a complete brand identity for a new restaurant chain.',
      projectType: 'Fixed Price',
      experience: 'Intermediate',
      verified: false,
      urgent: false
    },
    {
      id: 4,
      title: 'Content Writing for Blog',
      client: 'Digital Marketing Co',
      clientAvatar: 'https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=100',
      budget: '$30 - $50/hour',
      timeline: 'Ongoing',
      postedDate: '1 week ago',
      proposals: 23,
      skills: ['Content Writing', 'SEO', 'Research', 'WordPress'],
      description: 'Looking for a skilled content writer to create engaging blog posts for our marketing clients.',
      projectType: 'Hourly',
      experience: 'Entry Level',
      verified: true,
      urgent: false
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a new search
    console.log('Searching for:', searchQuery, 'as', searchRole);
  };

  const filteredResults = searchRole === 'client' ? freelancers : projects;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
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
                  Find Freelancers
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
                  Find Projects
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    searchRole === 'client' 
                      ? 'Search for freelancers...' 
                      : 'Search for projects...'
                  }
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {searchRole === 'client' ? 'Freelancers' : 'Projects'}
            </h1>
            <p className="text-gray-600">
              {filteredResults.length} results found for "{searchQuery}"
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Sliders className="h-4 w-4" />
              <span>Filters</span>
            </button>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                
                {searchRole === 'client' ? (
                  // Freelancer filters
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hourly Rate
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option value="">Any Level</option>
                        <option value="entry">Entry Level</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="City, Country"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minimum Rating
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option value="">Any Rating</option>
                        <option value="4.5">4.5+ Stars</option>
                        <option value="4.0">4.0+ Stars</option>
                        <option value="3.5">3.5+ Stars</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  // Project filters
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <input
                          type="number"
                          placeholder="Max"
                          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option value="">Any Type</option>
                        <option value="fixed">Fixed Price</option>
                        <option value="hourly">Hourly</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
                        <option value="">Any Timeline</option>
                        <option value="urgent">Less than 1 month</option>
                        <option value="medium">1-3 months</option>
                        <option value="long">3+ months</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Client Type
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                          <span className="ml-2 text-sm">Verified Clients</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                          <span className="ml-2 text-sm">Payment Verified</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
                
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
            {searchRole === 'client' ? (
              // Freelancer Results
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {freelancers.map((freelancer) => (
                  <div key={freelancer.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img
                          src={freelancer.avatar}
                          alt={freelancer.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{freelancer.name}</h3>
                            {freelancer.verified && (
                              <CheckCircle className="h-5 w-5 text-blue-500" />
                            )}
                            {freelancer.topRated && (
                              <Award className="h-5 w-5 text-yellow-500" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{freelancer.title}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span>{freelancer.rating}</span>
                              <span>({freelancer.reviews})</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{freelancer.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{freelancer.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {freelancer.skills.slice(0, 4).map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500">Hourly Rate</p>
                          <p className="font-semibold">${freelancer.hourlyRate}/hr</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Response Time</p>
                          <p className="font-semibold">{freelancer.responseTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          freelancer.availability === 'Available' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {freelancer.availability}
                        </span>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                            Contact
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Project Results
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            {project.verified && (
                              <CheckCircle className="h-5 w-5 text-blue-500" />
                            )}
                            {project.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                Urgent
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <img
                                src={project.clientAvatar}
                                alt={project.client}
                                className="w-5 h-5 rounded-full"
                              />
                              <span>{project.client}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Posted {project.postedDate}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{project.proposals} proposals</span>
                            </div>
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-gray-500">Budget</p>
                          <p className="font-semibold">{project.budget}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Timeline</p>
                          <p className="font-semibold">{project.timeline}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Project Type</p>
                          <p className="font-semibold">{project.projectType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Experience</p>
                          <p className="font-semibold">{project.experience}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{project.proposals} proposals</span>
                          <span>•</span>
                          <span>Posted {project.postedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
                          </button>
                          <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                            <span>Apply Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;