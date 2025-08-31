import homeIcon from './assets/home.png'

function Header() {
    return (<header>
        <div className="nav-bar">
            <ul>
                <div className="nav-left">
                    <img src={homeIcon} alt="home" className='nav-icon' />
                    <li>HOME</li>
                </div>
                <div className="nav-right">
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </div>
            </ul>
        </div>
        <div className='main'>
            <h1>DAILY DAIRY</h1>
            <hr />
            <h4>DIVE INTO MY COLLECTION — A MILK CAP A DAY, EVERY DAY.</h4>
        </div>
    </header>)
}


export default Header;