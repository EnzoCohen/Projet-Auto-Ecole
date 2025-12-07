import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Twitter, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Logo } from '../Logo'

export function Footer() {
    const location = useLocation()

    return (
        <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        {location.pathname === '/' ? (
                            <div className="flex items-center group select-none cursor-default pointer-events-none">
                                <Logo />
                            </div>
                        ) : (
                            <Link to="/" className="flex items-center group select-none">
                                <Logo />
                            </Link>
                        )}
                        <p className="text-slate-400 leading-relaxed">
                            L'auto-école nouvelle génération qui s'adapte à votre rythme. Formation de qualité, moniteurs certifiés et réussite garantie.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/" label="Accueil" />
                            <FooterLink to="/about" label="Qui sommes-nous" />
                            <FooterLink to="/pricing" label="Nos Tarifs" />
                            <FooterLink to="/faq" label="FAQ" />
                            <FooterLink to="/booking" label="Réserver" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <span>29 Rue Etienne Dolet<br />94140 Alfortville</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                                <span>01 53 66 22 87</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                                <span>contact@drivehours.fr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
                        <p className="text-slate-400 mb-4">
                            Recevez nos conseils et offres exclusives.
                        </p>
                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Votre email"
                                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-accent"
                            />
                            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                                S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Drive Hours. Tous droits réservés.</p>
                    <div className="flex space-x-6">
                        <Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</Link>
                        <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Politique de Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    )
}

function FooterLink({ to, label }: { to: string, label: string }) {
    const location = useLocation()
    const isActive = location.pathname === to

    if (isActive) {
        return (
            <li>
                <span className="text-accent font-semibold flex items-center group cursor-default pointer-events-none select-none">
                    <span className="w-2 h-0.5 bg-accent mr-2" />
                    {label}
                </span>
            </li>
        )
    }

    return (
        <li>
            <Link
                to={to}
                className="text-slate-400 hover:text-accent transition-colors flex items-center group"
            >
                <span className="w-0 group-hover:w-2 h-0.5 bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                {label}
            </Link>
        </li>
    )
}
