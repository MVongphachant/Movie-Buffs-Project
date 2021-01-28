export interface ApiResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieDetailsObject[];
}

export interface MovieDetailsObject {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: [number];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    show_details?: boolean;
}

export interface SearchCriteriaInterface {
    year: number;
    genre: number;
    rating: number;
}