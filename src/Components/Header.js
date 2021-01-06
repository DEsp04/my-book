import './Header.css';
function Header() { 
  return (
    <nav className="nav"> 
      <h1>Book App</h1>
      <ul>
        <li className="nav-item"><a href='#'>Home</a></li>
        <li className="nav-item"><a href="#">Books</a></li>
        <li clasName="nav-item"><a href="#">About</a></li>
      </ul>
    </nav>
  )
}

export default Header;