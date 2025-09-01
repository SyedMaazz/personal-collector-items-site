import homeIcon from './assets/home.png'

function Header() {
    return (<>
        <nav className="nav-bar">
            <ul>
                <li className="nav-left">
                    <img src={homeIcon} alt="home" className='nav-icon' />
                    <span>HOME</span>
                </li>
                <li className="nav-right">
                    <span>ABOUT</span>
                    <span>CONTACT</span>
                </li>
            </ul>
        </nav>
        <header>
        <div className='main'>
            <h1>DAILY DAIRY</h1>
            <hr />
            <h4>DIVE INTO MY COLLECTION — A MILK CAP A DAY, EVERY DAY.</h4>
        </div>
    </header>
    </>)
}


export default Header;