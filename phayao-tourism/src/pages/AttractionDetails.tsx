import React from 'react';
import { useParams } from 'react-router-dom';

const AttractionDetails = () => {
    const { id } = useParams();

    // Sample data for attractions (this would typically come from an API or a database)
    const attractions = [
        {
            id: '1',
            name: 'Wat Phra That Jom Thong',
            description: 'A beautiful temple located on a hilltop with stunning views of Phayao.',
            image: '/assets/images/wat_phra_that_jom_thong.jpg',
        },
        {
            id: '2',
            name: 'Phayao Lake',
            description: 'A serene lake perfect for boating and enjoying the sunset.',
            image: '/assets/images/phayao_lake.jpg',
        },
        // Add more attractions as needed
    ];

    const attraction = attractions.find(attraction => attraction.id === id);

    if (!attraction) {
        return <div>Attraction not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{attraction.name}</h1>
            <img src={attraction.image} alt={attraction.name} className="w-full h-auto my-4" />
            <p className="text-lg">{attraction.description}</p>
        </div>
    );
};

export default AttractionDetails;