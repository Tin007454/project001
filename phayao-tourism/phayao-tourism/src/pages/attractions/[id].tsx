import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { fetchAttractionById } from '../../utils/api';

interface Attraction {
    id: string;
    name: string;
    description: string;
    image: string;
}

interface AttractionProps {
    attraction: Attraction | null;
}

const AttractionDetail: React.FC<AttractionProps> = ({ attraction }) => {
    if (!attraction) {
        return <div>Attraction not found</div>;
    }

    return (
        <div>
            <h1>{attraction.name}</h1>
            <img src={attraction.image} alt={attraction.name} />
            <p>{attraction.description}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const attraction = await fetchAttractionById(id as string);

    return {
        props: {
            attraction,
        },
    };
};

export default AttractionDetail;