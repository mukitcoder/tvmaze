import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [displayMovies, setDisplayMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  // search bar
  const onSearchHandler = (e) => {
    const matchedMovies = movies.filter((pd) =>
      pd.show.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if(searchText === ""){
      alert('plz write something')
    }
    else{
      setMovies(matchedMovies);
    }
    e.preventDefault();
  };

  return (
    <Container>
      <Form className="d-flex justify-content-center py-5">
        <Form.Group className="me-2">
          <Form.Control
            type="text"
            placeholder="Search For Movies"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSearchHandler}>
          Search
        </Button>
      </Form>
      <Row xs={1} md={3} className="g-4">
        {movies.map((pd) => (
          <Col key={pd.show.id}>
            <Card>
              <Card.Img variant="top" src={pd.show.image.medium} />
              <Card.Body>
                <Card.Title className="fs-2">{pd.show.name}</Card.Title>
                <Card.Title>Show Type: {pd.show.type}</Card.Title>
                <Card.Title>Language: {pd.show.language}</Card.Title>
                <Card.Title>Genres: {pd.show.genres[0]} | {pd.show.genres[1]}</Card.Title>
              </Card.Body>
              <Link to={`details/${pd.show.id}`} > <Button className="text-white text-decoration-none fw-bold w-100">View Details</Button></Link> 
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movie;
