declare namespace google.maps {
    namespace places {
        class PlacesService {
            constructor(attrContainer: HTMLDivElement | null);
            getDetails(
                request: PlaceDetailsRequest,
                callback: (result: PlaceResult | null, status: PlacesServiceStatus) => void
            ): void;
        }

        interface PlaceDetailsRequest {
            placeId: string;
            fields?: string[];
        }

        interface PlaceResult {
            rating?: number;
            user_ratings_total?: number;
            reviews?: PlaceReview[];
        }

        interface PlaceReview {
            author_name: string;
            relative_time_description: string;
            text: string;
            rating: number;
            profile_photo_url: string;
        }

        enum PlacesServiceStatus {
            OK = 'OK',
            ZERO_RESULTS = 'ZERO_RESULTS',
            NOT_FOUND = 'NOT_FOUND',
            // Add other statuses as needed
        }
    }
}

interface Window {
    google: typeof google;
}
