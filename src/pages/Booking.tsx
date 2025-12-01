import { InlineWidget } from "react-calendly";
import { Helmet } from 'react-helmet-async';

export default function Booking() {
    return (
        <>
            <Helmet>
                <title>Drive Hours - Réservation en ligne</title>
                <meta name="description" content="Réservez votre leçon de conduite en ligne avec Drive Hours. Choisissez votre créneau et payez en toute sécurité." />
            </Helmet>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Réserver une leçon</h1>
                    <p className="text-muted-foreground">
                        Choisissez le créneau qui vous convient le mieux ci-dessous.
                    </p>
                </div>
                <div className="h-[700px] w-full">
                    <InlineWidget
                        url="https://calendly.com/steffetenzo/rendez-vous"
                        styles={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        </>
    );
}
