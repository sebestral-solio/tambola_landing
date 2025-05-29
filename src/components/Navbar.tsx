"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { LoginEventBus } from "@/components/GamesSection"
import { FiEye, FiEyeOff } from 'react-icons/fi';

// Event bus for login modal is imported from GamesSection
interface LoginEvent {
  open: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<null | "success" | "error">(null);
  const [loginMessage, setLoginMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // Listen for login modal events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check for hash on initial load
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);

    const loginEventListener = (event: LoginEvent) => {
      if (event.open) {
        setIsOpen(true);
      }
    };

    // Subscribe to the event bus
    const unsubscribe = LoginEventBus.subscribe(loginEventListener);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      // Unsubscribe from the event bus
      unsubscribe();
    };
  }, []);

  // Close mobile menu on route/hash change
  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="bg-gradient-to-r from-primary to-secondary rounded-lg w-10 h-10 flex items-center justify-center"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-bungee text-white text-xl">W</span>
          </motion.div>
          <span className="font-bungee text-2xl text-foreground">
            Work<span className="text-gradient">Play</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#games"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Games
          </Link>
          <Link
            href="#how-it-works"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            How It Works
          </Link>
          <Link
            href="https://games.republicofengineers.com/lander"
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join
          </Link>
        </nav>

        {/* Login Button and Dialog */}
        <Dialog open={isOpen} onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setLoginStatus(null);
            setLoginMessage("");
            setEmail("");
            setPassword("");
          }
        }}>
          <DialogTrigger asChild>
            <Button variant="outline" className="font-medium">
              Login
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            {loginStatus !== "success" && (
              <DialogHeader>
                <DialogTitle className="text-center">Login to WorkPlay</DialogTitle>
                <DialogDescription className="text-center">
                  Enter your credentials to access your account
                </DialogDescription>
              </DialogHeader>
            )}
            <div className="grid gap-4 py-4">
              {loginStatus === "success" ? (
                <div className="text-green-600 text-center font-bold text-lg flex flex-col items-center gap-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                  Login Successful! Welcome to the game zone 🎮
                </div>
              ) : (
                <>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                        tabIndex={-1} // So button doesn't take focus while typing
                      >
                        {showPassword ? (
                          <FiEyeOff className="h-5 w-5" />
                        ) : (
                          <FiEye className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                  </div>
                  {loginStatus === "error" && (
                    <div className="text-red-600 text-center font-bold flex flex-col items-center gap-2">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" /></svg>
                      Oops! Wrong combo. Try again 🚩
                    </div>
                  )}
                </>
              )}
            </div>
            <DialogFooter>
              {loginStatus !== "success" && (
                <Button className="w-full" onClick={() => {
                  // if (email === "hello123@gmail.com" && password === "123456") {
                    setLoginStatus("success");
                    setLoginMessage("");
                  // } else {
                  //   setLoginStatus("error");
                  //   setLoginMessage("Oops! Wrong combo. Try again 🚩");
                  // }
                  setTimeout(() => {
                    window.location.href = "https://games.republicofengineers.com/lander";
                  }, 1000); // 1 second delay
                }}>
                  Login
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-full p-2 text-foreground/80 hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="bg-white shadow-lg flex flex-col p-0 space-y-6 animate-slide-in relative min-h-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Logo at the very top, full width, no margin */}
            <div className="flex items-center space-x-2 px-6 pt-6 pb-4">
              <Link href="/" className="flex items-center space-x-2 w-full">
                <motion.div
                  className="bg-gradient-to-r from-primary to-secondary rounded-lg w-10 h-10 flex items-center justify-center"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-bungee text-white text-xl">W</span>
                </motion.div>
                <span className="font-bungee text-2xl text-foreground">
                  Work<span className="text-gradient">Play</span>
                </span>
              </Link>
            </div>
            {/* Close button absolutely positioned at top-right */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full text-foreground/80 hover:bg-muted z-10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <Link
              href="#games"
              className="text-lg font-medium text-foreground/90 hover:text-primary px-6"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false)
                document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Games
            </Link>
            <Link
              href="#how-it-works"
              className="text-lg font-medium text-foreground/90 hover:text-primary px-6"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false)
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </Link>
            <Link
              href="https://games.republicofengineers.com/lander"
              className="text-lg font-medium text-foreground/90 hover:text-primary px-6"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false)
                document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join
            </Link>
            <div className="px-6">
              <Button className="mt-4 mb-4 w-full" variant="outline" onClick={() => { setMobileMenuOpen(false); setIsOpen(true); }}>
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
