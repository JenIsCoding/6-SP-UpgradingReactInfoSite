// import reactPicDark from '../src/assets/reactPicture-dark.png'
// import reactPicLight from '../src/assets/reactPicture-light.png'

function Main({ mode }) {

    const elements = [
        'Was released in 2013', 
        'Was originally created by Jordan Walke', 
        'Has well over 100K stars on GitHub',
        'Is maintained by Facebook',
        'Powers thousand of enterprise apps, including mobile apps'
    ]
    
    return (
        <div className="main" 
        style={{
            backgroundColor: mode ? '#21222a' : '#ffffff',
            backgroundImage: `url(assets/${mode ? "reactPicture-Dark.png" : "reactPicture-Light.png"})`
        }}>
                <h1 className="main-title" style={{color: mode ? '#ffffff' : '#2B283A'}}>Fun facts about React</h1>
                <ul className="main-list" style={{color: mode ? '#ffffff' : '#2B283A'}}>
                            {elements.map((el, index) => (
                                <li className={mode ? 'dark' : 'light'} key={index}>{el}</li>
                            ))}
            </ul>
        </div>
    )
}

export default Main; 