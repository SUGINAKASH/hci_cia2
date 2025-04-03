import React from 'react';
import { BarChart, TrendingUp, TrendingDown } from 'lucide-react';

export default function ProjectMetrics() {
  const projects = [
    { name: 'Mobile App', success: 85, failure: 15 },
    { name: 'Web Platform', success: 92, failure: 8 },
    { name: 'API Integration', success: 78, failure: 22 },
    { name: 'Database Migration', success: 95, failure: 5 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Project Success Rates</h2>
        <BarChart className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">{project.name}</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.success}%</span>
                </div>
                <div className="flex items-center text-red-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">{project.failure}%</span>
                </div>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${project.success}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}