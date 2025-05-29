"use client"

import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="font-bungee text-white text-sm">W</span>
              </div>
              <span className="font-bungee text-xl text-foreground">
                Work<span className="text-gradient">Play</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              Making work more fun with interactive games designed for teams.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "twitter", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "facebook", href: "#" },
                { icon: "linkedin", href: "#" }
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Games</h3>
            <ul className="space-y-3">
              {["Tambola", "Scream4Icecream", "Stop@10", "All Games"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {["Help Center", "Terms of Service", "Privacy Policy", "FAQ"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} WorkPlay Gaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Social Icons Component
const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    case "facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    default:
      return null
  }
}

export default Footer
