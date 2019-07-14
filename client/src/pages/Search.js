import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid"; //Col, Row, 
import { Input, FormBtn } from "../components/Form"; //TextArea,
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
// import DeleteBtn from "../components/DeleteBtn";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron>
          <h3 align="left">Book Search</h3>
          <br />
          <form>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
          <br />
          <br />
          <br />
          </Jumbotron>
        </Container>
        <br />
        <Container fluid>
          <div style={{ clear: "both", border: "solid 2px" }} >
              Results
            <br />

          </div>
        </Container>
      </div>
    );
  }
}

export default Books;

// <Container fluid>
//   <div>
//     hello world
//   </div>
// </Container>

// <Input
// value={this.state.author}
// onChange={this.handleInputChange}
// name="author"
// placeholder="Author (required)"
// />
// <TextArea
// value={this.state.synopsis}
// onChange={this.handleInputChange}
// name="synopsis"
// placeholder="Synopsis (Optional)"
// />

// <form>
// <Input
//   value={this.state.title}
//   onChange={this.handleInputChange}
//   name="title"
//   placeholder="Title (required)"
// />
// <FormBtn
//   disabled={!(this.state.author && this.state.title)}
//   onClick={this.handleFormSubmit}
// >
//   Submit Book
// </FormBtn>
// </form>