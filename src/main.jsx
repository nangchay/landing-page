import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
