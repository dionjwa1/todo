import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './context/Auth.js';
import App from './app.js';
import ThemeProvider from './context/Theme.js';

function Main() {

    return (
      <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </AuthProvider>
    );
  }


const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
