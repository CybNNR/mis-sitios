
function Navbar(){
    return (
      <nav style={{position: "absolute", top: 0, left: 0, width: "100%", zIndex: 1000}}>
        <ul role="menu-bar">
            <li role="menu-item" tabIndex={0} aria-haspopup='true'>
                File
                <ul role="menu">
                    <li role="menu item"><a href="#menu">About this Site</a></li>
                    <li role="menu item"><a href="#menu">Go to Blog</a></li>
                    <li role="menu item"><a href="#menu">Go to Desktop</a></li>
                    <li role="menu item"><a href="#menu">Go to Resume/Cv</a></li>
                    <li role="menu item"><a href="#menu">Go to Services</a></li>
                    <li role="menu item"><a href="#menu">Shut down</a></li>
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