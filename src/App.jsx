import React, { useState } from 'react';
import InternCard from './components/InternCard';
import { toast } from 'react-hot-toast';

function App() {
  const [interns, setInterns] = useState([
    {
      id: 1,
      name: 'Ankit Yadav',
      email: 'ankit@example.com',
      department: 'Frontend',
      status: 'Onboarding',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    status: 'Onboarding',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddIntern = () => {
    const newIntern = {
      id: Date.now(),
      ...formData,
    };
    setInterns([...interns, newIntern]);
    setFormData({ name: '', email: '', department: '', status: 'Onboarding' });
  
    toast.success('Intern added successfully!');
  };

  return (
   
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-200 p-4">
    
      <h1 className="text-3xl font-bold mb-6 text-center ">Intern Profile Management</h1>

      {/* 👇 Add Intern Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Intern</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border mb-2 rounded"
        >
          <option>Onboarding</option>
          <option>Completed</option>
          <option>Pending Docs</option>
        </select>
        <button
          onClick={handleAddIntern}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Add Intern
        </button>
      </div>

      {/* Intern Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interns.map((intern) => (
          <InternCard key={intern.id} intern={intern} />
        ))}
      </div>
    </div>
  );
}

export default App;
;