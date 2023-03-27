import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CourseCard = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/cursos/detalle-curso">
            <Card.Link>Card Link</Card.Link>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
