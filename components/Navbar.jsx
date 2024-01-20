import React from 'react'
// import reactLogoDark from '../src/assets/react-dark.png'
// import reactLogoLight from '../src/assets/react-light.png'


function Navbar({ onToggle, mode }) {
    
    return (
        <div className="navigation-bar" 
            style={{backgroundColor: mode ? '#21222a' : '#ffffff'}}
            >
            <img className="navbar-logo"
                src={`assets/${mode ? "react-dark.png" : "react-light.png"}`}
                alt="React logo" />
            <h3 
                className="navbar-text"
                style={{color: mode ? '#61dafb' : '#00ABCA'}}
                >ReactFacts</h3>

            <div className="navbar-toggle">
                <span 
                    className="toggle-label-light" 
                    style={{color: mode ? '#918E9B' : '#2B283A'}}
                    >Light</span>
                <label className="toggle-switch">
                    <input 
                        type="checkbox" 
                        checked={mode} 
                        onChange={onToggle} 
                        />
                    <span   className={`toggle-slider ${mode ? 'dark-mode' : 'light-mode'}`} 
                            style={{backgroundColor: mode ? '#F5F5F5' : '#2B283A'}}
                        ></span>
                </label>
                <span   className="toggle-label-dark" 
                        style={{color: mode ? '#ffffff' : '#D5D4D8'}}
                    >Dark</span>
            </div>
        </div>
    )
}

export default Navbar;