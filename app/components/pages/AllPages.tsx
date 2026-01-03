// ========== AnalyticsPage.tsx ==========
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Target, TrendingUp, Award, Zap,
  BarChart3, PieChart, Activity,
  Users, ShoppingCart, DollarSign,
  Clock, Globe, Smartphone, Calendar,
  ChevronUp, ChevronDown, Download,
  Filter, RefreshCw, MoreVertical, FileText, 
  BarChart2,   CheckCircle,  AlertCircle,  ShoppingBag, 
  PlayCircle, Search,   Trash2, Eye, Share2, Printer, Mail, Star, StarOff, Archive, Reply, User, 
  Paperclip, Send,   EyeOff, ChevronLeft, ChevronRight,   MessageCircle, AtSign,  Check, X, Calendar as CalendarIcon,
  Plus, MapPin, Tag, Edit, Bell,   FileSpreadsheet,  FileImage, File,  FileVideo, FileAudio, Folder, Upload,   Grid, List,   Copy, Move,
  FolderPlus, HardDrive, Cloud, CreditCard, Receipt, Shield, CreditCard as Card, Settings,   Crown, Sparkles, Building, Home, Briefcase, Store,   Server,  Database, Cpu,
  Save, Palette, Lock, XCircle, LogOut, Key, Moon, Sun, Settings as SettingsIcon, HelpCircle, Wifi,   Terminal, BellOff, Volume2, VolumeX,
  MessageSquare,  BookOpen,   ExternalLink,  ThumbsUp, ThumbsDown,  LifeBuoy
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar,
  PieChart as RechartsPieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

