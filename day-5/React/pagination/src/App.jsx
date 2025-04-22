import React from 'react';
import { PaginatedList } from './components/PaginatedList';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div>
      <div>
        <div>
          <PaginatedList />
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;