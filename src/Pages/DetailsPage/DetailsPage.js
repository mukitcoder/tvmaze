import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <Container>
      <Card className="mb-3">
  <Row>
    <Col md={4}>
    <Card.Img variant="top" src={details?.image?.medium} />
    </Col>
    <Col md={8}>
      <Card.Body>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </Card.Body>
    </Col>
  </Row>
</Card>
    </Container>
  );
};

export default DetailsPage;
