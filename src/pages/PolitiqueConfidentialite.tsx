import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function PolitiqueConfidentialite() {
    return (
        <>
            <Helmet>
                <title>Politique de Confidentialité - Drive Hours</title>
                <meta name="description" content="Politique de confidentialité et protection des données personnelles de Drive Hours." />
            </Helmet>

            <div className="flex flex-col min-h-screen">
                <section className="relative pt-32 pb-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold mb-8"
                        >
                            Politique de Confidentialité
                        </motion.h1>

                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <h2>1. Collecte des données</h2>
                            <p>
                                Nous collectons les informations que vous nous fournissez lors de votre inscription ou via nos formulaires de contact (nom, prénom, email, téléphone).
                            </p>

                            <h2>2. Utilisation des données</h2>
                            <p>
                                Vos données sont utilisées pour la gestion de votre dossier, la planification de vos leçons et pour vous communiquer des informations relatives à votre formation.
                            </p>

                            <h2>3. Protection des données</h2>
                            <p>
                                Nous mettons en œuvre des mesures de sécurité pour protéger vos données personnelles contre tout accès non autorisé.
                            </p>

                            <h2>4. Vos droits</h2>
                            <p>
                                Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à contact@drivehours.fr.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
