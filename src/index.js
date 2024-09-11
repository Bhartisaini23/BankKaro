import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import './index.css';
import App from './App';

// Define the Header component
const Header = () => (
  <header className="bg-black text-white px-6 py-3 flex items-center justify-between">
    <h1>My Website</h1>
    {/* Add more JSX elements or components here as needed */}
  </header>
);

// Log the server-rendered string of the Header component
console.log(ReactDOMServer.renderToString(<Header />));

// Render the entire application to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
