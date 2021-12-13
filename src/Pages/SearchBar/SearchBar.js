import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const onSearchHandler = (e) => {
    e.preventDefault();
    console.log(searchText);
  };
  return (
    <div>
      <Form className="d-flex justify-content-center mt-5">
        <Form.Group className="me-2">
          <Form.Control
            type="text"
            placeholder="Search For Tv Show"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSearchHandler}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
