import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGgCircle } from '@fortawesome/free-brands-svg-icons';
import alertContext from '../../context/Alert/alertContext';

const Alert = () => {

  const alertContexts = useContext(alertContext);
  const { alert } = alertContexts;
  return (
   alert !== null && (
    <div className={`alert alert-${alert.type}`}>
        <FontAwesomeIcon icon={ faGgCircle} /> {alert.msg}
    </div>
    
   )
  )
}

export default Alert
