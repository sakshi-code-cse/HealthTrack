import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../src/App.css';
import LoadingScreen from '../src/components/Loading/Loading.js';
import Data from '../src/components/Data/Data.js';
import Form from '../src/components/Form/Form.js';
import Navbar from '../src/components/Navbar/Navbar.js';
import Option from '../src/components/Option/Option.js';
import {
  loadAccount,
  loadAllData,
  loadMedical,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from '../src/store/interactions.js';
import config from '../src/config.json';
import Alert from '../src/components/Alert/Alert.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
    try {
      const provider = loadProvider(dispatch);
      if (!provider) {
        console.error("Ethereum provider not found. Please install MetaMask.");
        return;
      }

      const chainId = await loadNetwork(provider, dispatch);
      const medical_config = config[chainId]?.medical;
      if (!medical_config) {
        console.error(`No configuration found for chain ID: ${chainId}`);
        return;
      }

      window.ethereum.on('accountsChanged', () => {
        loadAccount(provider, dispatch);
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      const medical = loadMedical(provider, medical_config.address, dispatch);
      loadAllData(provider, medical, dispatch);
      subscribeToEvents(medical, dispatch);
    } catch (error) {
      console.error("Error loading blockchain data:", error);
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="App">
          <div className="navbar">
            <Navbar />
            <Option />
            <Routes>
              <Route path="/" exact element={<Form />} />
              <Route path="/Data" element={<Data />} />
            </Routes>
            <Alert />
          </div>
        </div>
      )}
    </>
  );
}

export default App;