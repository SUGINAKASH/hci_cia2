import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';

export default function CalendarView() {
  const [currentMonth] = useState('March 2025');

  const events = [
    {
      id: 1,
      title: 'Team Standup',
      time: '10:00 AM',
      attendees: 8,
      type: 'daily',
    },
    {
      id: 2,
      title: 'Project Review',
      time: '2:00 PM',
      attendees: 12,
      type: 'weekly',
    },
    {
      id: 3,
      title: 'Client Meeting',
      time: '4:30 PM',
      attendees: 5,
      type: 'special',
    },
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <CalendarIcon className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">{currentMonth}</h2>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
            Today
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
            Month
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-md">
            Week
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekdays.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <div
              key={day}
              className={`aspect-square p-2 border rounded-lg ${
                day === 15
                  ? 'bg-indigo-50 border-indigo-200'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span
                className={`text-sm ${
                  day === 15 ? 'text-indigo-600 font-medium' : 'text-gray-700'
                }`}
              >
                {day}
              </span>
              {day === 15 && (
                <div className="mt-1">
                  <div className="bg-indigo-600 h-1 w-full rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  event.type === 'daily'
                    ? 'bg-green-100'
                    : event.type === 'weekly'
                    ? 'bg-blue-100'
                    : 'bg-purple-100'
                }`}
              >
                <CalendarIcon
                  className={`h-5 w-5 ${
                    event.type === 'daily'
                      ? 'text-green-600'
                      : event.type === 'weekly'
                      ? 'text-blue-600'
                      : 'text-purple-600'
                  }`}
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <div className="flex items-center space-x-3 mt-1">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            </div>
            <button className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}