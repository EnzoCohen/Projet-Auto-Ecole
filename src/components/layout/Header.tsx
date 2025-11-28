import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { Menu, X, Car } from 'lucide-react'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { href: '/', label: 'Accueil' },
        { href: '/about', label: 'Qui sommes-nous' },
        { href: '/pricing', label: 'Tarifs' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-accent text-white p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/25">
                        <Car className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight hidden sm:block font-harlekin">
                        Auto Ecole
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-accent rounded-full",
                                location.pathname === link.href ? "text-foreground font-semibold" : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                            {location.pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute inset-0 bg-accent/10 rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    ))}
                    <div className="pl-4 flex items-center gap-4">
                        <ModeToggle />
                        <Button asChild className="rounded-full px-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:scale-105">
                            <Link to="/booking">Réserver</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        className={cn(
                                            "block text-lg font-medium p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-colors",
                                            location.pathname === link.href ? "text-accent bg-accent/5" : "text-muted-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button asChild className="w-full rounded-full text-lg py-6 mt-4">
                                    <Link to="/booking" onClick={() => setIsOpen(false)}>Réserver une leçon</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
