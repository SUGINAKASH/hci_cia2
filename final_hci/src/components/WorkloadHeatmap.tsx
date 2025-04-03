import React from 'react';
import { Users } from 'lucide-react';

export default function WorkloadHeatmap() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const teams = ['Frontend', 'Backend', 'Design', 'QA'];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Team Workload</h2>
        <Users className="h-5 w-5 text-gray-500" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              {days.map((day) => (
                <th key={day} className="px-4 py-2 text-sm font-medium text-gray-500">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team}>
                <td className="px-4 py-2 text-sm font-medium text-gray-900">{team}</td>
                {days.map((day) => {
                  const load = Math.random();
                  let bgColor = 'bg-green-100';
                  if (load > 0.7) bgColor = 'bg-red-100';
                  else if (load > 0.4) bgColor = 'bg-yellow-100';

                  return (
                    <td key={`${team}-${day}`} className="px-4 py-2">
                      <div className={`w-full h-8 ${bgColor} rounded`}></div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}