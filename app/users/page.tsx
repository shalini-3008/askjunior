import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const NewUserPage = async () => {
  const startTime = Date.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const endTime = Date.now();
 

  return (
    <div className="min-h-screen bg-white p-8">
  <h1 className="text-4xl font-bold text-black text-center mb-10">User Table</h1>
  <div className="overflow-x-auto">
    <table className="w-full bg-gray-100 text-black border border-gray-300 rounded-lg shadow-md">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-4 border-b border-gray-300 text-left">Name</th>
          <th className="p-4 border-b border-gray-300 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="p-4 border-b border-gray-200">{user.name}</td>
            <td className="p-4 border-b border-gray-200">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
   </div>
  );
};

export default NewUserPage;
