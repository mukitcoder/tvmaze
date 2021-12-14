import React from "react";
import { Button } from "react-bootstrap";

const OrderPage = ({ books, deleteBook }) => {
  return (
    <>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Movie</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.movieName}>
            <td>{index + 1}</td>
            <td>{book.name}</td>
            <td>{book.email}</td>
            <td>{book.phone} </td>
            <td>{book.movieName} </td>
            <td>
              <Button onClick={()=>deleteBook(book.movieName)}>Delete</Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default OrderPage;
