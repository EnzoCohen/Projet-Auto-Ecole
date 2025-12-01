import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

// --- Types ---
interface Review {
    author_name: string;
    relative_time_description: string;
    text: string;
    rating: number;
    profile_photo_url: string;
}

declare global {
    interface Window {
        google: any;
    }
}

// --- Mock Data (Fallback) ---
const MOCK_REVIEWS: Review[] = [
    {
        author_name: "Thomas D.",
        relative_time_description: "il y a 2 semaines",
        text: "Super auto-école ! J'ai eu mon permis du premier coup en 25h. Les moniteurs sont très pédagogues et patients. Je recommande à 100% !",
        rating: 5,
        profile_photo_url: ""
    },
    {
        author_name: "Sarah L.",
        relative_time_description: "il y a 1 mois",
        text: "Une équipe au top, toujours disponible et à l'écoute. Les heures de conduite étaient un vrai plaisir. Merci pour tout !",
        rating: 5,
        profile_photo_url: ""
    },
    {
        author_name: "Mehdi K.",
        relative_time_description: "il y a 3 semaines",
        text: "Formation de qualité, véhicules neufs et super ambiance. Le suivi est sérieux et on se sent vraiment prêt le jour de l'examen.",
        rating: 5,
        profile_photo_url: ""
    }
];

export function GoogleReviews() {
    const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
    const [rating, setRating] = useState(4.9);
    const [totalReviews, setTotalReviews] = useState(127);
    const serviceRef = useRef<HTMLDivElement>(null);

    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    useEffect(() => {
        // Skip if no API credentials
        if (!apiKey || !placeId) {
            console.warn("Google API credentials missing. Using static reviews.");
            return;
        }

        // Load Google Maps script
        const loadGoogleScript = () => {
            // Check if already loaded
            if (window.google?.maps?.places) {
                fetchReviews();
                return;
            }

            // Check if script is already being loaded
            if (document.querySelector('#google-maps-script')) {
                const checkInterval = setInterval(() => {
                    if (window.google?.maps?.places) {
                        clearInterval(checkInterval);
                        fetchReviews();
                    }
                }, 100);
                return;
            }

            // Load the script
            const script = document.createElement('script');
            script.id = 'google-maps-script';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => fetchReviews();
            script.onerror = () => {
                console.error("Failed to load Google Maps script");
            };
            document.head.appendChild(script);
        };

        // Fetch reviews from Google Places API
        const fetchReviews = () => {
            if (!serviceRef.current || !window.google) return;

            try {
                const service = new window.google.maps.places.PlacesService(serviceRef.current);
                service.getDetails(
                    {
                        placeId: placeId,
                        fields: ['reviews', 'rating', 'user_ratings_total']
                    },
                    (place: any, status: any) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                            console.log("✅ Google Reviews loaded successfully:", place);
                            if (place.reviews && place.reviews.length > 0) {
                                setReviews(place.reviews);
                                setRating(place.rating || 4.9);
                                setTotalReviews(place.user_ratings_total || 127);
                            }
                        } else {
                            console.warn("⚠️ Google Places API returned status:", status);
                        }
                    }
                );
            } catch (err) {
                console.error("❌ Error fetching reviews:", err);
            }
        };

        loadGoogleScript();
    }, [apiKey, placeId]);

    return (
        <section className="py-24 bg-muted/30">
            {/* Hidden div for PlacesService */}
            <div ref={serviceRef} className="hidden" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Ce que nos élèves disent sur <span className="text-[#4285F4]">Google</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <span className="text-2xl font-bold">{rating}</span>
                        <div className="flex text-[#FBBC05]">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className={`h-6 w-6 ${i <= Math.round(rating) ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                        </div>
                        <span className="text-muted-foreground">({totalReviews} avis)</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.slice(0, 3).map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-sm hover:shadow-md transition-all bg-card">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold">
                                            {review.author_name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold">{review.author_name}</div>
                                            <div className="text-xs text-muted-foreground">{review.relative_time_description}</div>
                                        </div>
                                    </div>
                                    <div className="flex text-[#FBBC05] mb-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className={`h-4 w-4 ${i <= review.rating ? 'fill-current' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                                        "{review.text}"
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" className="gap-2" asChild>
                        <a href={`https://search.google.com/local/reviews?placeid=${placeId}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Voir tous les avis sur Google
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
