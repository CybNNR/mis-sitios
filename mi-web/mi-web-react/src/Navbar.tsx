import { Link } from 'react-router-dom';

function Navbar(){
    return (
      <nav style={{position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1000}}>
        <ul role="menu-bar">
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                File
                <ul role="menu">
                    <li role="menu-item"><Link to="/about">About this Mac</Link></li>
                    <li role="menu-item"><Link to="/">Go to Desktop</Link></li>
                    <li role="menu-item"><Link to="/blog">Go to Blog</Link></li>
                    <li role="menu-item"><Link to="/curriculum">Go to Curriculum</Link></li>
                    <li role="menu-item"><a href="https://google.com">Shut down</a></li>
                </ul>
            </li>
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                Edit
                <ul role="menu">
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                </ul>
            </li>
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                View
                <ul role="menu">
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                </ul>
            </li>
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                Special
                <ul role="menu">
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                    <li role="menu item"><a href="#menu">TBD</a></li>
                </ul>
            </li>
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                Help
                <ul role="menu">
                    <li><a href=""> I need help too twin </a></li>
                </ul>
            </li>
        </ul>

      </nav>
    )
}
export default Navbar;