import "@/style/footer.scss"

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-inner">
          <div className="links">
            <span className="text-muted">&copy; {new Date().getFullYear()} &mdash; Dartmouth Robotics</span>
          </div>
        </div>
      </footer>
    )
}
