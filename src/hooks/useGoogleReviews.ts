import { useEffect, useState, useRef } from 'react';

export function useGoogleReviews() {
    const [rating, setRating] = useState(5);
    const [totalReviews, setTotalReviews] = useState(42);
    const serviceRef = useRef<HTMLDivElement>(null);

    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    useEffect(() => {
        // Skip if no API credentials
        if (!apiKey || !placeId) {
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
                        fields: ['rating', 'user_ratings_total']
                    },
                    (place, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                            setRating(place.rating || 4.9);
                            setTotalReviews(place.user_ratings_total || 127);
                        }
                    }
                );
            } catch (err) {
                console.error("Error fetching reviews:", err);
            }
        };

        loadGoogleScript();
    }, [apiKey, placeId]);

    return { rating, totalReviews, serviceRef };
}
