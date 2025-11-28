import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'

export default function FAQ() {
    const faqs = [
        {
            question: "Combien d'heures de conduite sont obligatoires ?",
            answer: "Le minimum légal est de 20 heures de conduite pratique, dont 15 heures sur voies ouvertes à la circulation. Cependant, la moyenne nationale se situe autour de 30 à 35 heures."
        },
        {
            question: "Acceptez-vous le financement CPF ?",
            answer: "Oui, Drive Hours est certifié Qualiopi et accepte le financement via le Compte Personnel de Formation (CPF). Vous pouvez utiliser vos droits CPF pour financer tout ou partie de votre formation au permis B. Connectez-vous sur moncompteformation.gouv.fr pour vérifier vos droits et réserver directement."
        },
        {
            question: "Quels documents fournir pour l'inscription ?",
            answer: "Vous aurez besoin d'une pièce d'identité, d'un justificatif de domicile de moins de 6 mois, de la JDC (si entre 17 et 25 ans), et de photos d'identité agréées ANTS."
        },
        {
            question: "Proposez-vous la conduite accompagnée (AAC) ?",
            answer: "Oui, nous proposons la formation en conduite accompagnée dès l'âge de 15 ans. C'est un excellent moyen d'acquérir de l'expérience et d'augmenter ses chances de réussite."
        },
        {
            question: "Puis-je payer en plusieurs fois ?",
            answer: "Oui, nous proposons des facilités de paiement en 3 ou 4 fois sans frais. N'hésitez pas à nous contacter pour plus de détails."
        },
        {
            question: "Combien de temps est valable mon code ?",
            answer: "Le code de la route (ETG) est valable 5 ans à partir de la date d'obtention. Vous pouvez passer l'examen pratique autant de fois que nécessaire durant cette période."
        },
        {
            question: "Quel est le taux de réussite de votre auto-école ?",
            answer: "Notre taux de réussite à l'examen pratique est de 75%, bien au-dessus de la moyenne nationale qui se situe autour de 58%. Nous mettons tout en œuvre pour préparer nos élèves de manière optimale."
        },
        {
            question: "Puis-je choisir mon moniteur ?",
            answer: "Oui, vous pouvez exprimer une préférence pour un moniteur en particulier. Nous ferons notre possible pour respecter votre choix en fonction des disponibilités."
        },
        {
            question: "Combien de temps faut-il pour obtenir le permis ?",
            answer: "En moyenne, il faut compter entre 6 mois et 1 an pour obtenir le permis de conduire, selon votre rythme d'apprentissage et la disponibilité des places d'examen. Avec notre pack accéléré, ce délai peut être réduit à 3-4 mois."
        },
        {
            question: "Que se passe-t-il si j'échoue à l'examen ?",
            answer: "En cas d'échec, vous pourrez repasser l'examen après un délai minimum. Nous analysons avec vous les points à améliorer et vous proposons des heures de conduite supplémentaires si nécessaire pour vous préparer au mieux."
        },
        {
            question: "Proposez-vous des cours de code en ligne ?",
            answer: "Oui, nous offrons un accès illimité à notre plateforme de code en ligne inclus dans toutes nos formules. Vous pouvez vous entraîner 24h/24 depuis chez vous sur ordinateur, tablette ou smartphone."
        },
        {
            question: "Puis-je conduire une voiture automatique avec le permis B ?",
            answer: "Oui, le permis B classique (boîte manuelle) vous permet de conduire aussi bien des véhicules manuels qu'automatiques. En revanche, si vous passez le permis sur boîte automatique uniquement, vous ne pourrez conduire que des véhicules automatiques (mention 78 sur le permis)."
        }
    ]

    return (
        <>
            <Helmet>
                <title>Drive Hours - FAQ</title>
                <meta name="description" content="Questions fréquentes sur Drive Hours. Trouvez les réponses à vos questions sur le permis de conduire, le CPF, les tarifs et plus encore." />
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
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <HelpCircle className="h-8 w-8 text-accent" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                        >
                            Questions <span className="text-accent">Fréquentes</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            Tout ce que vous devez savoir sur le permis, nos formations et le financement.
                        </motion.p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12 max-w-3xl">
                    <Accordion className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <AccordionItem value={`item-${index}`} className="border rounded-lg px-4 bg-card/50 backdrop-blur shadow-sm hover:shadow-md transition-all">
                                    <AccordionTrigger className="text-left font-medium hover:text-accent hover:no-underline py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}
