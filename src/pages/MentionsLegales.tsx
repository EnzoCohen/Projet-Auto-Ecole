import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function MentionsLegales() {
    return (
        <>
            <Helmet>
                <title>Mentions Légales - Drive Hours</title>
                <meta name="description" content="Mentions légales de l'auto-école Drive Hours." />
            </Helmet>

            <div className="flex flex-col min-h-screen">
                <section className="relative pt-32 pb-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold mb-8"
                        >
                            Mentions Légales
                        </motion.h1>

                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <h2>1. Éditeur du site</h2>
                            <p>
                                Le site Drive Hours est édité par la société Drive Hours, SAS au capital de 1000€, immatriculée au RCS de Créteil sous le numéro [Numéro SIREN].
                            </p>
                            <p>
                                Siège social : 29 Rue Etienne Dolet, 94140 Alfortville<br />
                                Email : contact@drivehours.fr<br />
                                Téléphone : 01 53 66 22 87
                            </p>

                            <h2>2. Directeur de la publication</h2>
                            <p>
                                Directeur de la publication : [Nom du Directeur]
                            </p>

                            <h2>3. Hébergement</h2>
                            <p>
                                Le site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].
                            </p>

                            <h2>4. Propriété intellectuelle</h2>
                            <p>
                                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
