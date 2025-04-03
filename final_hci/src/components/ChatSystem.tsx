import React, { useState } from 'react';
import { MessageSquare, Search, Send } from 'lucide-react';

export default function ChatSystem() {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Team Chat</h2>
          <MessageSquare className="h-5 w-5 text-gray-500" />
        </div>
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="h-8 w-8 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">mark lol</span>
              <span className="text-sm text-gray-500">10:30 AM</span>
            </div>
            <p className="mt-1 text-gray-700">Hey team, how's the new feature coming along?</p>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}