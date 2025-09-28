import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface TCardComponentProps {
    title: string,
    image?: string,
    content: string,
    onClick?: () => void
}

const CardComponent: React.FC<TCardComponentProps> = ({ title, image, content, onClick }) => {
    return (
        <Card style={{ width: '18rem', textAlign: 'left' }}>
            {image && <Card.Img variant='top' src={image} />}
            <Card.Body>
                <Card.Title  style={{ fontWeight: 'bold' }}>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Button variant="primary" onClick={onClick}>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;