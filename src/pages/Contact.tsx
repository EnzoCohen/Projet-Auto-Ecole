import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function Contact() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.5 }
    }

    return (
        <>
            <Helmet>
                <title>Drive Hours - Contact</title>
                <meta name="description" content="Contactez Drive Hours. Adresse, téléphone, email et horaires d'ouverture." />
            </Helmet>

            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-muted/30">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50 z-10" />
                        <img
                            src="/hero-driving.png"
                            alt="Background"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                        >
                            Restons en <span className="text-accent">contact</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Une question ? Besoin d'un renseignement ? Notre équipe est là pour vous répondre.
                        </motion.p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <motion.div
                            {...fadeInUp}
                            className="space-y-8"
                        >
                            <Card className="bg-card/50 backdrop-blur border-none shadow-lg">
                                <CardContent className="p-8 space-y-8">
                                    <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>

                                    <ContactItem
                                        icon={<MapPin className="h-6 w-6 text-accent" />}
                                        title="Adresse"
                                        content="29 Rue Etienne Dolet, 94140 Alfortville"
                                        delay={0.1}
                                    />

                                    <ContactItem
                                        icon={<Phone className="h-6 w-6 text-accent" />}
                                        title="Téléphone"
                                        content="01 53 66 22 87"
                                        delay={0.2}
                                    />

                                    <ContactItem
                                        icon={<Mail className="h-6 w-6 text-accent" />}
                                        title="Email"
                                        content="contact@drivehours.fr"
                                        delay={0.3}
                                    />

                                    <ContactItem
                                        icon={<Clock className="h-6 w-6 text-accent" />}
                                        title="Horaires d'ouverture"
                                        content={
                                            <div className="space-y-1">
                                                <p>Lundi - Vendredi : 9h - 19h</p>
                                                <p>Samedi : 9h - 17h</p>
                                                <p>Dimanche : Fermé</p>
                                            </div>
                                        }
                                        delay={0.4}
                                    />
                                </CardContent>
                            </Card>

                            {/* Formulaire rapide (visuel uniquement pour l'instant) */}
                            <Card className="bg-card/50 backdrop-blur border-none shadow-lg">
                                <CardContent className="p-8 space-y-4">
                                    <h3 className="text-xl font-bold">Envoyez-nous un message</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input placeholder="Nom" />
                                        <Input placeholder="Email" />
                                    </div>
                                    <Textarea placeholder="Votre message..." />
                                    <Button className="w-full">
                                        <Send className="mr-2 h-4 w-4" /> Envoyer
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5 }}
                            className="h-[600px] lg:h-full min-h-[500px]"
                        >
                            <Card className="h-full overflow-hidden border-none shadow-xl">
                                <CardContent className="p-0 h-full relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.0847684937!2d2.4197!3d48.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673c0e8f8e8e1%3A0x40b82c3b45d3f0!2s29%20Rue%20Etienne%20Dolet%2C%2094140%20Alfortville!5e0!3m2!1sfr!2sfr!4v1732704000000!5m2!1sfr!2sfr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Localisation Drive Hours"
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 pointer-events-none border-4 border-accent/20 rounded-xl" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

function ContactItem({ icon, title, content, delay }: { icon: React.ReactNode, title: string, content: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay, duration: 0.5 }}
            className="flex gap-4 group"
        >
            <div className="flex-shrink-0 mt-1 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <div className="text-muted-foreground">{content}</div>
            </div>
        </motion.div>
    )
}
