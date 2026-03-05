import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/education" className="nav-link">
            Education
          </Link>
        </li>
        <li>
          <Link to="/experience" className="nav-link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="/certifications" className="nav-link">
            Certifications
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/references" className="nav-link">
            References
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
