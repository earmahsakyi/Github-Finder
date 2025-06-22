import React, { useState, useContext} from 'react'
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/Alert/alertContext';

const  Search =()=> {
  const githubContexts = useContext(githubContext) ;
  const alertContexts = useContext(alertContext) ;

    const [text, setText] = useState('');

    const   onChange = (e) => setText( e.target.value);
    const onSubmit = (e) => {
      e.preventDefault();
      if(text === ''){
        alertContexts.setAlert('Please enter something', 'light');
      }
      else{
        githubContexts.searchUsers(text)
        setText('')
      }
      
    }



    return (
      <div>
       <form className='form' onSubmit={onSubmit}>
        <input type="text" name="text" placeholder='Search Users...' value={text} onChange={onChange}/  >
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
        
        </form> 
        {githubContexts.users.length > 0 && (<button className='btn btn-light btn-block' onClick={githubContexts.clearUsers}>Clear</button>)}
      
      </div>
    )
  }


export default Search
