import React ,{ useReducer } from "react"; 
import axios from "axios";
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,SET_LOADING,GET_REPOS,GET_USER,CLEAR_USERS
}
from '../types';

 const GithubState = props =>   {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading : false,
    }
     const [ state, dispatch] = useReducer(githubReducer,initialState);



     //Search Users
     const searchUsers = async (text) => {
        setLoading(); // Set loading state to true to show loading spinner
        // Axios GET request to GitHub API to search for users based on query text
        const res = await axios.get(
          `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        dispatch({type: SEARCH_USERS, payload: res.data.items})
      };
    

     //Get user
      // Function to get details of a single user by their username
  const  getUser = async username => {
    setLoading(); // Set loading state to true to show loading spinner
    // Axios GET request to GitHub API to fetch data for a specific user
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
   
    dispatch({type: GET_USER, payload: res.data})
  };

     //Get Repos 
     const getUserRepos = async (username) => {
        setLoading(); // Show loading spinner while fetching
        try {
          const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
          );
          dispatch({type: GET_REPOS, payload: res.data});  // Update repos in context
        } catch (err) {
          console.error(err); // Handle error if repos fetch fails
        }
      };

     //Clear users
       // Function to clear the list of users (for example, when the user clicks a 'Clear' button)
    const  clearUsers = () => dispatch({type: CLEAR_USERS })
     //Set loading
     const setLoading  = () => dispatch({type: SET_LOADING})

     return <githubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos


     }}>
        {props.children}
     </githubContext.Provider>
 }
 export default GithubState