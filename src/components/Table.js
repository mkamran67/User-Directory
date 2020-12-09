import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const Table = () => {
  const [users, setUsers] = useState([]);

  let usered = API.getUsers();
  useEffect(() => {
    setUsers(API.getUsers());
  }, []);

  return <div>{usered.length > 0 && console.log(usered)}</div>;
};

export default Table;
