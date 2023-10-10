import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
      <div className="logo-container">
        <img src="/dart-logo.svg" alt="dart-logo" />
      </div>
      <div className="nav-container">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#members" className="nav-link">
                Members
              </Link>
            </li>
            <li> 
            <Link href="" rel="noopener noreferrer" target="_blank">
            JOIN US
          </Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  )
}
