import * as React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import TrackRole from './components/TrackRole';
import SecurelyTransact from './components/SecurelyTransact';
import { TabTitle } from './utils/GeneralMeta';
import StartTransaction from './components/StartTransaction';
import Footer from './components/Footer';
import FAQS from './components/FAQS';

const App = () => {
  TabTitle('Eyewitnex Home Page')
  return (
    <div className='bg-[#fff] min-h-[100vh]'>
     <Navbar />
     <Herosection />
     <TrackRole />
     <SecurelyTransact />
     <StartTransaction />
     <FAQS />
     <Footer />
    </div>
  );
};

export default App;
