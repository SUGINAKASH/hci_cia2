import React, { useState } from 'react';
import { MessageCircle, Users, Search } from 'lucide-react';

export default function MessagingSection() {
  const [activeTab, setActiveTab] = useState('private');

  const tabs = [
    { id: 'private', label: 'Private Messages', icon: MessageCircle },
    { id: 'group', label: 'Group Chats', icon: Users },
  ];

  const dummyChats = [
    { id: 1, name: 'dhina', lastMessage: 'Can you review the latest design?', time: '10:30 AM', unread: 2 },
    { id: 2, name: 'suraj', lastMessage: 'New mockups are ready for review', time: '9:45 AM', unread: 5 },
    { id: 3, name: 'tristan', lastMessage: 'Meeting in 10 minutes', time: 'Yesterday', unread: 0 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg h-[calc(100vh-2rem)]">
      <div className="flex border-b p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-2 rounded-lg mr-4 ${
              activeTab === tab.id
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <tab.icon className="h-5 w-5 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100%-8rem)]">
        {dummyChats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
          >
            <img
              src={`https://images.unsplash.com/photo-${chat.id + 1}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
              alt={chat.name}
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <span className="ml-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}