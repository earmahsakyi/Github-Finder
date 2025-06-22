import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import UserWrapper from './components/users/UserWrapper'; 
import Alert from './components/Layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/Alert/AlertState';
import NotFound from './components/pages/NotFound';
import './App.css';

const App =() => {
    return (
      <GithubState>
        <AlertState>
      <Router> 
        <div className="App">
          <Navbar title="Github Finder" />

          <div className="container">
            <Alert  />
            
            <Routes>
              <Route
                path="/"
                element={
                 <Home/>
                }
              />
              <Route path='/about' element={<About />} />

              <Route 
                path='/user/:login' 
                element={
                  <UserWrapper 
      
                  />
                }
              />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  }


export default App;