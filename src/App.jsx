import React, { useState } from 'react';
import Main from '../components/Main.jsx'
import Navbar from '../components/Navbar.jsx'

function App() {

  const [mode, setMode] = useState(true) // true means Dark Theme 
  console.log("stato iniziale: ", mode)

  function handleToggle() {
    setMode((prevMode) => !prevMode)
  }

  return (
    <div className="container" >
      <Navbar className="navigation-bar" mode={mode} onToggle={handleToggle} />
      <Main mode={mode} />
    </div>
  )
}

export default App;
