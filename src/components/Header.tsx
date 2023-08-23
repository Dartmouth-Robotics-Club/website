import { useRouter } from 'next/navigation'
import Image from 'next/image'

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
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#members" className="nav-link">
                Members
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </header>
  )
}
