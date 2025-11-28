import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../components/ui/card'
import { CheckCircle, Users, Target, Heart } from 'lucide-react'

export default function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <>
            <Helmet>
                <title>Qui sommes-nous - Drive Hours</title>
                <meta name="description" content="Découvrez l'équipe de Drive Hours. Nos moniteurs expérimentés vous accompagnent vers la réussite." />
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

                    <div className="container mx-auto px-4 relative z-20">
                        <div className="max-w-3xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-accent font-semibold tracking-wider uppercase mb-4 block"
                            >
                                Notre Histoire
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                            >
                                Former les conducteurs de <span className="text-accent">demain</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-muted-foreground leading-relaxed"
                            >
                                Fondée en 2010, Drive Hours est née d'une ambition simple : moderniser l'enseignement de la conduite pour le rendre plus accessible, plus agréable et plus efficace.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold">Nos Valeurs Fondamentales</h2>
                                <p className="text-lg text-muted-foreground">
                                    Nous croyons que l'apprentissage de la conduite doit être une expérience positive. C'est pourquoi nous mettons l'accent sur la pédagogie, la patience et la sécurité.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <ValueCard
                                        icon={<Users className="h-6 w-6 text-accent" />}
                                        title="Pédagogie"
                                        description="Une approche personnalisée adaptée à chaque élève."
                                    />
                                    <ValueCard
                                        icon={<Target className="h-6 w-6 text-accent" />}
                                        title="Excellence"
                                        description="Un taux de réussite supérieur à la moyenne."
                                    />
                                    <ValueCard
                                        icon={<Heart className="h-6 w-6 text-accent" />}
                                        title="Bienveillance"
                                        description="Apprendre sans stress et en toute confiance."
                                    />
                                    <ValueCard
                                        icon={<CheckCircle className="h-6 w-6 text-accent" />}
                                        title="Transparence"
                                        description="Des tarifs clairs et sans frais cachés."
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
                                <img
                                    src="/team.png"
                                    alt="L'équipe Drive Hours"
                                    className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <motion.h2
                                {...fadeInUp}
                                className="text-3xl md:text-4xl font-bold mb-4"
                            >
                                Rencontrez notre <span className="text-accent">Équipe</span>
                            </motion.h2>
                            <motion.p
                                {...fadeInUp}
                                className="text-muted-foreground text-lg"
                            >
                                Des moniteurs passionnés et diplômés d'État pour vous accompagner.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TeamMember
                                name="Jean Dupont"
                                role="Moniteur Senior"
                                description="15 ans d'expérience, spécialiste de la conduite accompagnée."
                                delay={0}
                            />
                            <TeamMember
                                name="Marie Martin"
                                role="Monitrice"
                                description="Pédagogue et patiente, elle saura vous mettre en confiance."
                                delay={0.1}
                            />
                            <TeamMember
                                name="Pierre Durand"
                                role="Responsable Pédagogique"
                                description="Expert en sécurité routière et formation accélérée."
                                delay={0.2}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                {icon}
            </div>
            <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

function TeamMember({ name, role, description, delay }: { name: string, role: string, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur hover:shadow-xl transition-all">
                <div className="h-64 bg-muted w-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                        <Users className="h-16 w-16" />
                    </div>
                </div>
                <CardContent className="pt-6 text-center space-y-2">
                    <h3 className="font-bold text-xl">{name}</h3>
                    <p className="text-accent font-medium">{role}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}
