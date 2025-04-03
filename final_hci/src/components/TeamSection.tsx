import React from 'react';
import { Users, Folder } from 'lucide-react';

export default function TeamSection() {
  const teams = [
    {
      name: 'Frontend Team',
      projects: ['User Dashboard', 'Mobile App UI', 'Design System'],
      members: 5,
    },
    {
      name: 'Backend Team',
      projects: ['API Development', 'Database Optimization', 'Authentication Service'],
      members: 4,
    },
    {
      name: 'Design Team',
      projects: ['Brand Guidelines', 'UI Components', 'Marketing Materials'],
      members: 3,
    },
    {
      name: 'QA Team',
      projects: ['Automated Testing', 'Performance Testing', 'User Acceptance'],
      members: 3,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Teams & Projects</h2>
        <Users className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-6">
        {teams.map((team) => (
          <div key={team.name} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="font-medium text-gray-900">{team.name}</h3>
              </div>
              <span className="text-sm text-gray-500">{team.members} members</span>
            </div>

            <div className="space-y-2">
              {team.projects.map((project) => (
                <div
                  key={project}
                  className="flex items-center p-2 bg-gray-50 rounded-lg"
                >
                  <Folder className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">{project}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}