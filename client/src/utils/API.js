import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
};

// <br />
// <Container fluid>
//   <div style={{ clear: "both", border: "solid 2px" }} >
//       Results
//     <br />
//     <BooksList>
//       <BooksListItem 
//         title = "The Hunger Games: Special Edition"
//         description = "This Special Edition of The Hunger Games includes the most extensive interview Suzanne Collins has given since the publication of The Hunger Games; an absorbing behind-the-scenes look at the creation of the series; and an engaging archival conversation between Suzanne Collins and YA legend Walter Dean Myers on writing about war. The Special Edition answers many questions fans have had over the years, and gives great insight into the creation of this era-defining work. In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister’s place in the Games. But Katniss has been close to death before—and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love."
//         authors = "Suzanne Collins"
//         URL = "https://books.google.com/books?id=Yz8Fnw0PlEQC&printsec=frontcover&dq=the+hunger+games&hl=&cd=1&source=gbs_api#v=onepage&q=the%20hunger%20games&f=false"
//         thumbnail = "https://books.google.com/books/content?id=Yz8Fnw0PlEQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
//       />
//     </BooksList>
//   </div>
// </Container>


// {this.state.books.length ? (
// <List>
//   {this.state.books.map(book => (
//     <ListItem key={book._id}>
//       <Link to={"/books/" + book._id}>
//         <strong>
//           {book.title} by {book.author}
//         </strong>
//       </Link>
//       <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//     </ListItem>
//   ))}
// </List>
// ) : (
// <h3>No Results to Display</h3>
// )}