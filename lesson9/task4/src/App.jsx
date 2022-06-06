import React from 'react';
import UsersList from './UsersList';

const users = [
  {
    name: 'Bob',
    age: 17,
    id: 'user-id-1',
  },
  {
    name: 'Mary',
    age: 47,
    id: 'user-id-2',
  },
  {
    name: 'Jane',
    age: 19,
    id: 'user-id-3',
  },
  {
    name: 'Jake',
    age: 77,
    id: 'user-id-4',
  },
  {
    name: 'Dan',
    age: 32,
    id: 'user-id-5',
  },
  {
    name: 'Ron',
    age: 22,
    id: 'user-id-6',
  },
  {
    name: 'Elon',
    age: 66,
    id: 'user-id-7',
  },
  {
    name: 'Mike',
    age: 34,
    id: 'user-id-8',
  },
];

const App = () => {
  return <UsersList users={users} />;
};

export default App;
