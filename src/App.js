import React, { useState, useEffect } from 'react';
import Pages from './pages';
import Loading from './components/Loading';
import './global.scss';

function App() {
  const [user, setUser] = useState(null);

  const printInConsole = () => {
    const msg = '%c Curious speech 👋! Follow us: github.com/MedN-Dev';
    const styles = [
      'font-size: 16px',
      'font-family: monospace',
      'background: white',
      'display: inline-block',
      'color: black',
      'padding: 16px 25px',
      'border: 1px dashed;',
    ].join(';');
    // eslint-disable-next-line no-console
    console.log(msg, styles);
  };

  useEffect(() => {
    printInConsole();
    fetch('https://gitconnected.com/v1/portfolio/medn-dev')
      .then(res => res.json())
      .then(userData => {
        setTimeout(() => {
          setUser(userData);
        }, 1000);
      })
      .catch(e => {
        console.log(e);
        })
    }, 
    []);

  if (!user) {
    return <Loading />;
  }

  return <Pages user={user} />;
}

export default App;