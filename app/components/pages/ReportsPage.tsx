import React from "react";

export const ReportsPage: React.FC = () => {
  const reports = [
    { name: 'Monthly Sales Report', date: '2025-01-01', type: 'Sales', status: 'Ready' },
    { name: 'Quarterly Revenue', date: '2024-12-31', type: 'Finance', status: 'Ready' },
    { name: 'User Activity Report', date: '2025-01-15', type: 'Analytics', status: 'Processing' },
    { name: 'Inventory Summary', date: '2025-01-10', type: 'Inventory', status: 'Ready' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
            <p className="text-sm text-gray-500">Generate and download reports</p>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Generate New Report
          </button>
        </div>

        <div className="space-y-3">
          {reports.map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div>
                <h4 className="font-semibold text-gray-900">{report.name}</h4>
                <p className="text-sm text-gray-500">{report.type} • {report.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  report.status === 'Ready' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
                <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;