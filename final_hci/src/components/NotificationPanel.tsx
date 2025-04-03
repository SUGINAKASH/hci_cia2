import React from 'react';
import { Bell, Calendar, Clock, MessageSquare } from 'lucide-react';

export default function NotificationPanel() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg">
          <div className="p-2 bg-indigo-100 rounded-full">
            <MessageSquare className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">@sarah mentioned you in Design Team</p>
            <p className="text-sm text-gray-500 mt-1">Can you review the latest mockups?</p>
            <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
          <div className="p-2 bg-orange-100 rounded-full">
            <Calendar className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Team Meeting</p>
            <p className="text-sm text-gray-500 mt-1">Daily standup in 30 minutes</p>
            <p className="text-xs text-gray-400 mt-1">15 minutes ago</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
          <div className="p-2 bg-red-100 rounded-full">
            <Clock className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Deadline Approaching</p>
            <p className="text-sm text-gray-500 mt-1">Project submission due in 2 days</p>
            <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}