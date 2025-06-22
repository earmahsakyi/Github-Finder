import React from 'react';
import PropTypes from 'prop-types';
import RepoItems from './RepoItems';

const Repos = ({ repos = [] }) => {  // Default repos to empty array
  if (!repos.length) {
    return <p>No repositories found.</p>; // Return this if no repos are available
  }

  return (
    <>
      {repos.map(repo => (
        <RepoItems key={repo.id} repo={repo} />
      ))}
    </>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
