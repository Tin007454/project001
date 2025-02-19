import React from 'react';
import AttractionCard from '../components/AttractionCard';

const attractions = [
    {
        id: 1,
        name: 'Wat Analayo',
        image: '/assets/images/wat-analayo.jpg',
        description: 'A beautiful temple known for its serene atmosphere and stunning architecture.'
    },
    {
        id: 2,
        name: 'Phayao Lake',
        image: '/assets/images/phayao-lake.jpg',
        description: 'A picturesque lake perfect for relaxation and enjoying nature.'
    },
    {
        id: 3,
        name: 'Doi Phu Nang National Park',
        image: '/assets/images/doi-phu-nang.jpg',
        description: 'A national park offering breathtaking views and hiking opportunities.'
    },
    // Add more attractions as needed
];

const Home: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Explore Phayao Province</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {attractions.map(attraction => (
                    <AttractionCard 
                        key={attraction.id} 
                        name={attraction.name} 
                        image={attraction.image} 
                        description={attraction.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;