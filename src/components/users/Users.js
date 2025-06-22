import React, {useContext} from 'react'
import UserItems from './UserItems';
import Spinner from '../Layout/Spinner';
import githubContext from '../../context/github/githubContext';


const Users = () => {
  const githubContexts = useContext(githubContext);  
  const {loading, users} = githubContexts 


  if (loading){
    return<Spinner/>
  }
  else{
    return (
      <div style={userStyle}>
        {users.map(user => (
           <UserItems key={user.id} user={user} />
        ))}
      </div>
    )
  }
    
    
 
}


const userStyle = {
  display : 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap : '1rem'
}



export default Users
