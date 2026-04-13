import "./Footer.css";

export default function Footer() {
  return (
    <>
      {/* ── SEE YOU AT TECHSHASTRA banner ── */}
      <div className="footer-banner">
        <h2>
          SEE YOU AT <span>TECHSHASTRA</span>
        </h2>
        <p className="footer-banner-sub">
          Netaji Subhas University · Annual Technical Festival
        </p>
      </div>

      <div className="footer-divider-line" />

      {/* ── Footer main ── */}
      <footer className="footer-main">
        <div className="footer-grid">
          {/* LEFT — Brand */}
          <div className="footer-brand">
            {/* Logo placeholder — user will add logo later */}
            <h3 className="footer-brand-name">TechShastra</h3>
            <p className="footer-brand-desc">
              NSU proudly presents TechShastra — the annual technical fest of
              Netaji Subhas University, a platform for students to showcase
              skills, creativity, and innovation across multiple domains of
              technology.
            </p>
          </div>

          {/* CENTER — Navigate */}
          <div>
            <h4 className="footer-col-title">Navigate</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Sponsors</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          {/* RIGHT — Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">📍</span>
                <span>
                  Pokhari, PO: Bhilai Pahari, PS: MGM,
                  <br />
                  Dist: Jamshedpur, Jharkhand – 831012
                </span>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:techshastra@nsu.ac.in">techshastra@nsu.ac.in</a>
              </li>
              <li>
                <span className="contact-icon">🌐</span>
                <a href="https://nsuniv.ac.in" target="_blank" rel="noreferrer">
                  nsuniv.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 TechShastra, NSU. All rights reserved.</p>
          <p>
            Built with ❤️ by the <a href="#">TechShastra Dev Team</a>
          </p>
        </div>
      </footer>
    </>
  );
}
