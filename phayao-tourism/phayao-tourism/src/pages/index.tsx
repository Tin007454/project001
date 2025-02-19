import { useEffect, useState } from 'react';
import AttractionCard from '../components/AttractionCard';
import { fetchAttractions } from '../utils/api';

const Home = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAttractions = async () => {
            try {
                const data = await fetchAttractions();
                setAttractions(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadAttractions();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Tourist Attractions in Phayao</h1>
            <div className="attractions-list">
                {attractions.map(attraction => (
                    <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
            </div>
        </div>
    );
};

export default Home;