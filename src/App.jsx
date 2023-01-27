import * as React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import TrackRole from './components/TrackRole';
import SecurelyTransact from './components/SecurelyTransact';

const App = () => {
  return (
    <div className='bg-[#fff] min-h-[100vh]'>
     <Navbar />
     <Herosection />
     <TrackRole />
     <SecurelyTransact />
    </div>
  );
};

export default App;
