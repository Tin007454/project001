import React from 'react';

interface AttractionCardProps {
    id: string;
    name: string;
    image: string;
    description: string;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ id, name, image, description }) => {
    return (
        <div className="attraction-card">
            <img src={image} alt={name} className="attraction-image" />
            <h2 className="attraction-name">{name}</h2>
            <p className="attraction-description">{description}</p>
            <a href={`/attractions/${id}`} className="attraction-link">View Details</a>
        </div>
    );
};

export default AttractionCard;