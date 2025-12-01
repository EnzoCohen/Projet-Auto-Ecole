import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Clock, Shield, Trophy, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { GoogleReviews } from '../components/GoogleReviews'

export default function Home() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Drive Hours - Auto-école Nouvelle Génération</title>
                <meta name="description" content="Passez votre permis de conduire avec Drive Hours à Alfortville. Formation premium, moniteurs experts, et financement CPF accepté." />
            </Helmet>

            <div className="flex flex-col min-h-screen overflow-x-hidden">
                {/* Hero Section */}
                <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Parallax-like effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/hero-driving.png"
                            alt="Driving lesson"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 pt-20">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={staggerContainer}
                            className="max-w-3xl space-y-6"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4 border border-accent/30 backdrop-blur-sm">
                                    Auto-école agréée & certifiée Qualiopi
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
                            >
                                Votre Permis,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                                    Votre Liberté.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-xl text-gray-200 max-w-xl leading-relaxed"
                            >
                                Rejoignez l'auto-école nouvelle génération à Alfortville.
                                Formation personnalisée, suivi en ligne et réussite garantie.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Button size="lg" className="whitespace-nowrap text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25" asChild>
                                    <Link to="/booking" className="flex items-center justify-center gap-2">
                                        Réserver ma leçon <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="whitespace-nowrap text-lg px-8 py-6 border-white text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                                    <Link to="/pricing">
                                        Voir les tarifs
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
                    >
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                            <div className="w-1 h-2 bg-white/50 rounded-full" />
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-background border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCounter number="98%" label="Taux de réussite" icon={<Trophy className="h-6 w-6 text-accent" />} />
                            <StatCounter number="1500+" label="Élèves formés" icon={<Users className="h-6 w-6 text-accent" />} />
                            <StatCounter number="15" label="Moniteurs experts" icon={<Star className="h-6 w-6 text-accent" />} />
                            <StatCounter number="4.9/5" label="Avis Google" icon={<CheckCircle className="h-6 w-6 text-accent" />} />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <motion.h2
                                {...fadeInUp}
                                className="text-3xl md:text-4xl font-bold mb-4"
                            >
                                Pourquoi choisir <span className="text-accent">Drive Hours</span> ?
                            </motion.h2>
                            <motion.p
                                {...fadeInUp}
                                className="text-muted-foreground text-lg"
                            >
                                Nous avons repensé l'apprentissage de la conduite pour vous offrir la meilleure expérience possible.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Shield className="h-10 w-10 text-accent" />}
                                title="Formation Certifiée"
                                description="Auto-école agréée par l'État et certifiée Qualiopi. Vos droits CPF sont acceptés pour financer votre permis."
                                delay={0}
                            />
                            <FeatureCard
                                icon={<Clock className="h-10 w-10 text-accent" />}
                                title="Flexibilité Totale"
                                description="Réservez vos heures de conduite en ligne 24h/24 et 7j/7. Annulation gratuite jusqu'à 48h à l'avance."
                                delay={0.1}
                            />
                            <FeatureCard
                                icon={<Star className="h-10 w-10 text-accent" />}
                                title="Pédagogie Positive"
                                description="Des moniteurs bienveillants et patients, sélectionnés pour leur expertise et leur approche pédagogique."
                                delay={0.2}
                            />
                        </div>
                    </div>
                </section>

                {/* Success Section */}
                <section className="py-24 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
                                <img
                                    src="/success.png"
                                    alt="Étudiant heureux avec son permis"
                                    className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background" />
                                            ))}
                                        </div>
                                        <span className="font-bold text-sm">+500 élèves</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Ont obtenu leur permis cette année avec nous.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                    La route vers le succès commence <span className="text-accent">ici</span>
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Chez Drive Hours, nous ne vous apprenons pas seulement à passer un examen, nous formons des conducteurs sûrs et responsables pour la vie.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Taux de réussite supérieur à la moyenne nationale",
                                        "Véhicules récents et double commande",
                                        "Suivi de progression numérique",
                                        "Facilités de paiement (3x ou 4x sans frais)"
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="h-4 w-4 text-accent" />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <Button size="lg" asChild className="mt-4">
                                    <Link to="/about">Découvrir notre méthode</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Google Reviews Section */}
                <GoogleReviews />

                {/* CTA Section */}
                <section className="py-24 bg-accent relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/hero-driving.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto space-y-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Prêt à prendre le volant ?</h2>
                            <p className="text-xl text-white/90">
                                La première heure d'évaluation est offerte pour toute inscription au pack complet.
                            </p>
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform" asChild>
                                <Link to="/booking">Je m'inscris maintenant</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    )
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur">
                <CardContent className="p-8 space-y-4">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

function StatCounter({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
        >
            <div className="flex justify-center mb-2">{icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">{number}</div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
        </motion.div>
    )
}
