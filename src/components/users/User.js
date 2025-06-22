import React, { Fragment, useContext  } from 'react';
import Spinner from '../Layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import githubContext from '../../context/github/githubContext';

const User = ({ repos }) => {
  const githubContexts = useContext(githubContext);
  const { user, loading } = githubContexts;

  if (!user || loading) return <Spinner />;  // Ensure the loading spinner shows while loading

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
  } = user;

  return (
    <Fragment>
      <Link to="/" className='btn btn-light'>Back To Search</Link>
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <ul>
            <li>{login && <strong>Username:</strong>}{login}</li>
            <li>{company && <Fragment><strong>Company:</strong>{company}</Fragment>}</li>
            <li>{blog && <Fragment><strong>Website:</strong>{blog}</Fragment>}</li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Follower: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />  {/* Repos component receives repos */}
    </Fragment>
  );
};

export default User;
