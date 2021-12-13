import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset()
  };

  return (
    <Container>
      <Card className="mb-3">
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={details?.image?.medium} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{details?.name} </Card.Title>
              <p class="card-text">
               {details?.summary}
              </p>
            </Card.Body>
            <Button onClick={handleShow}>Book Movie Ticket</Button>
          </Col>
        </Row>
      </Card>

      {/* Modal Start from here */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Your Ticket Now!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Form Start */}
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" {...register("name")}  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" {...register("number")}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" value={details?.name} {...register("movieName")}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DetailsPage;
