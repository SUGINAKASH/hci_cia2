import React, { useState } from 'react';
import { 
  BarChart3, MessageSquare, Bell, Users, Calendar, 
  MessageCircle, UserCircle, Bot, Settings, LogOut
} from 'lucide-react';
import TaskMetrics from './TaskMetrics';
import ChatSystem from './ChatSystem';
import NotificationPanel from './NotificationPanel';
import WorkloadHeatmap from './WorkloadHeatmap';
import TeamSection from './TeamSection';
import CalendarView from './CalendarView';
import ProjectMetrics from './ProjectMetrics';
import AiHelpBot from './AiHelpBot';
import MessagingSection from './MessagingSection';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'messages':
        return <MessagingSection />;
      case 'calendar':
        return <CalendarView />;
      case 'team':
        return <TeamSection />;
      case 'notifications':
        return <NotificationPanel fullScreen />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <TaskMetrics />
              <WorkloadHeatmap />
              <ProjectMetrics />
            </div>
            <div className="space-y-8">
              <ChatSystem />
              <NotificationPanel />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <div className="w-20 bg-white shadow-lg flex flex-col items-center py-8">
        <div className="mb-12">
          <BarChart3 className="h-8 w-8 text-indigo-600" />
        </div>
        
        <nav className="flex-1 space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`p-3 rounded-xl transition-all ${
                activeSection === item.id
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-6 w-6" />
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button className="p-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50">
            <Settings className="h-6 w-6" />
          </button>
          <button className="p-3 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50">
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* AI Help Bot */}
      <AiHelpBot />
    </div>
  );
}