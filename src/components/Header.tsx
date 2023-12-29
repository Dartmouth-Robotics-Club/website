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
            <li className="nav-item">
              <Link href="https://docs.google.com/document/d/17siaQBqu0Gn88x--ALFaozKqcxzt7qhjTycw0sSnA6A/edit?usp=sharing" className="nav-link">
                Onboarding
              </Link>
            </li>
            <li className="join-button"> 
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeGg0QqYfNoMnk2YYHZl89VwUNGIAWJwP6BmNTxWHyxKHyowQ/closedform" rel="noopener noreferrer" target="_blank">
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
