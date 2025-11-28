import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Check, Zap, Car, Clock, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PricingFormula } from '../components/ui/pricing-formula'

export default function Pricing() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <>
            <Helmet>
                <title>Drive Hours - Tarifs</title>
                <meta name="description" content="Découvrez nos tarifs transparents pour le permis B manuel, automatique et la conduite accompagnée. Formules adaptées à tous les besoins." />
            </Helmet>

            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
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
                            Des tarifs <span className="text-accent">clairs</span> et adaptés
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Choisissez la formule qui vous correspond. Transparence totale, aucun frais caché.
                        </motion.p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12 space-y-20">

                    {/* Formules Principales */}
                    <section>
                        <motion.div {...fadeInUp} className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                                <Car className="h-8 w-8 text-accent" />
                                Permis B Classique
                            </h2>
                            <p className="text-muted-foreground">La formation traditionnelle sur boîte manuelle.</p>
                        </motion.div>

                        <PricingFormula
                            options={[
                                { hours: "10 heures", price: "650" },
                                { hours: "20 heures", price: "1089", popular: true },
                                { hours: "25 heures", price: "1290" }
                            ]}
                            features={[
                                "Kit pédagogique complet",
                                "Frais de dossier ANTS inclus",
                                "Livre de code + Accès en ligne",
                                "Évaluation de départ offerte",
                                "Suivi pédagogique personnalisé"
                            ]}
                            columns={3}
                        />
                    </section>

                    {/* AAC */}
                    <section>
                        <motion.div {...fadeInUp} className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                                <Shield className="h-8 w-8 text-accent" />
                                Conduite Accompagnée (AAC)
                            </h2>
                            <p className="text-muted-foreground">Dès 15 ans, pour maximiser vos chances de réussite.</p>
                        </motion.div>

                        <PricingFormula
                            options={[
                                { hours: "20 heures + 2 RDV", price: "1200" }
                            ]}
                            features={[
                                "Tout inclus (Code + Conduite)",
                                "2 Rendez-vous pédagogiques (2h chacun)",
                                "Accompagnement aux examens",
                                "Assurance élève conducteur",
                                "Taux de réussite supérieur"
                            ]}
                            columns={1}
                            highlight={true}
                        />
                    </section>

                    {/* Automatique */}
                    <section>
                        <motion.div {...fadeInUp} className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                                <Zap className="h-8 w-8 text-accent" />
                                Permis Boîte Automatique
                            </h2>
                            <p className="text-muted-foreground">Une formation plus simple et plus rapide (13h minimum).</p>
                        </motion.div>

                        <PricingFormula
                            options={[
                                { hours: "13 heures", price: "890" },
                                { hours: "20 heures", price: "1180" }
                            ]}
                            features={[
                                "Formation optimisée",
                                "Véhicule récent et facile à conduire",
                                "Passerelle vers manuel possible (7h)",
                                "Idéal pour la conduite urbaine",
                                "Moins d'heures nécessaires"
                            ]}
                            columns={2}
                        />
                    </section>

                    {/* Pack Accéléré */}
                    <section>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-xl" />
                            <Card className="relative bg-gradient-to-br from-background to-accent/5 border-accent/20 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Zap className="h-64 w-64 text-accent" />
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm">
                                            <Clock className="h-4 w-4" />
                                            Option Premium
                                        </div>
                                        <h2 className="text-3xl font-bold">Pack Accéléré</h2>
                                        <p className="text-lg text-muted-foreground">
                                            Obtenez votre permis en un temps record. Priorité absolue sur le planning et les examens.
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="h-4 w-4 text-accent" />
                                                </div>
                                                <span className="font-medium">Formation intensive sur 2 à 4 semaines</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="h-4 w-4 text-accent" />
                                                </div>
                                                <span className="font-medium">Priorité sur les heures de conduite</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="h-4 w-4 text-accent" />
                                                </div>
                                                <span className="font-medium">Date d'examen garantie rapidement</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="text-center space-y-6 bg-card/50 backdrop-blur p-8 rounded-2xl border border-border/50">
                                        <div className="space-y-2">
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Supplément</p>
                                            <p className="text-5xl font-bold text-accent">+500€</p>
                                            <p className="text-sm text-muted-foreground">sur votre formule de base</p>
                                        </div>
                                        <Button size="lg" className="w-full text-lg" asChild>
                                            <Link to="/booking">Réserver en Accéléré</Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </section>

                    {/* À la carte */}
                    <section>
                        <motion.h2 {...fadeInUp} className="text-2xl font-bold mb-8 text-center">
                            Prestations à la carte
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <SimplePriceCard title="Pack 10h Manuelle" price="500 €" subtitle="TTC" delay={0} />
                            <SimplePriceCard title="Pack 10h Auto" price="550 €" subtitle="TTC" delay={0.1} />
                            <SimplePriceCard title="Heure Manuelle" price="55 €" subtitle="TTC / heure" delay={0.2} />
                            <SimplePriceCard title="Heure Auto" price="60 €" subtitle="TTC / heure" delay={0.3} />
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

function SimplePriceCard({ title, price, subtitle, delay }: { title: string, price: string, subtitle: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <Card className="text-center hover:border-accent/50 transition-colors cursor-default bg-card/50 backdrop-blur">
                <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold text-accent">{price}</p>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
