import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const UserItems = ({user: { login, avatar_url, html_url }}) => {
    
    return (
      <div className='card text-center'>
       <img src={avatar_url} alt="" className="round-img" style={{width:' 60px '}}></img>

       <h3>{login}</h3>

       <div>
        <Link to={`/user/${login} `}className='btn btn-dark btn-sm my-1'>More</Link>
       </div>
      </div>
    )
  
}
UserItems.propTypes ={
user: PropTypes.object.isRequired,
login: PropTypes.string.isRequired,
avatar_url: PropTypes.string.isRequired,
html_url: PropTypes.string.isRequired,
}

export default UserItems
