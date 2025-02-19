import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchAttractions } from '../utils/api';
import AttractionCard from '../components/AttractionCard';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        const attractions = await fetchAttractions(query);
        setResults(attractions);
        setLoading(false);
    };

    return (
        <div>
            <h1>Search Attractions</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for attractions..."
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            <div>
                {results.map((attraction) => (
                    <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;