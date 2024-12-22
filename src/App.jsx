import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import Step1Form from './components/Step1Form';
import Step2 from './components/Step2Review';
import Login from './components/Login';
import './index.css';

const App = () => {
  const [activePage, setActivePage] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
  
 <div className="app-container">
      {sidebarOpen && (
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      <div className="main-content">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {activePage === 'login' && <Login/>}
        {activePage === 'feedback' && (
          activeStep === 1 ? (
            <Step1Form setActiveStep={setActiveStep} />
          ) : (
            <Step2 setActiveStep={setActiveStep}/>
          )
        )}
      </div>
    </div>
  

    </>
   
  );
};

export default App;
