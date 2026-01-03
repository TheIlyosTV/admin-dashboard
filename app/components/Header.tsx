'use client';

import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Mail, 
  ChevronDown,
  Settings,
  User,
  LogOut,
  Moon,
  Sun,
  Grid,
  Command,
  Plus,
  MessageSquare,
  Maximize2
} from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const notifications = [
    { 
      id: 1, 
      title: 'New Order Received', 
      message: 'Order #12345 from John Doe',
      time: '2 min ago',
      unread: true,
      type: 'order'
    },
    { 
      id: 2, 
      title: 'Payment Successful', 
      message: 'Payment of $234.00 completed',
      time: '15 min ago',
      unread: true,
      type: 'payment'
    },
    { 
      id: 3, 
      title: 'New User Registered', 
      message: 'Jane Smith joined the platform',
      time: '1 hour ago',
      unread: false,
      type: 'user'
    },
    { 
      id: 4, 
      title: 'System Update', 
      message: 'New features are now available',
      time: '3 hours ago',
      unread: false,
      type: 'system'
    },
  ];

  const quickActions = [
    { icon: <Plus size={16} />, label: 'New Product', color: 'text-blue-600' },
    { icon: <User size={16} />, label: 'Add User', color: 'text-green-600' },
    { icon: <MessageSquare size={16} />, label: 'New Message', color: 'text-purple-600' },
    { icon: <Grid size={16} />, label: 'View Reports', color: 'text-orange-600' },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          {/* Menu Button */}
          <button 
            onClick={onMenuClick} 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-black"
            aria-label="Toggle Menu"
          >
            <Menu size={20} />
          </button>

          {/* Search Bar */}
          <div className={`relative hidden md:block transition-all duration-300 ${searchFocused ? 'w-96' : 'w-64'}`}>
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {searchFocused ? <Command size={18} /> : <Search size={18} />}
            </div>
            <input
              type="text"
              placeholder="Search anything... (Ctrl+K)"
              className="pl-10 pr-4 py-2.5 w-full border text-blacke border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            {searchFocused && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  ESC
                </span>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center gap-2 ml-4">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 hover:text-gray-900"
                title={action.label}
              >
                <span className={action.color}>{action.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-600" />}
          </button>

          {/* Fullscreen */}
          <button 
            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Fullscreen"
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                document.documentElement.requestFullscreen();
              }
            }}
          >
            <Maximize2 size={20} className="text-gray-600" />
          </button>

          {/* Messages */}
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            aria-label="Messages"
          >
            <Mail size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={20} className="text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-20 overflow-hidden">
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id}
                        className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer ${
                          notification.unread ? 'bg-blue-50/30' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                          }`} />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900">
                              {notification.title}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200 mx-2" />

          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 hover:bg-gray-100 px-2 py-2 rounded-lg transition-colors"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                A
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
              <ChevronDown size={16} className={`text-gray-600 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Profile Menu Dropdown */}
            {showProfileMenu && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-20 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                        A
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">admin@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
                      <User size={18} className="text-gray-600" />
                      <span className="text-sm text-gray-700">My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left">
                      <Settings size={18} className="text-gray-600" />
                      <span className="text-sm text-gray-700">Settings</span>
                    </button>
                  </div>
                  <div className="border-t border-gray-100 py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left">
                      <LogOut size={18} className="text-red-600" />
                      <span className="text-sm text-red-600 font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;