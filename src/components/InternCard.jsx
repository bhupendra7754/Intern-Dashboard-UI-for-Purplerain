import React, { useState } from 'react';

const statusColors = {
  'Onboarding': 'bg-yellow-500',
  'Completed': 'bg-green-500',
  'Pending Docs': 'bg-red-500'
};

function InternCard({ intern }) {
  const [status, setStatus] = useState(intern.status);

  // ✅ File state
  const [files, setFiles] = useState({
    resume: '',
    id: '',
    agreement: '',
    joining: ''
  });

  const handleFileChange = (e, type) => {
    const fileName = e.target.files[0]?.name || '';
    setFiles(prev => ({ ...prev, [type]: fileName }));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{intern.name}</h2>
        <span className={`text-white text-sm px-2 py-1 rounded-full ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      <p className="text-sm"><strong>Email:</strong> {intern.email}</p>
      <p className="text-sm"><strong>Department:</strong> {intern.department}</p>

      {/* 📂 File Uploads */}
      <div className="mt-4 space-y-3 text-sm">
        {/* Resume */}
        <div>
          <label className='font-semibold text-gray-870'>Resume:</label>
          <input type="file" onChange={(e) => handleFileChange(e, 'resume')} className="block mt-1" />
          {files.resume && <p className="text-gray-600">📄 {files.resume}</p>}
        </div>

        {/* Government ID */}
        <div>
          <label className='font-semibold text-gray-870'>Government ID:</label>
          <input type="file" onChange={(e) => handleFileChange(e, 'id')} className="block mt-1" />
          {files.id && <p className="text-gray-600">📄 {files.id}</p>}
        </div>

        {/* Offet latter */}
        <div>
          <label className='font-semibold text-gray-870'>Offer Latter:</label>
          <input type="file" onChange={(e) => handleFileChange(e, 'agreement')} className="block mt-1" />
          {files.agreement && <p className="text-gray-600">📄 {files.agreement}</p>}
        </div>

        {/* Joining Letter */}
        <div>
          <label className='font-semibold text-gray-870'>Joining Letter:</label>
          <input type="file" onChange={(e) => handleFileChange(e, 'joining')} className="block mt-1" />
          {files.joining && <p className="text-gray-600">📄 {files.joining}</p>}
        </div>
      </div>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mt-4 block w-full p-2 border border-gray-300 rounded"
      >
        <option value="Onboarding">Onboarding</option>
        <option value="Completed">Completed</option>
        <option value="Pending Docs">Pending Docs</option>
      </select>
    </div>
  );
}

export default InternCard;