export const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [loading, setLoading] = useState(false);

  // Stats data
  const stats = [
    {
      icon: <Target size={20} />,
      label: 'Conversion Rate',
      value: '3.24%',
      change: '+12.5%',
      trend: 'up',
      color: 'bg-blue-500',
      description: 'Website visitors to customers'
    },
    {
      icon: <TrendingUp size={20} />,
      label: 'Avg Order Value',
      value: '$156.50',
      change: '+8.3%',
      trend: 'up',
      color: 'bg-green-500',
      description: 'Average purchase amount'
    },
    {
      icon: <Award size={20} />,
      label: 'Customer Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      color: 'bg-yellow-500',
      description: 'Based on 245 reviews'
    },
    {
      icon: <Zap size={20} />,
      label: 'Page Load Time',
      value: '1.2s',
      change: '-0.4s',
      trend: 'down',
      color: 'bg-purple-500',
      description: 'Average load time'
    },
  ];

  // Revenue data for line chart
  const revenueData = [
    { month: 'Jan', revenue: 42000, visitors: 12500 },
    { month: 'Feb', revenue: 52000, visitors: 14200 },
    { month: 'Mar', revenue: 61000, visitors: 16800 },
    { month: 'Apr', revenue: 49000, visitors: 13500 },
    { month: 'May', revenue: 72000, visitors: 19200 },
    { month: 'Jun', revenue: 85000, visitors: 21500 },
    { month: 'Jul', revenue: 92000, visitors: 23800 },
  ];

  // Sales by category data
  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Fashion', value: 25, color: '#10B981' },
    { name: 'Home & Garden', value: 20, color: '#8B5CF6' },
    { name: 'Books', value: 12, color: '#F59E0B' },
    { name: 'Others', value: 8, color: '#EF4444' },
  ];

  // Traffic sources data
  const trafficData = [
    { source: 'Direct', visitors: 12500, percentage: 40, color: '#3B82F6' },
    { source: 'Organic Search', visitors: 9500, percentage: 30, color: '#10B981' },
    { source: 'Social Media', visitors: 6250, percentage: 20, color: '#8B5CF6' },
    { source: 'Referral', visitors: 3750, percentage: 10, color: '#F59E0B' },
  ];

  // Device breakdown data
  const deviceData = [
    { device: 'Mobile', percentage: 62, sessions: 19500 },
    { device: 'Desktop', percentage: 34, sessions: 10700 },
    { device: 'Tablet', percentage: 4, sessions: 1250 },
  ];

  // Recent activities
  const activities = [
    { time: '10:30 AM', action: 'New user registration', user: 'John Doe', change: '+1' },
    { time: '09:45 AM', action: 'Order completed', order: '#ORD-7842', amount: '$245.99' },
    { time: '09:15 AM', action: 'Product review submitted', product: 'Wireless Headphones', rating: '★★★★★' },
    { time: '08:30 AM', action: 'Page visit peak', page: '/products/electronics', visits: '1,245' },
    { time: 'Yesterday', action: 'Email campaign sent', recipients: '12,450', openRate: '34.2%' },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const handleExport = () => {
    alert('Analytics data exported successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track and analyze your business performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2">
            <Calendar size={16} className="text-gray-400" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-transparent border-none outline-none text-sm"
            >
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
              <option value="quarter">Last 90 days</option>
              <option value="year">Last year</option>
            </select>
          </div>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`${stat.color} text-white p-3 rounded-xl`}>
                {stat.icon}
              </div>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                {stat.trend === 'up' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <div className="flex items-center gap-3 mb-3 sm:mb-0">
              <BarChart3 className="text-blue-600" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                <p className="text-sm text-gray-500">Monthly revenue and visitors</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Visitors</span>
              </div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  formatter={(value) => {
                    const numValue = value ?? 0;
                    return [`$${numValue.toLocaleString()}`, ''];
                  }}
                  labelStyle={{ color: '#666' }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.2}
                  name="Revenue"
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.2}
                  name="Visitors"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <PieChart className="text-green-600" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Sales by Category</h3>
                <p className="text-sm text-gray-500">Product category distribution</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical size={20} className="text-gray-500" />
            </button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => {
                    const percentage = percent ?? 0;
                    return `${name}: ${(percentage * 100).toFixed(0)}%`;
                  }}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Traffic & Devices Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Globe className="text-purple-600" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Traffic Sources</h3>
                <p className="text-sm text-gray-500">Where your visitors come from</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {trafficData.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                  <span className="font-medium text-gray-900">{source.source}</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-48">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${source.percentage}%`,
                          backgroundColor: source.color
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{source.visitors.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{source.percentage}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="text-blue-600" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Device Breakdown</h3>
              <p className="text-sm text-gray-500">Sessions by device type</p>
            </div>
          </div>
          <div className="space-y-4">
            {deviceData.map((device, idx) => (
              <div key={idx} className="p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{device.device}</span>
                  <span className="font-semibold text-gray-900">{device.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {device.sessions.toLocaleString()} sessions
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="text-orange-600" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
            <p className="text-sm text-gray-500">Latest events and actions</p>
          </div>
        </div>
        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Clock size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-gray-500">{activity.time}</span>
                    {activity.user && (
                      <span className="text-sm text-blue-600">• {activity.user}</span>
                    )}
                    {activity.order && (
                      <span className="text-sm text-green-600">• {activity.order}</span>
                    )}
                    {activity.product && (
                      <span className="text-sm text-purple-600">• {activity.product}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                {activity.change && (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
                    <ChevronUp size={16} />
                    {activity.change}
                  </span>
                )}
                {activity.amount && (
                  <p className="font-semibold text-gray-900">{activity.amount}</p>
                )}
                {activity.visits && (
                  <p className="font-semibold text-gray-900">{activity.visits}</p>
                )}
                {activity.recipients && (
                  <div>
                    <p className="font-semibold text-gray-900">{activity.recipients}</p>
                    <p className="text-sm text-gray-500">{activity.openRate} open rate</p>
                  </div>
                )}
                {activity.rating && (
                  <p className="font-semibold text-yellow-600">{activity.rating}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <button className="w-full py-3 text-center text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
            View All Activities →
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Users className="text-blue-600" size={20} />
            <div>
              <p className="text-sm text-blue-700">Active Users</p>
              <p className="text-xl font-bold text-blue-900">1,245</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <ShoppingCart className="text-green-600" size={20} />
            <div>
              <p className="text-sm text-green-700">Today's Orders</p>
              <p className="text-xl font-bold text-green-900">89</p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <DollarSign className="text-purple-600" size={20} />
            <div>
              <p className="text-sm text-purple-700">Daily Revenue</p>
              <p className="text-xl font-bold text-purple-900">$12,450</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Clock className="text-orange-600" size={20} />
            <div>
              <p className="text-sm text-orange-700">Avg Session</p>
              <p className="text-xl font-bold text-orange-900">4m 23s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



// ========== ReportsPage.tsx ==========

interface Report {
  id: string;
  name: string;
  date: string;
  type: 'Sales' | 'Finance' | 'Analytics' | 'Inventory' | 'Customer';
  status: 'Ready' | 'Processing' | 'Failed';
  size: string;
  format: 'PDF' | 'Excel' | 'CSV';
  downloads: number;
  lastAccessed: string;
}

export const ReportsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'size'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedReports, setSelectedReports] = useState<string[]>([]);
  const [generatingReport, setGeneratingReport] = useState(false);

  const reports: Report[] = [
    { 
      id: '1', 
      name: 'Monthly Sales Report', 
      date: '2025-01-01', 
      type: 'Sales', 
      status: 'Ready', 
      size: '2.4 MB', 
      format: 'PDF', 
      downloads: 45,
      lastAccessed: '2 hours ago'
    },
    { 
      id: '2', 
      name: 'Quarterly Revenue Analysis', 
      date: '2024-12-31', 
      type: 'Finance', 
      status: 'Ready', 
      size: '3.1 MB', 
      format: 'Excel', 
      downloads: 32,
      lastAccessed: '1 day ago'
    },
    { 
      id: '3', 
      name: 'User Activity Dashboard', 
      date: '2025-01-15', 
      type: 'Analytics', 
      status: 'Processing', 
      size: 'Processing...', 
      format: 'PDF', 
      downloads: 0,
      lastAccessed: 'Just now'
    },
    { 
      id: '4', 
      name: 'Inventory Summary Q4', 
      date: '2025-01-10', 
      type: 'Inventory', 
      status: 'Ready', 
      size: '1.8 MB', 
      format: 'CSV', 
      downloads: 28,
      lastAccessed: '3 days ago'
    },
    { 
      id: '5', 
      name: 'Customer Demographics', 
      date: '2025-01-05', 
      type: 'Customer', 
      status: 'Ready', 
      size: '4.2 MB', 
      format: 'PDF', 
      downloads: 19,
      lastAccessed: '1 week ago'
    },
    { 
      id: '6', 
      name: 'Annual Financial Report', 
      date: '2024-12-25', 
      type: 'Finance', 
      status: 'Failed', 
      size: '0 MB', 
      format: 'PDF', 
      downloads: 0,
      lastAccessed: 'Failed to generate'
    },
    { 
      id: '7', 
      name: 'Weekly Performance Metrics', 
      date: '2025-01-14', 
      type: 'Analytics', 
      status: 'Ready', 
      size: '1.2 MB', 
      format: 'Excel', 
      downloads: 56,
      lastAccessed: '5 hours ago'
    },
    { 
      id: '8', 
      name: 'Product Stock Levels', 
      date: '2025-01-12', 
      type: 'Inventory', 
      status: 'Ready', 
      size: '0.9 MB', 
      format: 'CSV', 
      downloads: 22,
      lastAccessed: '2 days ago'
    },
  ];

  const reportTypes = ['All', 'Sales', 'Finance', 'Analytics', 'Inventory', 'Customer'];
  const statusTypes = ['All', 'Ready', 'Processing', 'Failed'];
  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'size', label: 'Size' },
  ];

  const filteredReports = useMemo(() => {
    return reports.filter(report => {
      const matchesType = selectedType === 'All' || report.type === selectedType;
      const matchesStatus = selectedStatus === 'All' || report.status === selectedStatus;
      const matchesSearch = report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           report.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesType && matchesStatus && matchesSearch;
    }).sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'date':
          comparison = new Date(b.date).getTime() - new Date(a.date).getTime();
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'size':
          const sizeA = parseFloat(a.size) || 0;
          const sizeB = parseFloat(b.size) || 0;
          comparison = sizeB - sizeA;
          break;
      }
      
      return sortOrder === 'asc' ? -comparison : comparison;
    });
  }, [selectedType, selectedStatus, searchQuery, sortBy, sortOrder]);

  const handleGenerateReport = () => {
    setGeneratingReport(true);
    // Simulate API call
    setTimeout(() => {
      alert('New report generated successfully!');
      setGeneratingReport(false);
    }, 2000);
  };

  const handleDownload = (reportId: string) => {
    const report = reports.find(r => r.id === reportId);
    if (report?.status === 'Ready') {
      alert(`Downloading ${report.name}...`);
    } else if (report?.status === 'Processing') {
      alert('Report is still processing. Please try again later.');
    } else {
      alert('Report generation failed. Please regenerate the report.');
    }
  };

  const handleSelectReport = (reportId: string) => {
    setSelectedReports(prev =>
      prev.includes(reportId)
        ? prev.filter(id => id !== reportId)
        : [...prev, reportId]
    );
  };

  const handleSelectAll = () => {
    if (selectedReports.length === filteredReports.length) {
      setSelectedReports([]);
    } else {
      setSelectedReports(filteredReports.map(r => r.id));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedReports.length > 0) {
      if (confirm(`Delete ${selectedReports.length} selected report(s)?`)) {
        // In a real app, you would call an API here
        alert(`${selectedReports.length} report(s) deleted successfully`);
        setSelectedReports([]);
      }
    }
  };

  const getTypeIcon = (type: Report['type']) => {
    switch (type) {
      case 'Sales': return <DollarSign size={16} />;
      case 'Finance': return <BarChart2 size={16} />;
      case 'Analytics': return <Users size={16} />;
      case 'Inventory': return <ShoppingBag size={16} />;
      case 'Customer': return <Users size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const getStatusIcon = (status: Report['status']) => {
    switch (status) {
      case 'Ready': return <CheckCircle size={16} className="text-green-500" />;
      case 'Processing': return <Clock size={16} className="text-yellow-500" />;
      case 'Failed': return <AlertCircle size={16} className="text-red-500" />;
    }
  };

  const getFormatColor = (format: Report['format']) => {
    switch (format) {
      case 'PDF': return 'bg-red-100 text-red-800';
      case 'Excel': return 'bg-green-100 text-green-800';
      case 'CSV': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate, manage, and download business reports</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDeleteSelected}
            disabled={selectedReports.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Trash2 size={16} />
            Delete Selected
          </button>
          <button
            onClick={handleGenerateReport}
            disabled={generatingReport}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
          >
            {generatingReport ? (
              <RefreshCw size={16} className="animate-spin" />
            ) : (
              <PlayCircle size={16} />
            )}
            {generatingReport ? 'Generating...' : 'Generate Report'}
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-black placeholder:opacity-50"
            />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 text-black opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              {reportTypes.map(type => (
                <option key={type} value={type}>{type} Reports</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-black opacity-50"
            >
              {statusTypes.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-black opacity-50"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>Sort by {option.label}</option>
              ))}
            </select>
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {sortOrder === 'asc' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-blue-600" size={20} />
              <p className="text-sm font-medium text-blue-700">Total Reports</p>
            </div>
            <p className="text-2xl font-bold text-blue-900">{reports.length}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-sm font-medium text-green-700">Ready</p>
            </div>
            <p className="text-2xl font-bold text-green-900">
              {reports.filter(r => r.status === 'Ready').length}
            </p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-yellow-600" size={20} />
              <p className="text-sm font-medium text-yellow-700">Processing</p>
            </div>
            <p className="text-2xl font-bold text-yellow-900">
              {reports.filter(r => r.status === 'Processing').length}
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-sm font-medium text-red-700">Failed</p>
            </div>
            <p className="text-2xl font-bold text-red-900">
              {reports.filter(r => r.status === 'Failed').length}
            </p>
          </div>
        </div>

        {/* Reports Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedReports.length === filteredReports.length && filteredReports.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Report Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Type</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Size</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Downloads</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredReports.map((report) => (
                <tr 
                  key={report.id} 
                  className={`hover:bg-gray-50 transition-colors ${
                    selectedReports.includes(report.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedReports.includes(report.id)}
                      onChange={() => handleSelectReport(report.id)}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar size={12} />
                        <span>{report.date}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                          {report.format}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-gray-100 rounded-lg text-black">
                        {getTypeIcon(report.type)}
                      </div>
                      <span className="text-sm font-medium text-black">{report.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(report.status)}
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        report.status === 'Ready' ? 'bg-green-100 text-green-800' :
                        report.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-900">{report.size}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div>
                      <span className="font-medium text-gray-900">{report.downloads}</span>
                      <p className="text-xs text-gray-500">{report.lastAccessed}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDownload(report.id)}
                        disabled={report.status !== 'Ready'}
                        className={`p-2 rounded-lg transition-colors ${
                          report.status === 'Ready'
                            ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        title={report.status === 'Ready' ? 'Download' : 'Not available'}
                      >
                        <Download size={16} />
                      </button>
                      <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Preview"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Share"
                      >
                        <Share2 size={16} />
                      </button>
                      <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="More options"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No reports found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters or generate a new report</p>
            <button
              onClick={handleGenerateReport}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Generate Your First Report
            </button>
          </div>
        )}

        {/* Footer */}
        {filteredReports.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {filteredReports.length} of {reports.length} reports
              {selectedReports.length > 0 && (
                <span className="ml-2 font-medium text-blue-600">
                  • {selectedReports.length} selected
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-black">
                <Printer size={16} />
                Print
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-black">
                <Download size={16} />
                Export All
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Quick Reports</h4>
          <div className="space-y-3">
            {['Daily Sales', 'Weekly Traffic', 'Monthly Revenue'].map((name) => (
              <button
                key={name}
                className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-gray-900">{name}</span>
                <PlayCircle size={16} className="text-blue-500" />
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Popular Templates</h4>
          <div className="space-y-3">
            {['Financial Summary', 'Customer Analytics', 'Inventory Report'].map((template) => (
              <div key={template} className="p-3 border border-gray-200 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">{template}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last used: 2 days ago</span>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="font-semibold text-gray-900 mb-4">Schedule Reports</h4>
          <p className="text-sm text-gray-500 mb-4">Automate your report generation</p>
          <button className="w-full px-4 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Set Up Automation
          </button>
          <div className="mt-4 text-sm text-gray-500">
            <p>• Daily reports at 9:00 AM</p>
            <p>• Weekly summary every Monday</p>
            <p>• Monthly reports on 1st day</p>
          </div>
        </div>
      </div>
    </div>
  );
};


// ========== MessagesPage.tsx ==========

interface Message {
  id: number;
  from: string;
  email: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
  starred: boolean;
  category: 'Primary' | 'Social' | 'Promotions' | 'Updates';
  attachments?: number;
  body?: string;
  avatar?: string;
}

interface Conversation {
  id: number;
  user: string;
  email: string;
  messages: ChatMessage[];
  lastActive: string;
  status: 'Online' | 'Offline';
  unreadCount: number;
}

interface ChatMessage {
  id: number;
  content: string;
  time: string;
  sender: 'user' | 'me';
  status: 'sent' | 'delivered' | 'read';
}

export const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: 'John Doe', email: 'john@example.com', subject: 'Question about order #12345', preview: 'Hi, I have a question about my recent order...', time: '10 min ago', unread: true, starred: false, category: 'Primary', attachments: 2 },
    { id: 2, from: 'Jane Smith', email: 'jane@example.com', subject: 'Product inquiry - Wireless Headphones', preview: 'I would like to know if these headphones are available...', time: '1 hour ago', unread: true, starred: true, category: 'Primary', attachments: 1 },
    { id: 3, from: 'Bob Johnson', email: 'bob@example.com', subject: 'Feedback about your service', preview: 'Great service! I received my package earlier than expected...', time: '2 hours ago', unread: false, starred: false, category: 'Primary' },
    { id: 4, from: 'Sarah Wilson', email: 'sarah@example.com', subject: 'Partnership Opportunity', preview: 'I represent TechCorp and would like to discuss...', time: '3 hours ago', unread: false, starred: true, category: 'Updates' },
    { id: 5, from: 'Mike Brown', email: 'mike@example.com', subject: 'Technical Support Required', preview: 'Having issues with the dashboard interface...', time: '5 hours ago', unread: true, starred: false, category: 'Primary', attachments: 3 },
    { id: 6, from: 'Instagram', email: 'notification@instagram.com', subject: 'New followers waiting', preview: 'You have 15 new followers this week...', time: '1 day ago', unread: false, starred: false, category: 'Social' },
    { id: 7, from: 'Amazon', email: 'deals@amazon.com', subject: 'Black Friday Deals Start Now!', preview: 'Exclusive deals just for you...', time: '1 day ago', unread: false, starred: false, category: 'Promotions' },
    { id: 8, from: 'GitHub', email: 'notifications@github.com', subject: 'Repository activity', preview: 'Your repository has been starred 5 times...', time: '2 days ago', unread: false, starred: true, category: 'Updates' },
  ]);

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(messages[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [replyText, setReplyText] = useState('');
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'conversation'>('list');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Primary', 'Social', 'Promotions', 'Updates', 'Starred', 'Unread'];
  
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      user: 'John Doe',
      email: 'john@example.com',
      lastActive: '2 min ago',
      status: 'Online',
      unreadCount: 3,
      messages: [
        { id: 1, content: 'Hi, I have a question about my order #12345', time: '10:30 AM', sender: 'user', status: 'read' },
        { id: 2, content: 'Sure, how can I help you with your order?', time: '10:32 AM', sender: 'me', status: 'read' },
        { id: 3, content: 'When will it be delivered?', time: '10:33 AM', sender: 'user', status: 'delivered' },
        { id: 4, content: 'Your order is scheduled for delivery tomorrow between 2-4 PM.', time: '10:35 AM', sender: 'me', status: 'sent' },
      ]
    },
    {
      id: 2,
      user: 'Jane Smith',
      email: 'jane@example.com',
      lastActive: '1 hour ago',
      status: 'Offline',
      unreadCount: 0,
      messages: [
        { id: 1, content: 'Are the wireless headphones available in blue?', time: 'Yesterday', sender: 'user', status: 'read' },
        { id: 2, content: 'Yes, they are available in blue, black, and white.', time: 'Yesterday', sender: 'me', status: 'read' },
      ]
    }
  ]);

  const [activeConversation, setActiveConversation] = useState<Conversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         msg.preview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Starred' && msg.starred) ||
                           (selectedCategory === 'Unread' && msg.unread) ||
                           msg.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
    // Mark as read when selected
    setMessages(prev => prev.map(msg => 
      msg.id === message.id ? { ...msg, unread: false } : msg
    ));
  };

  const handleToggleStar = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, starred: !msg.starred } : msg
    ));
  };

  const handleMarkAsRead = (id: number) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, unread: false } : msg
    ));
  };

  const handleMarkAsUnread = (id: number) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, unread: true } : msg
    ));
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      setMessages(prev => prev.filter(msg => msg.id !== id));
      if (selectedMessage?.id === id) {
        setSelectedMessage(filteredMessages[0] || null);
      }
    }
  };

  const handleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map(msg => msg.id));
    }
  };

  const handleSendReply = () => {
    if (!replyText.trim() || !selectedMessage) return;
    
    alert(`Reply sent to ${selectedMessage.from}: ${replyText}`);
    setReplyText('');
    
    // In real app, you would send to API
    setMessages(prev => prev.map(msg => 
      msg.id === selectedMessage.id ? { ...msg, unread: false } : msg
    ));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeConversation) return;
    
    const newChatMessage: ChatMessage = {
      id: activeConversation.messages.length + 1,
      content: newMessage,
      time: 'Just now',
      sender: 'me',
      status: 'sent'
    };
    
    setConversations(prev => prev.map(conv => 
      conv.id === activeConversation.id 
        ? { ...conv, messages: [...conv.messages, newChatMessage] }
        : conv
    ));
    
    setNewMessage('');
  };

  const stats = {
    total: messages.length,
    unread: messages.filter(m => m.unread).length,
    starred: messages.filter(m => m.starred).length,
    today: messages.filter(m => m.time.includes('min') || m.time.includes('hour')).length,
  };

  const getAvatarColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderMessageList = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Sidebar - Message List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="p-2">
          <div className="flex items-center justify-between px-2 py-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedMessages.length === filteredMessages.length && filteredMessages.length > 0}
                onChange={handleSelectAll}
                className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">
                {selectedMessages.length > 0 ? `${selectedMessages.length} selected` : 'Select all'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => selectedMessages.forEach(id => handleMarkAsRead(id))}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Mark as read"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={() => selectedMessages.forEach(id => handleMarkAsUnread(id))}
                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Mark as unread"
              >
                <EyeOff size={16} />
              </button>
              <button
                onClick={() => selectedMessages.forEach(id => handleDelete(id))}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-1 max-h-125 overflow-y-auto">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => handleSelectMessage(msg)}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  selectedMessage?.id === msg.id 
                    ? 'bg-blue-50 border-l-4 border-blue-500' 
                    : msg.unread 
                      ? 'bg-blue-50 hover:bg-blue-100' 
                      : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getAvatarColor(msg.from)}`}>
                      {getInitials(msg.from)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold text-sm ${msg.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                          {msg.from}
                        </span>
                        {msg.unread && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-500">{msg.time}</span>
                        <button
                          onClick={(e) => handleToggleStar(msg.id, e)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          {msg.starred ? (
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                          ) : (
                            <StarOff size={14} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className={`text-sm font-medium truncate ${msg.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {msg.subject}
                    </p>
                    <p className="text-xs text-gray-500 truncate mt-1">{msg.preview}</p>
                    <div className="flex items-center gap-3 mt-2">
                      {msg.attachments && (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <Paperclip size={10} />
                          {msg.attachments} file{msg.attachments > 1 ? 's' : ''}
                        </span>
                      )}
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {msg.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Message View */}
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm flex flex-col">
        {selectedMessage ? (
          <>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg ${getAvatarColor(selectedMessage.from)}`}>
                    {getInitials(selectedMessage.from)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-medium text-gray-700">{selectedMessage.from}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{selectedMessage.email}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{selectedMessage.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleStar(selectedMessage.id, { stopPropagation: () => {} } as any)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {selectedMessage.starred ? (
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                    ) : (
                      <StarOff size={20} className="text-gray-500" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-lg transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 text-gray-500 rounded-lg transition-colors">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Reply size={16} />
                  Reply
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Archive size={16} />
                  Archive
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <AlertCircle size={16} />
                  Report
                </button>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Dear Support Team,
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedMessage.preview}
                </p>
                <p className="text-gray-700 mb-6">
                  {selectedMessage.id === 1 && "I was wondering when my order #12345 will be delivered. I placed the order 3 days ago and haven't received any shipping confirmation yet. Could you please check the status for me?"}
                  {selectedMessage.id === 2 && "I'm interested in purchasing the wireless headphones but I would like to know if they come with a carrying case. Also, what's the warranty period for this product?"}
                  {selectedMessage.id === 3 && "I just wanted to say thank you for the excellent service. My order arrived perfectly packaged and earlier than expected. I'll definitely be shopping here again!"}
                </p>
                <p className="text-gray-700">
                  Best regards,<br />
                  {selectedMessage.from}
                </p>

                {selectedMessage.attachments && selectedMessage.attachments > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Attachments ({selectedMessage.attachments})
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[1, 2, 3].slice(0, selectedMessage.attachments).map((num) => (
                        <div key={num} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <Paperclip className="text-blue-600" size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">document_{num}.pdf</p>
                            <p className="text-sm text-gray-500">2.4 MB</p>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Download size={16} className="text-gray-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={20} className="text-gray-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Paperclip size={20} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <AtSign size={20} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <MessageCircle size={20} />
                      </button>
                    </div>
                    <button
                      onClick={handleSendReply}
                      disabled={!replyText.trim()}
                      className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send size={16} />
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12">
            <Mail className="text-gray-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Message Selected</h3>
            <p className="text-gray-500 text-center mb-6">
              Select a message from the list to view its contents
            </p>
            <button
              onClick={() => setSelectedMessage(messages[0])}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Latest Message
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderConversationView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Conversations List */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Conversations</h3>
          <div className="space-y-3">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setActiveConversation(conv)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  activeConversation?.id === conv.id
                    ? 'bg-blue-50 border-l-4 border-blue-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getAvatarColor(conv.user)}`}>
                      {getInitials(conv.user)}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      conv.status === 'Online' ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">{conv.user}</span>
                      {conv.unreadCount > 0 && (
                        <span className="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{conv.email}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-400">{conv.lastActive}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        conv.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {conv.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-sm flex flex-col">
        {activeConversation && (
          <>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${getAvatarColor(activeConversation.user)}`}>
                    {getInitials(activeConversation.user)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{activeConversation.user}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeConversation.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {activeConversation.status}
                      </span>
                      <span className="text-xs text-gray-500">Last active {activeConversation.lastActive}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Phone size={20} className="text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Video size={20} className="text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {activeConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'me'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-white text-gray-900 rounded-bl-none shadow-sm'
                    }`}>
                      <p>{msg.content}</p>
                      <div className={`flex items-center gap-2 mt-2 text-xs ${
                        msg.sender === 'me' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        <span>{msg.time}</span>
                        {msg.sender === 'me' && (
                          <>
                            <span>•</span>
                            <span className="capitalize">{msg.status}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Image size={20} />
                </button>
                <div className="flex-1">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Manage your conversations and messages</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="text-blue-500" size={20} />
              <span className="text-sm font-medium text-gray-700">{stats.total}</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeOff className="text-red-500" size={20} />
              <span className="text-sm font-medium text-gray-700">{stats.unread}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" size={20} />
              <span className="text-sm font-medium text-gray-700">{stats.starred}</span>
            </div>
          </div>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Mail size={16} />
            </button>
            <button
              onClick={() => setViewMode('conversation')}
              className={`px-4 py-2 transition-colors ${
                viewMode === 'conversation' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageCircle size={16} />
            </button>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <RefreshCw size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      {viewMode === 'list' ? renderMessageList() : renderConversationView()}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mail className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="text-xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <EyeOff className="text-red-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Unread</p>
              <p className="text-xl font-bold text-gray-900">{stats.unread}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Star className="text-yellow-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Starred</p>
              <p className="text-xl font-bold text-gray-900">{stats.starred}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today</p>
              <p className="text-xl font-bold text-gray-900">{stats.today}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add missing icons
const Phone = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Video = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const Image = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);


// ========== CalendarPage.tsx ==========
interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
  attendees?: string[];
  color: string;
  type: 'meeting' | 'deadline' | 'event' | 'personal' | 'holiday';
  status: 'confirmed' | 'pending' | 'cancelled';
  allDay?: boolean;
}

export const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().setHours(10, 0)),
      end: new Date(new Date().setHours(11, 30)),
      description: 'Weekly team sync and project updates',
      location: 'Conference Room A',
      attendees: ['John Doe', 'Jane Smith', 'Bob Johnson'],
      color: 'bg-blue-500',
      type: 'meeting',
      status: 'confirmed'
    },
    {
      id: '2',
      title: 'Project Deadline',
      start: new Date(new Date().setDate(new Date().getDate() + 2)),
      end: new Date(new Date().setDate(new Date().getDate() + 2)),
      description: 'Submit final project deliverables',
      color: 'bg-red-500',
      type: 'deadline',
      status: 'pending',
      allDay: true
    },
    {
      id: '3',
      title: 'Client Presentation',
      start: new Date(new Date().setDate(new Date().getDate() + 1)),
      end: new Date(new Date().setDate(new Date().getDate() + 1)),
      description: 'Demo for TechCorp executives',
      location: 'Client Office',
      attendees: ['Sarah Wilson', 'Mike Brown'],
      color: 'bg-purple-500',
      type: 'meeting',
      status: 'confirmed'
    },
    {
      id: '4',
      title: 'Public Holiday',
      start: new Date(new Date().setDate(new Date().getDate() + 5)),
      end: new Date(new Date().setDate(new Date().getDate() + 5)),
      color: 'bg-yellow-500',
      type: 'holiday',
      status: 'confirmed',
      allDay: true
    },
    {
      id: '5',
      title: 'Dentist Appointment',
      start: new Date(new Date().setDate(new Date().getDate() + 3)),
      end: new Date(new Date().setDate(new Date().getDate() + 3)),
      location: 'Dental Clinic',
      color: 'bg-green-500',
      type: 'personal',
      status: 'confirmed'
    },
    {
      id: '6',
      title: 'Product Launch',
      start: new Date(new Date().setDate(new Date().getDate() + 7)),
      end: new Date(new Date().setDate(new Date().getDate() + 7)),
      description: 'Launch of new product line',
      location: 'Main Auditorium',
      attendees: ['All Employees'],
      color: 'bg-pink-500',
      type: 'event',
      status: 'confirmed',
      allDay: true
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<CalendarEvent>>({
    title: '',
    start: new Date(),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
    color: 'bg-blue-500',
    type: 'meeting',
    status: 'pending'
  });

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const navigateToday = () => {
    setCurrentDate(new Date());
  };

  const getDaysArray = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysCount = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    
    const days = [];
    
    // Previous month's days
    const prevMonthDays = daysInMonth(year, month - 1);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false,
        events: []
      });
    }
    
    // Current month's days
    const today = new Date();
    for (let i = 1; i <= daysCount; i++) {
      const date = new Date(year, month, i);
      const dayEvents = events.filter(event => 
        event.start.getDate() === i && 
        event.start.getMonth() === month &&
        event.start.getFullYear() === year
      );
      
      days.push({
        date,
        isCurrentMonth: true,
        isToday: date.getDate() === today.getDate() && 
                date.getMonth() === today.getMonth() && 
                date.getFullYear() === today.getFullYear(),
        events: dayEvents
      });
    }
    
    // Next month's days
    const totalCells = 42; // 6 weeks
    for (let i = 1; days.length < totalCells; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        events: []
      });
    }
    
    return days;
  };

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      weekDays.push(date);
    }
    return weekDays;
  };

  const getDayEvents = (date: Date) => {
    return events.filter(event => {
      const eventDate = event.start;
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };

  const handleCreateEvent = () => {
    if (!newEvent.title) return;
    
    const event: CalendarEvent = {
      id: Date.now().toString(),
      title: newEvent.title || 'New Event',
      start: newEvent.start || new Date(),
      end: newEvent.end || new Date(),
      description: newEvent.description,
      location: newEvent.location,
      attendees: newEvent.attendees,
      color: newEvent.color || 'bg-blue-500',
      type: newEvent.type || 'meeting',
      status: newEvent.status || 'pending',
      allDay: newEvent.allDay
    };
    
    setEvents(prev => [...prev, event]);
    setShowEventModal(false);
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      color: 'bg-blue-500',
      type: 'meeting',
      status: 'pending'
    });
  };

  const handleDeleteEvent = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(event => event.id !== id));
      setSelectedEvent(null);
    }
  };

  const renderMonthView = () => {
    const days = getDaysArray();
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div className="bg-white rounded-lg">
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {weekDays.map(day => (
            <div key={day} className="bg-gray-50 p-3 text-center">
              <span className="text-sm font-semibold text-gray-600">{day}</span>
            </div>
          ))}
          
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentDate(day.date);
                setView('day');
              }}
              className={`min-h-32 p-2 bg-white cursor-pointer hover:bg-gray-50 transition-colors ${
                !day.isCurrentMonth ? 'text-gray-400' : ''
              } ${day.isToday ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${
                  day.isToday ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {day.date.getDate()}
                </span>
                {day.events.length > 0 && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </div>
              
              <div className="space-y-1">
                {day.events.slice(0, 2).map(event => (
                  <div
                    key={event.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                    className={`${event.color} text-white text-xs p-1 rounded truncate cursor-pointer hover:opacity-90`}
                  >
                    {event.title}
                  </div>
                ))}
                {day.events.length > 2 && (
                  <div className="text-xs text-gray-500">
                    +{day.events.length - 2} more
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    const weekDays = getWeekDays();
    const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 8 PM
    
    return (
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-8 border-b">
          <div className="p-3"></div>
          {weekDays.map(day => (
            <div key={day.toString()} className="p-3 text-center">
              <div className="text-sm font-semibold text-gray-600">
                {day.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className={`text-lg font-bold ${
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth()
                  ? 'text-blue-600'
                  : 'text-gray-900'
              }`}>
                {day.getDate()}
              </div>
            </div>
          ))}
        </div>
        
        <div className="overflow-y-auto max-h-150">
          {hours.map(hour => (
            <div key={hour} className="grid grid-cols-8 border-b border-gray-100">
              <div className="p-2 text-sm text-gray-500 text-right pr-4">
                {hour}:00
              </div>
              {weekDays.map(day => {
                const dayEvents = events.filter(event => {
                  const eventHour = event.start.getHours();
                  const eventDate = event.start;
                  return eventHour === hour &&
                         eventDate.getDate() === day.getDate() &&
                         eventDate.getMonth() === day.getMonth() &&
                         eventDate.getFullYear() === day.getFullYear();
                });
                
                return (
                  <div
                    key={day.toString()}
                    className="p-2 border-l border-gray-100 min-h-16 relative"
                  >
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className={`absolute left-1 right-1 ${event.color} text-white text-xs p-1 rounded cursor-pointer hover:opacity-90`}
                        style={{
                          top: `${event.start.getMinutes() / 60 * 64}px`,
                          height: `${(event.end.getTime() - event.start.getTime()) / (1000 * 60 * 60) * 64}px`
                        }}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        <div className="truncate opacity-90">
                          {formatTime(event.start)} - {formatTime(event.end)}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    const hours = Array.from({ length: 12 }, (_, i) => i + 8);
    const dayEvents = getDayEvents(currentDate);
    
    return (
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">
            {formatDate(currentDate)}
          </h3>
        </div>
        
        <div className="overflow-y-auto max-h-150">
          {hours.map(hour => {
            const hourEvents = dayEvents.filter(event => 
              event.start.getHours() === hour
            );
            
            return (
              <div key={hour} className="grid grid-cols-5 border-b border-gray-100">
                <div className="p-3 text-sm text-gray-500 text-right pr-4">
                  {hour}:00
                </div>
                <div className="col-span-4 p-3 border-l border-gray-100 relative min-h-16">
                  {hourEvents.map(event => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`${event.color} text-white text-xs p-2 rounded cursor-pointer hover:opacity-90 mb-1`}
                    >
                      <div className="font-medium truncate">{event.title}</div>
                      <div className="truncate opacity-90">
                        {formatTime(event.start)} - {formatTime(event.end)}
                      </div>
                    </div>
                  ))}
                  
                  {hourEvents.length === 0 && (
                    <div
                      onClick={() => {
                        const start = new Date(currentDate);
                        start.setHours(hour, 0, 0, 0);
                        const end = new Date(start);
                        end.setHours(hour + 1, 0, 0, 0);
                        
                        setNewEvent({
                          start,
                          end,
                          color: 'bg-blue-500',
                          type: 'meeting',
                          status: 'pending'
                        });
                        setShowEventModal(true);
                      }}
                      className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      + Add event
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderUpcomingEvents = () => {
    const upcomingEvents = events
      .filter(event => event.start >= new Date())
      .sort((a, b) => a.start.getTime() - b.start.getTime())
      .slice(0, 5);
    
    return (
      <div className="space-y-3">
        {upcomingEvents.map(event => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-3 h-3 rounded-full ${event.color}`}></div>
                  <span className="font-medium text-gray-900">{event.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    event.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    event.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {formatTime(event.start)} - {formatTime(event.end)}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {event.location}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteEvent(event.id);
                }}
                className="p-1 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        
        {upcomingEvents.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No upcoming events
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Schedule and manage your events</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={navigateToday}
            className="px-4 py-2 border border-gray-200 text-black rounded-lg hover:bg-gray-50 transition-colors"
          >
            Today
          </button>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 transition-colors ${
                view === 'month' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-4 py-2 transition-colors ${
                view === 'week' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setView('day')}
              className={`px-4 py-2 transition-colors ${
                view === 'day' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Day
            </button>
          </div>
          <button
            onClick={() => setShowEventModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={16} />
            New Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Navigation */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <h2 className="text-xl font-bold text-gray-900">
                  {currentDate.toLocaleDateString('en-US', { 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </h2>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Printer size={20} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download size={20} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              {view === 'month' && renderMonthView()}
              {view === 'week' && renderWeekView()}
              {view === 'day' && renderDayView()}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event Details */}
          {selectedEvent && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Event Details</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-4 h-4 rounded-full ${selectedEvent.color}`}></div>
                    <h4 className="font-bold text-gray-900">{selectedEvent.title}</h4>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarIcon size={16} />
                      <span>{formatDate(selectedEvent.start)}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span>{formatTime(selectedEvent.start)} - {formatTime(selectedEvent.end)}</span>
                    </div>
                    
                    {selectedEvent.location && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{selectedEvent.location}</span>
                      </div>
                    )}
                    
                    {selectedEvent.description && (
                      <div className="text-gray-600">
                        <p className="font-medium mb-1">Description</p>
                        <p>{selectedEvent.description}</p>
                      </div>
                    )}
                    
                    {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={16} />
                          <span className="font-medium">Attendees</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedEvent.attendees.map((attendee, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
                            >
                              {attendee}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t">
                  <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <Edit size={16} className="inline mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(selectedEvent.id)}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={16} className="inline mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
              <span className="text-sm text-gray-500">
                {events.filter(e => e.start >= new Date()).length} events
              </span>
            </div>
            {renderUpcomingEvents()}
          </div>

          {/* Event Types */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Types</h3>
            <div className="space-y-3">
              {[
                { type: 'meeting', label: 'Meetings', color: 'bg-blue-500', count: events.filter(e => e.type === 'meeting').length },
                { type: 'deadline', label: 'Deadlines', color: 'bg-red-500', count: events.filter(e => e.type === 'deadline').length },
                { type: 'event', label: 'Events', color: 'bg-pink-500', count: events.filter(e => e.type === 'event').length },
                { type: 'personal', label: 'Personal', color: 'bg-green-500', count: events.filter(e => e.type === 'personal').length },
                { type: 'holiday', label: 'Holidays', color: 'bg-yellow-500', count: events.filter(e => e.type === 'holiday').length },
              ].map(item => (
                <div key={item.type} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Create New Event</h3>
                <button
                  onClick={() => setShowEventModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title
                  </label>
                  <input
                    type="text"
                    value={newEvent.title || ''}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Team meeting, Deadline, etc."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      value={newEvent.start ? newEvent.start.toISOString().slice(0, 16) : ''}
                      onChange={(e) => setNewEvent({ 
                        ...newEvent, 
                        start: new Date(e.target.value) 
                      })}
                      className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      value={newEvent.end ? newEvent.end.toISOString().slice(0, 16) : ''}
                      onChange={(e) => setNewEvent({ 
                        ...newEvent, 
                        end: new Date(e.target.value) 
                      })}
                      className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    value={newEvent.description || ''}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Event details..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['meeting', 'deadline', 'event', 'personal', 'holiday'].map(type => (
                      <button
                        key={type}
                        onClick={() => setNewEvent({ ...newEvent, type: type as any })}
                        className={`px-3 py-1.5 text-sm rounded-lg capitalize transition-colors ${
                          newEvent.type === type
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t">
                  <button
                    onClick={handleCreateEvent}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Create Event
                  </button>
                  <button
                    onClick={() => setShowEventModal(false)}
                    className="flex-1 px-4 py-2 border text-black border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ========== FilesPage.tsx ==========

interface FileItem {
  id: string;
  name: string;
  size: string;
  bytes: number;
  date: string;
  type: 'pdf' | 'excel' | 'image' | 'doc' | 'video' | 'audio' | 'archive' | 'folder';
  icon: React.ReactNode;
  starred: boolean;
  shared: boolean;
  owner: string;
  lastModified: string;
  tags?: string[];
}

interface Breadcrumb {
  name: string;
  path: string;
}

export const FilesPage: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([
    { 
      id: '1', 
      name: 'Project_Proposal_Final.pdf', 
      size: '2.4 MB', 
      bytes: 2516582,
      date: '2025-01-15', 
      type: 'pdf',
      icon: <FileText className="text-red-500" size={24} />,
      starred: true,
      shared: true,
      owner: 'John Doe',
      lastModified: '2 hours ago',
      tags: ['Important', 'Project']
    },
    { 
      id: '2', 
      name: 'Budget_Planning_2025.xlsx', 
      size: '856 KB', 
      bytes: 876544,
      date: '2025-01-14', 
      type: 'excel',
      icon: <FileSpreadsheet className="text-green-500" size={24} />,
      starred: true,
      shared: false,
      owner: 'Jane Smith',
      lastModified: '1 day ago',
      tags: ['Finance']
    },
    { 
      id: '3', 
      name: 'Team_Photo_Retreat.jpg', 
      size: '3.2 MB', 
      bytes: 3355443,
      date: '2025-01-13', 
      type: 'image',
      icon: <FileImage className="text-blue-500" size={24} />,
      starred: false,
      shared: true,
      owner: 'Mike Brown',
      lastModified: '3 days ago',
      tags: ['Photos', 'Team']
    },
    { 
      id: '4', 
      name: 'Q4_Presentation_Final.pptx', 
      size: '5.1 MB', 
      bytes: 5347738,
      date: '2025-01-12', 
      type: 'doc',
      icon: <File className="text-orange-500" size={24} />,
      starred: false,
      shared: true,
      owner: 'Sarah Wilson',
      lastModified: '2 days ago',
      tags: ['Presentation']
    },
    { 
      id: '5', 
      name: 'Product_Demo_Video.mp4', 
      size: '15.4 MB', 
      bytes: 16148070,
      date: '2025-01-11', 
      type: 'video',
      icon: <FileVideo className="text-purple-500" size={24} />,
      starred: true,
      shared: false,
      owner: 'Bob Johnson',
      lastModified: '4 days ago',
      tags: ['Demo', 'Video']
    },
    { 
      id: '6', 
      name: 'Meeting_Recording.mp3', 
      size: '8.2 MB', 
      bytes: 8598323,
      date: '2025-01-10', 
      type: 'audio',
      icon: <FileAudio className="text-yellow-500" size={24} />,
      starred: false,
      shared: true,
      owner: 'John Doe',
      lastModified: '5 days ago',
      tags: ['Audio', 'Meeting']
    },
    { 
      id: '7', 
      name: 'Backup_Archive.zip', 
      size: '12.8 MB', 
      bytes: 13421773,
      date: '2025-01-09', 
      type: 'archive',
      icon: <Archive className="text-gray-500" size={24} />,
      starred: false,
      shared: false,
      owner: 'System',
      lastModified: '1 week ago'
    },
    { 
      id: '8', 
      name: 'Project_Documents', 
      size: '45 MB', 
      bytes: 47185920,
      date: '2025-01-08', 
      type: 'folder',
      icon: <Folder className="text-blue-400" size={24} />,
      starred: true,
      shared: true,
      owner: 'Jane Smith',
      lastModified: '2 days ago',
      tags: ['Folder', 'Documents']
    },
    { 
      id: '9', 
      name: 'Financial_Reports', 
      size: '28.3 MB', 
      bytes: 29674752,
      date: '2025-01-07', 
      type: 'folder',
      icon: <Folder className="text-green-400" size={24} />,
      starred: false,
      shared: true,
      owner: 'Mike Brown',
      lastModified: '3 days ago',
      tags: ['Finance', 'Reports']
    },
    { 
      id: '10', 
      name: 'Client_Contracts.pdf', 
      size: '1.8 MB', 
      bytes: 1887437,
      date: '2025-01-06', 
      type: 'pdf',
      icon: <FileText className="text-red-500" size={24} />,
      starred: false,
      shared: false,
      owner: 'Sarah Wilson',
      lastModified: '6 days ago',
      tags: ['Legal', 'Contracts']
    },
    { 
      id: '11', 
      name: 'Marketing_Assets', 
      size: '65.2 MB', 
      bytes: 68367155,
      date: '2025-01-05', 
      type: 'folder',
      icon: <Folder className="text-purple-400" size={24} />,
      starred: true,
      shared: true,
      owner: 'Bob Johnson',
      lastModified: 'Yesterday',
      tags: ['Marketing', 'Assets']
    },
    { 
      id: '12', 
      name: 'Annual_Report_2024.pdf', 
      size: '4.7 MB', 
      bytes: 4928307,
      date: '2025-01-04', 
      type: 'pdf',
      icon: <FileText className="text-red-500" size={24} />,
      starred: true,
      shared: true,
      owner: 'John Doe',
      lastModified: '1 week ago',
      tags: ['Annual', 'Report']
    },
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPath, setCurrentPath] = useState<Breadcrumb[]>([
    { name: 'Home', path: '/' },
    { name: 'My Files', path: '/my-files' }
  ]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fileTypes = [
    { value: 'all', label: 'All Files', icon: <File size={16} /> },
    { value: 'folder', label: 'Folders', icon: <Folder size={16} /> },
    { value: 'pdf', label: 'PDF', icon: <FileText size={16} /> },
    { value: 'excel', label: 'Spreadsheets', icon: <FileSpreadsheet size={16} /> },
    { value: 'image', label: 'Images', icon: <FileImage size={16} /> },
    { value: 'doc', label: 'Documents', icon: <File size={16} /> },
    { value: 'video', label: 'Videos', icon: <FileVideo size={16} /> },
    { value: 'audio', label: 'Audio', icon: <FileAudio size={16} /> },
  ];

  const stats = {
    total: files.length,
    folders: files.filter(f => f.type === 'folder').length,
    size: files.reduce((sum, file) => sum + file.bytes, 0),
    shared: files.filter(f => f.shared).length,
    starred: files.filter(f => f.starred).length,
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredFiles = files
    .filter(file => {
      const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (file.tags && file.tags.some(tag => 
                             tag.toLowerCase().includes(searchQuery.toLowerCase())
                           ));
      const matchesType = selectedType === 'all' || file.type === selectedType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'date':
          comparison = new Date(b.date).getTime() - new Date(a.date).getTime();
          break;
        case 'size':
          comparison = b.bytes - a.bytes;
          break;
      }
      
      return sortOrder === 'asc' ? -comparison : comparison;
    });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesList = e.target.files;
    if (!filesList || filesList.length === 0) return;
    
    setUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Add uploaded files
          Array.from(filesList).forEach((file, index) => {
            const newFile: FileItem = {
              id: Date.now().toString() + index,
              name: file.name,
              size: formatBytes(file.size),
              bytes: file.size,
              date: new Date().toISOString().split('T')[0],
              type: getFileType(file),
              icon: getFileIcon(file),
              starred: false,
              shared: false,
              owner: 'You',
              lastModified: 'Just now'
            };
            
            setFiles(prev => [newFile, ...prev]);
          });
          
          setTimeout(() => {
            setUploading(false);
            setShowUploadModal(false);
            setUploadProgress(0);
          }, 500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getFileType = (file: File): FileItem['type'] => {
    const type = file.type;
    if (type.includes('pdf')) return 'pdf';
    if (type.includes('spreadsheet') || type.includes('excel')) return 'excel';
    if (type.includes('image')) return 'image';
    if (type.includes('video')) return 'video';
    if (type.includes('audio')) return 'audio';
    if (type.includes('zip') || type.includes('compressed')) return 'archive';
    return 'doc';
  };

  const getFileIcon = (file: File): React.ReactNode => {
    const type = file.type;
    if (type.includes('pdf')) return <FileText className="text-red-500" size={24} />;
    if (type.includes('spreadsheet') || type.includes('excel')) return <FileSpreadsheet className="text-green-500" size={24} />;
    if (type.includes('image')) return <FileImage className="text-blue-500" size={24} />;
    if (type.includes('video')) return <FileVideo className="text-purple-500" size={24} />;
    if (type.includes('audio')) return <FileAudio className="text-yellow-500" size={24} />;
    if (type.includes('zip') || type.includes('compressed')) return <Archive className="text-gray-500" size={24} />;
    return <File className="text-orange-500" size={24} />;
  };

  const handleDownload = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file) {
      alert(`Downloading ${file.name}...`);
    }
  };

  const handleDelete = (fileId: string | string[]) => {
    const fileIds = Array.isArray(fileId) ? fileId : [fileId];
    const fileNames = fileIds.map(id => files.find(f => f.id === id)?.name).join(', ');
    
    if (confirm(`Delete ${fileIds.length} selected file(s)?\n${fileNames}`)) {
      setFiles(prev => prev.filter(file => !fileIds.includes(file.id)));
      setSelectedFiles([]);
    }
  };

  const handleStarToggle = (fileId: string) => {
    setFiles(prev => prev.map(file => 
      file.id === fileId ? { ...file, starred: !file.starred } : file
    ));
  };

  const handleSelectAll = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map(f => f.id));
    }
  };

  const handleFileClick = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file?.type === 'folder') {
      setCurrentPath(prev => [...prev, { name: file.name, path: `/${file.name}` }]);
      // In real app, you would fetch folder contents here
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentPath(prev => prev.slice(0, index + 1));
  };

  const handleShare = (fileId: string) => {
    const file = files.find(f => f.id === fileId);
    if (file) {
      setShowShareModal(true);
      // In real app, you would open sharing dialog
    }
  };

  const renderGridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {filteredFiles.map(file => (
        <div
          key={file.id}
          className={`border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer group ${
            selectedFiles.includes(file.id) ? 'border-blue-500 bg-blue-50' : ''
          }`}
          onClick={(e) => {
            if (e.ctrlKey || e.metaKey) {
              // Ctrl/Cmd click for multi-select
              setSelectedFiles(prev => 
                prev.includes(file.id) 
                  ? prev.filter(id => id !== file.id)
                  : [...prev, file.id]
              );
            } else {
              handleFileClick(file.id);
            }
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              {file.icon}
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStarToggle(file.id);
                }}
                className="p-1 hover:bg-gray-200 rounded"
              >
                {file.starred ? (
                  <Star size={14} className="text-yellow-500 fill-yellow-500" />
                ) : (
                  <StarOff size={14} className="text-gray-400" />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(file.id);
                }}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <Download size={14} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="mb-3">
            <h4 className="font-semibold text-gray-900 text-sm mb-1 truncate" title={file.name}>
              {file.name}
            </h4>
            <p className="text-xs text-gray-500">
              {file.size} • {file.date}
            </p>
            {file.tags && file.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {file.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {file.tags.length > 2 && (
                  <span className="text-xs text-gray-400">+{file.tags.length - 2}</span>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${
                file.shared ? 'bg-green-500' : 'bg-gray-300'
              }`}></span>
              <span className="text-xs text-gray-500">
                {file.shared ? 'Shared' : 'Private'}
              </span>
            </div>
            <input
              type="checkbox"
              checked={selectedFiles.includes(file.id)}
              onChange={(e) => {
                e.stopPropagation();
                setSelectedFiles(prev => 
                  prev.includes(file.id)
                    ? prev.filter(id => id !== file.id)
                    : [...prev, file.id]
                );
              }}
              className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left">
              <input
                type="checkbox"
                checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0}
                onChange={handleSelectAll}
                className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
            </th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Owner</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Last Modified</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">File Size</th>
            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {filteredFiles.map(file => (
            <tr 
              key={file.id} 
              className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                selectedFiles.includes(file.id) ? 'bg-blue-50' : ''
              }`}
              onClick={() => handleFileClick(file.id)}
            >
              <td className="py-3 px-4">
                <input
                  type="checkbox"
                  checked={selectedFiles.includes(file.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedFiles(prev => 
                      prev.includes(file.id)
                        ? prev.filter(id => id !== file.id)
                        : [...prev, file.id]
                    );
                  }}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  {file.icon}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{file.name}</span>
                      {file.starred && (
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      )}
                      {file.shared && (
                        <Users size={12} className="text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{file.date}</span>
                      {file.tags && file.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm text-gray-900">{file.owner}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm text-gray-900">{file.lastModified}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm text-gray-900">{file.size}</span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(file.id);
                    }}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(file.id);
                    }}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    title="Share"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(file.id);
                    }}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Files</h1>
          <p className="text-gray-600">Manage your documents and files</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
          >
            <Upload size={16} />
            Upload Files
          </button>
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 border text-black border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FolderPlus size={16} />
            New Folder
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            className="hidden"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <File className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Files</p>
              <p className="text-xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Folder className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Folders</p>
              <p className="text-xl font-bold text-gray-900">{stats.folders}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <HardDrive className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Size</p>
              <p className="text-xl font-bold text-gray-900">{formatBytes(stats.size)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Star className="text-yellow-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Starred</p>
              <p className="text-xl font-bold text-gray-900">{stats.starred}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Users className="text-red-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Shared</p>
              <p className="text-xl font-bold text-gray-900">{stats.shared}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm">
        {/* Toolbar */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2">
              {currentPath.map((crumb, idx) => (
                <React.Fragment key={crumb.path}>
                  <button
                    onClick={() => handleBreadcrumbClick(idx)}
                    className={`text-sm font-medium ${
                      idx === currentPath.length - 1
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {crumb.name}
                  </button>
                  {idx < currentPath.length - 1 && (
                    <ChevronDown size={16} className="text-gray-400 rotate-270" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border text-black opacity-50 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {fileTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-sm whitespace-nowrap rounded-lg transition-colors ${
                    selectedType === type.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.icon}
                  {type.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 border border-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="date">Date</option>
                  <option value="size">Size</option>
                </select>
                <button
                  onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                  className="p-1.5 hover:bg-gray-100 rounded-lg text-black"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>

              {selectedFiles.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-600">
                    {selectedFiles.length} selected
                  </span>
                  <button
                    onClick={() => handleDownload(selectedFiles[0])}
                    className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                    title="Download selected"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={() => handleShare(selectedFiles[0])}
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg"
                    title="Share selected"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(selectedFiles)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete selected"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Files Area */}
        <div className="p-6">
          {filteredFiles.length > 0 ? (
            viewMode === 'grid' ? renderGridView() : renderListView()
          ) : (
            <div className="text-center py-12">
              <File className="mx-auto text-gray-300 mb-4" size={64} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No files found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery 
                  ? `No files match "${searchQuery}"`
                  : 'Upload your first file to get started'}
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Upload Files
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upload Files</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Cloud className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600 mb-4">
                  Drag and drop files here or click to browse
                </p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Browse Files
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Maximum file size: 100MB
                </p>
              </div>

              {uploading && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Uploading...</span>
                    <span className="text-sm text-gray-500">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Share File</h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Share with people
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter email addresses"
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Add
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Permission
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="view">Can view</option>
                    <option value="edit">Can edit</option>
                    <option value="comment">Can comment</option>
                  </select>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Share
                  </button>
                  <button
                    onClick={() => setShowShareModal(false)}
                    className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ========== BillingPage.tsx ==========
interface Plan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  description: string;
  features: string[];
  popular: boolean;
  icon: React.ReactNode;
  color: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

interface Invoice {
  id: string;
  number: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'refunded';
  date: string;
  dueDate: string;
  description: string;
  items: InvoiceItem[];
  pdfUrl?: string;
}

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal' | 'bank';
  last4: string;
  brand: string;
  expiry: string;
  isDefault: boolean;
}

interface UsageMetric {
  name: string;
  current: number;
  limit: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

export const BillingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [showUsageDetails, setShowUsageDetails] = useState<string | null>(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState<string | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: '1', type: 'card', last4: '4242', brand: 'visa', expiry: '12/26', isDefault: true },
    { id: '2', type: 'card', last4: '5555', brand: 'mastercard', expiry: '08/25', isDefault: false },
    { id: '3', type: 'paypal', last4: '', brand: 'paypal', expiry: '', isDefault: false },
  ]);
  
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: '1',
      number: 'INV-2025-001',
      amount: 299.00,
      status: 'paid',
      date: '2025-01-15',
      dueDate: '2025-01-15',
      description: 'Pro Plan - January 2025',
      items: [
        { name: 'Pro Plan Subscription', quantity: 1, price: 299.00, total: 299.00 },
        { name: 'Additional Users (2)', quantity: 2, price: 25.00, total: 50.00 },
        { name: 'Storage (100GB)', quantity: 1, price: 10.00, total: 10.00 },
      ],
      pdfUrl: '#'
    },
    {
      id: '2',
      number: 'INV-2024-012',
      amount: 499.00,
      status: 'paid',
      date: '2024-12-15',
      dueDate: '2024-12-15',
      description: 'Business Plan - December 2024',
      items: [
        { name: 'Business Plan Subscription', quantity: 1, price: 499.00, total: 499.00 },
      ],
      pdfUrl: '#'
    },
    {
      id: '3',
      number: 'INV-2025-002',
      amount: 299.00,
      status: 'pending',
      date: '2025-02-15',
      dueDate: '2025-02-15',
      description: 'Pro Plan - February 2025',
      items: [
        { name: 'Pro Plan Subscription', quantity: 1, price: 299.00, total: 299.00 },
      ],
      pdfUrl: '#'
    },
    {
      id: '4',
      number: 'INV-2024-011',
      amount: 299.00,
      status: 'refunded',
      date: '2024-11-15',
      dueDate: '2024-11-15',
      description: 'Pro Plan - November 2024',
      items: [
        { name: 'Pro Plan Subscription', quantity: 1, price: 299.00, total: 299.00 },
      ],
      pdfUrl: '#'
    },
    {
      id: '5',
      number: 'INV-2024-010',
      amount: 99.00,
      status: 'overdue',
      date: '2024-10-15',
      dueDate: '2024-10-15',
      description: 'Basic Plan - October 2024',
      items: [
        { name: 'Basic Plan Subscription', quantity: 1, price: 99.00, total: 99.00 },
      ],
      pdfUrl: '#'
    },
  ]);

  const [usageMetrics, setUsageMetrics] = useState<UsageMetric[]>([
    { name: 'API Requests', current: 12450, limit: 25000, unit: 'requests', icon: <Activity className="text-blue-500" size={20} />, color: 'bg-blue-500' },
    { name: 'Storage Used', current: 42, limit: 100, unit: 'GB', icon: <HardDrive className="text-green-500" size={20} />, color: 'bg-green-500' },
    { name: 'Team Members', current: 5, limit: 10, unit: 'users', icon: <Users className="text-purple-500" size={20} />, color: 'bg-purple-500' },
    { name: 'Monthly Bandwidth', current: 125, limit: 200, unit: 'GB', icon: <Globe className="text-orange-500" size={20} />, color: 'bg-orange-500' },
  ]);

  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: billingPeriod === 'monthly' ? 99 : 990,
      period: billingPeriod,
      description: 'For small teams and startups',
      features: [
        'Up to 5 users',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access (1K req/day)',
      ],
      popular: false,
      icon: <Home className="text-gray-400" size={24} />,
      color: 'bg-gray-100',
      buttonText: selectedPlan === 'basic' ? 'Current Plan' : 'Choose Basic',
      buttonVariant: selectedPlan === 'basic' ? 'primary' : 'secondary'
    },
    {
      id: 'pro',
      name: 'Professional',
      price: billingPeriod === 'monthly' ? 299 : 2990,
      period: billingPeriod,
      description: 'For growing businesses',
      features: [
        'Up to 15 users',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'API access (10K req/day)',
        'Custom integrations',
        'White-label option',
      ],
      popular: true,
      icon: <Briefcase className="text-blue-500" size={24} />,
      color: 'bg-blue-50',
      buttonText: selectedPlan === 'pro' ? 'Current Plan' : 'Choose Pro',
      buttonVariant: selectedPlan === 'pro' ? 'primary' : 'secondary'
    },
    {
      id: 'business',
      name: 'Business',
      price: billingPeriod === 'monthly' ? 599 : 5990,
      period: billingPeriod,
      description: 'For large enterprises',
      features: [
        'Unlimited users',
        '500GB storage',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited API access',
        'Custom integrations',
        'White-label option',
        'SLA guarantee',
        'Dedicated account manager',
      ],
      popular: false,
      icon: <Building className="text-purple-500" size={24} />,
      color: 'bg-purple-50',
      buttonText: selectedPlan === 'business' ? 'Current Plan' : 'Choose Business',
      buttonVariant: selectedPlan === 'business' ? 'primary' : 'secondary'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: billingPeriod === 'monthly' ? 999 : 9990,
      period: billingPeriod,
      description: 'For mission-critical operations',
      features: [
        'Unlimited users',
        '1TB+ storage',
        'Custom analytics',
        '24/7 priority support',
        'Unlimited API access',
        'Custom integrations',
        'White-label option',
        'SLA guarantee',
        'Dedicated account manager',
        'On-premise deployment',
        'Custom development',
        'Security audit',
      ],
      popular: false,
      icon: <Server className="text-orange-500" size={24} />,
      color: 'bg-orange-50',
      buttonText: 'Contact Sales',
      buttonVariant: 'secondary'
    },
  ];

  const totalSpent = invoices.reduce((sum, invoice) => sum + (invoice.status === 'paid' ? invoice.amount : 0), 0);
  const pendingAmount = invoices.reduce((sum, invoice) => sum + (invoice.status === 'pending' ? invoice.amount : 0), 0);
  const nextPaymentDate = '2025-02-15';
  const currentPlan = plans.find(p => p.id === selectedPlan);

  const handlePlanSelect = (planId: string) => {
    if (planId === 'enterprise') {
      alert('Please contact sales for enterprise pricing');
      return;
    }
    setSelectedPlan(planId);
    alert(`Plan updated to ${planId.toUpperCase()}`);
  };

  const handleDownloadInvoice = (invoiceNumber: string) => {
    alert(`Downloading invoice ${invoiceNumber}...`);
  };

  const handleViewInvoice = (invoiceId: string) => {
    setShowInvoiceModal(invoiceId);
  };

  const handlePaymentMethodUpdate = () => {
    setShowCardForm(true);
  };

  const handleAddPaymentMethod = () => {
    // In real app, you would integrate with Stripe or other payment processor
    alert('Redirecting to payment method setup...');
  };

  const handleSetDefaultPayment = (methodId: string) => {
    setPaymentMethods(prev => prev.map(method => ({
      ...method,
      isDefault: method.id === methodId
    })));
    alert('Default payment method updated');
  };

  const handleRemovePaymentMethod = (methodId: string) => {
    const method = paymentMethods.find(m => m.id === methodId);
    if (method?.isDefault) {
      alert('Cannot remove default payment method');
      return;
    }
    if (confirm('Remove this payment method?')) {
      setPaymentMethods(prev => prev.filter(m => m.id !== methodId));
    }
  };

  const handleBillingPeriodToggle = () => {
    setBillingPeriod(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Invoice['status']) => {
    switch (status) {
      case 'paid': return <CheckCircle size={16} className="text-green-500" />;
      case 'pending': return <Clock size={16} className="text-yellow-500" />;
      case 'overdue': return <AlertCircle size={16} className="text-red-500" />;
      case 'refunded': return <RefreshCw size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  const renderPaymentMethod = (method: PaymentMethod) => (
    <div key={method.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <CreditCard size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 capitalize">
              {method.brand} •••• {method.last4}
            </p>
            <p className="text-sm text-gray-500">
              Expires {method.expiry}
              {method.isDefault && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                  Default
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {method.isDefault ? (
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Default
            </span>
          ) : (
            <button
              onClick={() => handleSetDefaultPayment(method.id)}
              className="px-3 py-1 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
            >
              Set as Default
            </button>
          )}
          <button
            onClick={() => handleRemovePaymentMethod(method.id)}
            className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <AlertCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Plans</h1>
          <p className="text-gray-600">Manage your subscription and payment methods</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Receipt size={16} />
            Download All Invoices
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Settings size={16} />
            Billing Settings
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Plan</p>
              <p className="text-xl font-bold text-gray-900">{currentPlan?.name}</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            ${currentPlan?.price}
            <span className="text-sm font-normal text-gray-500">/{billingPeriod}</span>
          </p>
          <button 
            onClick={() => setShowCardForm(true)}
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
          >
            Manage Plan
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Payment</p>
              <p className="text-xl font-bold text-gray-900">${currentPlan?.price}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Due: {new Date(nextPaymentDate).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {invoices.filter(i => i.status === 'paid').length} paid invoices
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="text-orange-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-xl font-bold text-gray-900">${pendingAmount.toFixed(2)}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {invoices.filter(i => i.status === 'pending').length} pending payments
          </p>
        </div>
      </div>

      {/* Plan Comparison & Selection */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Choose Your Plan</h3>
            <p className="text-sm text-gray-500">Select the plan that fits your needs</p>
          </div>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={handleBillingPeriodToggle}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-green-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border-2 rounded-xl p-6 relative transition-all ${
                plan.popular
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${plan.color}`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-3xl font-bold text-gray-900">
                    ${plan.price}
                    <span className="text-sm font-normal text-gray-500">/{plan.period}</span>
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                } ${
                  selectedPlan === plan.id && 'ring-2 ring-blue-500 ring-offset-2'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Usage & Limits</h3>
            <p className="text-sm text-gray-500">Track your current usage against plan limits</p>
          </div>
          <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
            View detailed usage
            <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usageMetrics.map((metric) => (
            <div
              key={metric.name}
              className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
              onClick={() => setShowUsageDetails(showUsageDetails === metric.name ? null : metric.name)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {metric.icon}
                  <span className="font-medium text-gray-900">{metric.name}</span>
                </div>
                <ChevronDown 
                  size={16} 
                  className={`text-gray-400 transition-transform ${
                    showUsageDetails === metric.name ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              <div className="mb-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Used</span>
                  <span className="font-medium text-gray-900">
                    {metric.current} / {metric.limit} {metric.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${metric.color} transition-all`}
                    style={{ width: `${(metric.current / metric.limit) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-xs text-gray-500">
                {((metric.current / metric.limit) * 100).toFixed(0)}% of limit used
              </p>
              
              {showUsageDetails === metric.name && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Upgrade your plan to increase your {metric.name.toLowerCase()} limits.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
            <p className="text-sm text-gray-500">Manage your payment methods and billing</p>
          </div>
          <button
            onClick={handleAddPaymentMethod}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <CreditCard size={16} />
            Add Payment Method
          </button>
        </div>
        
        <div className="space-y-4">
          {paymentMethods.map(renderPaymentMethod)}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium text-gray-900">Billing Address</h4>
              <p className="text-sm text-gray-600 mt-1">
                123 Business Street<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                Update Address
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                View Tax Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
            <p className="text-sm text-gray-500">View and download past invoices</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Printer size={16} />
              Print All
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Invoice #</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Amount</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <p className="font-medium text-gray-900">{invoice.number}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm text-gray-900">
                      {new Date(invoice.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm text-gray-900">{invoice.description}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-semibold text-gray-900">${invoice.amount.toFixed(2)}</p>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(invoice.status)}
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(invoice.status)}`}>
                        {invoice.status.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewInvoice(invoice.id)}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors"
                      >
                        <Eye size={14} />
                        View
                      </button>
                      <button
                        onClick={() => handleDownloadInvoice(invoice.number)}
                        className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors"
                      >
                        <Download size={14} />
                        Download
                      </button>
                      <button
                        onClick={() => alert('Share invoice ' + invoice.number)}
                        className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {invoices.length} of {invoices.length} invoices
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            Load More
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Billing FAQs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h4>
              <p className="text-sm text-gray-600">
                Yes, you can change your plan at any time. The new plan will be effective immediately, and you'll be charged or credited the difference pro-rated for the remaining billing period.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-gray-600">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How do I get a receipt for my payment?</h4>
              <p className="text-sm text-gray-600">
                Receipts are automatically generated for each payment and available in your billing history. You can download them as PDFs anytime.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What happens if I exceed my plan limits?</h4>
              <p className="text-sm text-gray-600">
                We'll notify you when you're approaching your limits. If you exceed them, we'll automatically upgrade you to the next plan tier to ensure uninterrupted service.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>

      {/* Card Update Modal */}
      {showCardForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Update Payment Method</h3>
                <button
                  onClick={() => setShowCardForm(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t">
                  <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Update Card
                  </button>
                  <button
                    onClick={() => setShowCardForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Detail Modal */}
      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Invoice Details</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownloadInvoice(showInvoiceModal)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button
                    onClick={() => setShowInvoiceModal(null)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
              </div>
              
              {(() => {
                const invoice = invoices.find(i => i.id === showInvoiceModal);
                if (!invoice) return null;
                
                return (
                  <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{invoice.number}</h4>
                        <p className="text-gray-600">{invoice.description}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 text-right">
                        <div className="flex items-center gap-2 justify-end mb-2">
                          {getStatusIcon(invoice.status)}
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(invoice.status)}`}>
                            {invoice.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">${invoice.amount.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Billed To</h5>
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <p className="font-medium text-gray-900">Your Company Inc.</p>
                          <p className="text-sm text-gray-600 mt-1">
                            123 Business Street<br />
                            San Francisco, CA 94107<br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Invoice Details</h5>
                        <div className="space-y-2 p-4 border border-gray-200 rounded-lg">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Invoice Date:</span>
                            <span className="font-medium">{invoice.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Due Date:</span>
                            <span className="font-medium">{invoice.dueDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Payment Method:</span>
                            <span className="font-medium">•••• 4242 (Visa)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Invoice Items</h5>
                      <div className="overflow-x-auto border border-gray-200 rounded-lg">
                        <table className="w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Quantity</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Unit Price</th>
                              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Total</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {invoice.items.map((item, idx) => (
                              <tr key={idx}>
                                <td className="py-3 px-4">{item.name}</td>
                                <td className="py-3 px-4">{item.quantity}</td>
                                <td className="py-3 px-4">${item.price.toFixed(2)}</td>
                                <td className="py-3 px-4">${item.total.toFixed(2)}</td>
                              </tr>
                            ))}
                            <tr className="bg-gray-50">
                              <td colSpan={3} className="py-3 px-4 text-right font-semibold">Total</td>
                              <td className="py-3 px-4 font-bold text-gray-900">${invoice.amount.toFixed(2)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


// ========== SettingsPage.tsx ==========
export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState({
    security: true,
    marketing: false,
    updates: true,
    weeklyReports: true,
  });
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    position: 'Product Manager',
    timezone: 'America/New_York',
    language: 'English',
    bio: 'Product manager with 8+ years of experience in SaaS products.',
  });

  const tabs = [
    { id: 'general', label: 'General', icon: <SettingsIcon size={18} /> },
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'security', label: 'Security', icon: <Shield size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
    { id: 'integrations', label: 'Integrations', icon: <Globe size={18} /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard size={18} /> },
    { id: 'advanced', label: 'Advanced', icon: <Terminal size={18} /> },
  ];

  const timezones = [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Singapore',
    'Australia/Sydney',
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: "Russia"},
    { code: 'uz', name: "Uzbekistan"},
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },

  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Workspace Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workspace Name
            </label>
            <input
              type="text"
              defaultValue="TechCorp Workspace"
              className="w-full px-4 py-2 border text-black  border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workspace URL
            </label>
            <input
              type="text"
              defaultValue="techcorp"
              className="w-full px-4 py-2 border text-black  border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Time & Region</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select
              value={profileData.timezone}
              onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
              className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {timezones.map(tz => (
                <option key={tz} value={tz}>{tz}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Format
            </label>
            <select className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Export All Data</p>
              <p className="text-sm text-gray-500">Download all your data in JSON format</p>
            </div>
            <button className="flex items-center text-black gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={16} />
              Export
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Clear Cache</p>
              <p className="text-sm text-gray-500">Remove temporary files and data</p>
            </div>
            <button className="px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
              Clear Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <button className="absolute bottom-0 text-black right-0 p-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <Upload size={16} />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{profileData.firstName} {profileData.lastName}</h3>
          <p className="text-gray-600">{profileData.position} at {profileData.company}</p>
          <p className="text-sm text-gray-500 mt-2">Member since January 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={profileData.firstName}
            onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={profileData.lastName}
            onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={profileData.email}
            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={profileData.phone}
            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company
          </label>
          <input
            type="text"
            value={profileData.company}
            onChange={(e) => setProfileData({...profileData, company: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Position
          </label>
          <input
            type="text"
            value={profileData.position}
            onChange={(e) => setProfileData({...profileData, position: e.target.value})}
            className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bio
        </label>
        <textarea
          value={profileData.bio}
          onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
          rows={4}
          className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Language
        </label>
        <select
          value={profileData.language}
          onChange={(e) => setProfileData({...profileData, language: e.target.value})}
          className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.name}>{lang.name}</option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h4>
        <div className="space-y-4">
          {[
            { id: 'security', label: 'Security alerts', description: 'Important security notifications' },
            { id: 'marketing', label: 'Marketing emails', description: 'Product updates and offers' },
            { id: 'updates', label: 'Product updates', description: 'New features and improvements' },
            { id: 'weeklyReports', label: 'Weekly reports', description: 'Summary of your weekly activity' },
          ].map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <button
                onClick={() => setEmailNotifications(prev => ({
                  ...prev,
                  [item.id]: !prev[item.id as keyof typeof emailNotifications]
                }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  emailNotifications[item.id as keyof typeof emailNotifications] ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  emailNotifications[item.id as keyof typeof emailNotifications] ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Desktop Notifications</p>
                <p className="text-sm text-gray-500">Receive notifications on your desktop</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Smartphone size={20} className="text-gray-500" />
              <div>
                <p className="font-medium text-gray-900">Mobile Push Notifications</p>
                <p className="text-sm text-gray-500">Receive notifications on your mobile device</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 size={16} className="text-gray-500" />
              <p className="font-medium text-gray-900">Sound</p>
            </div>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-black">
              <option>Default</option>
              <option>Chime</option>
              <option>Bell</option>
              <option>None</option>
            </select>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-gray-500" />
              <p className="font-medium text-gray-900">Quiet Hours</p>
            </div>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-black">
              <option>Disabled</option>
              <option>10 PM - 8 AM</option>
              <option>9 PM - 7 AM</option>
              <option>Custom...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Password</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h4>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Key size={20} className="text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">2FA via Authenticator App</p>
              <p className="text-sm text-gray-500">Use Google Authenticator or similar</p>
            </div>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              twoFactorEnabled ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h4>
        <div className="space-y-3">
          {[
            { device: 'MacBook Pro', location: 'San Francisco, US', time: 'Currently active', current: true },
            { device: 'iPhone 14', location: 'New York, US', time: '2 hours ago', current: false },
            { device: 'Windows Desktop', location: 'London, UK', time: '1 day ago', current: false },
          ].map((session, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {session.device.includes('Mac') ? '💻' : session.device.includes('iPhone') ? '📱' : '🖥️'}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{session.device}</p>
                  <p className="text-sm text-gray-500">{session.location} • {session.time}</p>
                </div>
              </div>
              {session.current ? (
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  Current
                </span>
              ) : (
                <button className="text-sm text-red-600 hover:text-red-700">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Danger Zone</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
            <div>
              <p className="font-medium text-gray-900">Delete Account</p>
              <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Theme</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setDarkMode(false)}
            className={`p-6 border-2 rounded-xl transition-all ${
              !darkMode ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="p-3 bg-white rounded-lg mb-3">
                <Sun size={24} className="text-yellow-500" />
              </div>
              <span className="font-medium text-gray-900">Light Mode</span>
              <span className="text-sm text-gray-500 mt-1">Clean and bright interface</span>
            </div>
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`p-6 border-2 rounded-xl transition-all ${
              darkMode ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center">
              <div className="p-3 bg-gray-800 rounded-lg mb-3">
                <Moon size={24} className="text-yellow-300" />
              </div>
              <span className="font-medium text-gray-900">Dark Mode</span>
              <span className="text-sm text-gray-500 mt-1">Easy on the eyes</span>
            </div>
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Font Size</h4>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Small</span>
          <input
            type="range"
            min="12"
            max="20"
            defaultValue="16"
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500">Large</span>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Color Scheme</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Blue', color: 'bg-blue-500' },
            { name: 'Green', color: 'bg-green-500' },
            { name: 'Purple', color: 'bg-purple-500' },
            { name: 'Orange', color: 'bg-orange-500' },
          ].map(scheme => (
            <button
              key={scheme.name}
              className="flex flex-col items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full ${scheme.color}`}></div>
              <span className="text-sm font-medium text-gray-900">{scheme.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Compact Mode</h4>
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Compact Layout</p>
            <p className="text-sm text-gray-500">Reduce spacing for more content density</p>
          </div>
          <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
            <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderIntegrationsSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Connected Apps</h4>
        <div className="space-y-3">
          {[
            { name: 'Slack', icon: '💬', status: 'connected', description: 'Team communication' },
            { name: 'Google Drive', icon: '📁', status: 'connected', description: 'Cloud storage' },
            { name: 'GitHub', icon: '💻', status: 'pending', description: 'Code repository' },
            { name: 'Stripe', icon: '💳', status: 'disconnected', description: 'Payment processing' },
          ].map(app => (
            <div key={app.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{app.icon}</div>
                <div>
                  <p className="font-medium text-gray-900">{app.name}</p>
                  <p className="text-sm text-gray-500">{app.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  app.status === 'connected' ? 'bg-green-100 text-green-800' :
                  app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {app.status}
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical size={16} className="text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">API Keys</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Production API Key</p>
              <p className="text-sm text-gray-500">••••••••••••••••••••••••••••••••</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Copy size={16} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Eye size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
          <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors">
            + Generate New API Key
          </button>
        </div>
      </div>
    </div>
  );

  const renderBillingSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h4>
        <div className="p-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">Professional Plan</p>
              <p className="text-2xl font-bold">$299/month</p>
            </div>
            <span className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-full">
              Active
            </span>
          </div>
          <p className="text-sm opacity-90 mb-4">Next billing date: Feb 15, 2025</p>
          <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Manage Subscription
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h4>
        <div className="space-y-3">
          {[
            { id: 'INV-001', date: 'Jan 15, 2025', amount: '$299.00', status: 'Paid' },
            { id: 'INV-002', date: 'Dec 15, 2024', amount: '$299.00', status: 'Paid' },
            { id: 'INV-003', date: 'Nov 15, 2024', amount: '$299.00', status: 'Paid' },
          ].map(invoice => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{invoice.id}</p>
                <p className="text-sm text-gray-500">{invoice.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-900">{invoice.amount}</p>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  {invoice.status}
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdvancedSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Developer Options</h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Developer Mode</p>
              <p className="text-sm text-gray-500">Enable advanced debugging features</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Beta Features</p>
              <p className="text-sm text-gray-500">Access experimental features</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-500">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Data & Storage</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cache Duration
            </label>
            <select className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>1 hour</option>
              <option>6 hours</option>
              <option>24 hours</option>
              <option>1 week</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Log Level
            </label>
            <select className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Error</option>
              <option>Warning</option>
              <option>Info</option>
              <option>Debug</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Reset Options</h4>
        <div className="space-y-3">
          <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
            <p className="font-medium text-gray-900">Reset All Preferences</p>
            <p className="text-sm text-gray-500">Restore all settings to default</p>
          </button>
          <button className="w-full text-left p-4 border border-red-200 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
            <p className="font-medium text-red-900">Factory Reset</p>
            <p className="text-sm text-red-700">Clear all data and reset application</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'profile': return renderProfileSettings();
      case 'notifications': return renderNotificationSettings();
      case 'security': return renderSecuritySettings();
      case 'appearance': return renderAppearanceSettings();
      case 'integrations': return renderIntegrationsSettings();
      case 'billing': return renderBillingSettings();
      case 'advanced': return renderAdvancedSettings();
      default: return renderGeneralSettings();
    }
  };

  const MoreVertical = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );

  const WebhookSettings = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">Webhook Settings</h4>
      {children}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex gap-1 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {tabs.find(t => t.id === activeTab)?.label} Settings
              </h3>
              <p className="text-gray-600 mt-1">
                Configure your {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} preferences
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Save size={16} />
              Save Changes
            </button>
          </div>
          
          {renderContent()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Shield className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Security Score</p>
              <p className="text-2xl font-bold text-gray-900">92/100</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Database className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Storage Used</p>
              <p className="text-2xl font-bold text-gray-900">42%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Globe className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Integrations</p>
              <p className="text-2xl font-bold text-gray-900">3/8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// ========== SupportPage.tsx ==========

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface Article {
  title: string;
  description: string;
  category: string;
  readTime: string;
  url: string;
}

export const SupportPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: 'all', label: 'All Topics', icon: <Globe size={16} /> },
    { id: 'account', label: 'Account', icon: <Users size={16} /> },
    { id: 'billing', label: 'Billing', icon: <Shield size={16} /> },
    { id: 'features', label: 'Features', icon: <Zap size={16} /> },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: <AlertCircle size={16} /> },
    { id: 'api', label: 'API & Developers', icon: <FileText size={16} /> },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to Settings > Security > Password to reset your password. You\'ll receive an email with a reset link.',
      category: 'account'
    },
    {
      question: 'How can I upgrade my subscription plan?',
      answer: 'Navigate to Billing > Plans and select the plan you want to upgrade to. Your new plan will be effective immediately.',
      category: 'billing'
    },
    {
      question: 'How do I invite team members?',
      answer: 'Go to Users > Add User and enter their email address. They\'ll receive an invitation to join your workspace.',
      category: 'account'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.',
      category: 'billing'
    },
    {
      question: 'How do I export my data?',
      answer: 'You can export your data from Settings > General > Data Management. Data is exported in JSON format.',
      category: 'features'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, we have mobile apps available for both iOS and Android. You can download them from the App Store or Google Play.',
      category: 'features'
    },
    {
      question: 'How do I integrate with third-party apps?',
      answer: 'Navigate to Settings > Integrations to connect with supported third-party apps. API documentation is available for custom integrations.',
      category: 'api'
    },
    {
      question: 'What should I do if I encounter a bug?',
      answer: 'Please report bugs through the Help > Report a Bug section or contact support with detailed information about the issue.',
      category: 'troubleshooting'
    },
  ];

  const articles: Article[] = [
    {
      title: 'Getting Started Guide',
      description: 'Learn how to set up your account and start using our platform effectively.',
      category: 'account',
      readTime: '5 min',
      url: '#'
    },
    {
      title: 'Advanced Analytics Tutorial',
      description: 'Master our analytics features to gain insights from your data.',
      category: 'features',
      readTime: '8 min',
      url: '#'
    },
    {
      title: 'API Documentation',
      description: 'Complete guide to our REST API for developers.',
      category: 'api',
      readTime: '15 min',
      url: '#'
    },
    {
      title: 'Billing and Subscription FAQ',
      description: 'Everything you need to know about billing, invoices, and subscriptions.',
      category: 'billing',
      readTime: '6 min',
      url: '#'
    },
    {
      title: 'Security Best Practices',
      description: 'Learn how to secure your account and data.',
      category: 'account',
      readTime: '7 min',
      url: '#'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems.',
      category: 'troubleshooting',
      readTime: '10 min',
      url: '#'
    },
  ];

  const supportChannels = [
    {
      icon: <MessageSquare className="text-blue-500" size={24} />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: '24/7',
      responseTime: '< 5 min',
      action: 'Start Chat'
    },
    {
      icon: <Mail className="text-green-500" size={24} />,
      title: 'Email Support',
      description: 'Send us an email',
      availability: '24/7',
      responseTime: '< 24 hours',
      action: 'Send Email'
    },
    {
      icon: <Phone className="text-purple-500" size={24} />,
      title: 'Phone Support',
      description: 'Call our support line',
      availability: '9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: <Video className="text-orange-500" size={24} />,
      title: 'Video Call',
      description: 'Schedule a video meeting',
      availability: 'By appointment',
      responseTime: 'Schedule',
      action: 'Schedule'
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your support system
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setContactMessage('');
    setContactEmail('');
    alert('Support ticket submitted successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600">Get help, browse documentation, and contact support</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-black border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Documentation
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <LifeBuoy size={16} />
            Get Help
          </button>
        </div>
      </div>

      {/* Quick Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportChannels.map((channel, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              {channel.icon}
              <div>
                <h3 className="font-semibold text-gray-900">{channel.title}</h3>
                <p className="text-sm text-gray-500">{channel.description}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Availability:</span>
                <span className="font-medium text-gray-900">{channel.availability}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Response Time:</span>
                <span className="font-medium text-gray-900">{channel.responseTime}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              {channel.action}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - FAQ */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              {filteredFaqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <button
                    className="w-full text-left p-4 flex items-center justify-between"
                    onClick={() => {
                      const answer = document.getElementById(`answer-${idx}`);
                      if (answer) {
                        answer.classList.toggle('hidden');
                      }
                    }}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                  <div id={`answer-${idx}`} className="hidden p-4 pt-0">
                    <p className="text-gray-600">{faq.answer}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                        <ThumbsUp size={14} />
                        Helpful
                      </button>
                      <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-700">
                        <ThumbsDown size={14} />
                        Not helpful
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Articles */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Help Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles.map((article, idx) => (
                <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime} read</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
                      Read Article
                      <ExternalLink size={14} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <BookOpen size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact & Resources */}
        <div className="space-y-6">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Describe your issue..."
                  rows={4}
                  required
                  className="w-full px-4 py-2 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Submitted!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit Ticket
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Support Status */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">All Systems Operational</p>
                    <p className="text-sm text-gray-500">Last updated: Just now</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">API Status</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Database</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Payment Processing</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { icon: <FileText size={16} />, label: 'Documentation', url: '#' },
                { icon: <BookOpen size={16} />, label: 'Knowledge Base', url: '#' },
                { icon: <Video size={16} />, label: 'Video Tutorials', url: '#' },
                { icon: <Users size={16} />, label: 'Community Forum', url: '#' },
                { icon: <Zap size={16} />, label: 'Feature Requests', url: '#' },
                { icon: <Bell size={16} />, label: 'System Status', url: '#' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-500 group-hover:text-blue-500">
                    {link.icon}
                  </span>
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">
                    {link.label}
                  </span>
                  <ChevronRight size={16} className="ml-auto text-gray-400 group-hover:text-blue-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Response Time</p>
              <p className="text-2xl font-bold text-gray-900">2.4 hours</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Resolution Rate</p>
              <p className="text-2xl font-bold text-gray-900">98%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ThumbsUp className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-600">Satisfaction Score</p>
              <p className="text-2xl font-bold text-gray-900">4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
