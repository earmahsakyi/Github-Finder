import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import User from './User';
import githubContext from '../../context/github/githubContext';

const UserWrapper = () => {
  const { login } = useParams();
  const { getUser, user, loading, getUserRepos,repos
    
   } = useContext(githubContext);

  useEffect(() => {
    getUser(login);        // Fetch user data
    getUserRepos(login);   // Fetch user repos
  }, [login, getUser, getUserRepos]);

  return <User user={user} loading={loading} repos={repos} />;
};

export default UserWrapper;
