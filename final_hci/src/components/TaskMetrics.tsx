import React from 'react';
import { BarChart, CheckCircle, Clock } from 'lucide-react';

export default function TaskMetrics() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Task Metrics</h2>
        <BarChart className="h-5 w-5 text-gray-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-indigo-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-indigo-600">Pending Tasks</p>
              <p className="text-2xl font-semibold text-indigo-900">24</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>High Priority</span>
              <span>8</span>
            </div>
            <div className="w-full bg-indigo-200 rounded-full h-2 mt-1">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '33%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">Completed Tasks</p>
              <p className="text-2xl font-semibold text-green-900">156</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>This Week</span>
              <span>32</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-1">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}