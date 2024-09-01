// Get constants from environmental variables.
import React from "react";

const API_KEY = process.env["REACT_APP_API_KEY"]
const API_URL = process.env["REACT_APP_MOVIE_API"]

interface HomeComponentProps {
    searchParams: string
}

// export default function UserLayout({children}: { children: React.ReactNode}) {
export default async function HomeComponent ({ searchParams }: { searchParams: any}) {
    const param = searchParams.genre || "trending";
    const genre = `${param === "trending" ? "/trending/all/week" : "/movie/top_rated"}`
    const url = `${API_URL}${genre}?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url, {
        next: {
            revalidate: 86400, // Caches and removes cache after 1 day.
        }
    })
    const data = await response.json();
    if(!response.ok) throw new Error("Failed to fetch data.")

    const results = data.results;
    return (
        <div>
            <h1>Hello there, I am a server component.</h1>
        </div>
    )
}
