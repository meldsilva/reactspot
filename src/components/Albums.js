import React from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Albums = (props) => {
    return(
        <React.Fragment>
        <h4 className="text-muted">Albums</h4>

        <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        </React.Fragment>

    );
}
export default Albums;
