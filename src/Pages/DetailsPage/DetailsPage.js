import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import OrderPage from "./OrderPage/OrderPage";
import Swal from 'sweetalert2'

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get data from localStorage
  const getDataFromLS = () => {
    const data = localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  // delete data from localStorage

  const deleteBook = (movieName) => {
    const filteredBooks = books.filter((element, index) => {
      return element.movieName !== movieName;
    });
    Swal.fire('Successfully Deleted')
      setBooks(filteredBooks);
      
  };

  // set data to localStorage
  const [books, setBooks] = useState(getDataFromLS());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [movieName, setMovieName] = useState("");

  const handleAddBookSubmit = (e) => {
    let book = {
      name,
      email,
      phone,
      movieName,
    };
    setBooks([...books, book]);
    setName("");
    setEmail("");
    setPhone("");
    setMovieName("");
    handleClose()
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <Container>
      <Card className="mt-3">
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={details?.image?.medium}
              style={{ height: 400 }}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{details?.name} </Card.Title>
              <p className="card-text">{details?.summary}</p>
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
          <Form onSubmit={handleAddBookSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                required
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={details?.name}
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Col md={12} xs={12}>
        {books.length < 1 && (
          <div className="fs-1 text-danger fw-bold text-center py-4">
            No ticket are booked yet !{" "}
          </div>
        )}
        {books.length > 0 && (
          <div className="fs-1 text-success fw-bold text-center py-4">
            Total Ticket Booked: {books.length}
          </div>
        )}
      </Col>
      <Table striped bordered hover>
        <OrderPage books={books} deleteBook={deleteBook} />
      </Table>
    </Container>
  );
};

export default DetailsPage;
