import React, { useState } from 'react';
import { Search, UserPlus, Save, Trash2, X } from 'lucide-react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const resetForm = () => {
    setSelectedUser(null);
    setFirstName('');
    setLastName('');
  };

  const handleCreate = () => {
    if (firstName.trim() && lastName.trim()) {
      const newUser = {
        id: crypto.randomUUID(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      };
      setUsers([...users, newUser]);
      resetForm();
    }
  };

  const handleUpdate = () => {
    if (selectedUser && firstName.trim() && lastName.trim()) {
      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, firstName: firstName.trim(), lastName: lastName.trim() }
          : user
      ));
      resetForm();
    }
  };

  const handleDelete = () => {
    if (selectedUser) {
      setUsers(users.filter(user => user.id !== selectedUser.id));
      resetForm();
    }
  };

  const handleSelect = (user) => {
    setSelectedUser(user);
    setFirstName(user.firstName);
    setLastName(user.lastName);
  };

  const filteredUsers = users.filter(user => 
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold mb-4">User Management</h1>
        
        <div className="mb-4">
          <div className="flex items-center border rounded">
            <Search className="ml-2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border rounded">
            <div className="p-2 border-b bg-gray-50">
              <h2 className="font-medium">Users</h2>
            </div>
            <div className="divide-y max-h-64 overflow-y-auto">
              {filteredUsers.map(user => (
                <button
                  key={user.id}
                  onClick={() => handleSelect(user)}
                  className={`w-full p-2 text-left hover:bg-gray-50 ${
                    selectedUser?.id === user.id ? 'bg-blue-50' : ''
                  }`}
                >
                  {user.firstName} {user.lastName}
                </button>
              ))}
              {filteredUsers.length === 0 && (
                <div className="p-2 text-gray-500 italic">
                  No users found
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handleCreate}
                disabled={!firstName || !lastName}
                className="flex items-center px-3 py-1.5 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
              >
                <UserPlus className="h-4 w-4 mr-1" />
                Create
              </button>
              <button
                onClick={handleUpdate}
                disabled={!selectedUser || !firstName || !lastName}
                className="flex items-center px-3 py-1.5 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
              >
                <Save className="h-4 w-4 mr-1" />
                Update
              </button>
              <button
                onClick={handleDelete}
                disabled={!selectedUser}
                className="flex items-center px-3 py-1.5 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Delete
              </button>
              <button
                onClick={resetForm}
                disabled={!selectedUser}
                className="flex items-center px-3 py-1.5 border rounded hover:bg-gray-50 disabled:opacity-50"
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;