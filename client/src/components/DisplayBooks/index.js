import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import DeleteBtn from "../DeleteBtn";

// Exporting both RecipeList and RecipeListItem from this file

// BooksList renders a bootstrap list item
export function BooksList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BooksListItem renders a bootstrap list item containing data from the recipe api call
export function BooksListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} /> 
          </Col>
          <Col size="xs-8 sm-9">
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.URL}
            >
          <h3>{props.title}</h3>
          </a>
          <DeleteBtn 
            onClick={() => props.deleteBook(props.id)}
          />     
          <p>
            {props.authors}
          </p>
            {props.description}
          </Col>
        </Row>
      </Container>
    </li>
  );
}







