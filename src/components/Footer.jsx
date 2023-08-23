import "@/style/footer.scss"
import Image from 'next/image'

export default function Footer() {
    return (
      <footer className="footer">
        <div className="logo-container">
          <Image
            src="/dart-logo.svg"
            alt="dart-logo"
            fill={true}
          />
        </div>
        <div className="links">
          <span className="text-muted">&copy; {new Date().getFullYear()} &mdash; Dartmouth Robotics</span>
        </div>
      </footer>
    )
}
