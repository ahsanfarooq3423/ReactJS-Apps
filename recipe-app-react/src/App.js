import React from 'react';
import styles from './App.module.css';
import Leftbox from './Leftbox/Leftbox';
import Rigthbox from './Rigthbox/Rigthbox';




function App() {
  return (
    <div className={styles.App}>
      
      <div>
        <Leftbox/>
        <Rigthbox/>
        
      </div>
    </div>
  );
}

export default App;
