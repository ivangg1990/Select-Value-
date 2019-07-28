import React from 'react';
import './App.css';

import SelectList from './components/SelectList'

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <SelectList />
        </div>
      );
    }
}

export default App;
