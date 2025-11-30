import React, { Component } from "react";
import Books from "./Books";
import Header from "./Header";

export default class MainCode extends Component {
  constructor() {
    super();

    this.state = {
      books: [],

      title: "",
      author: "",
      year: "",
    };
    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  titleHandler(event) {
    let inputTitle = event.target.value;
    this.setState({
      title: inputTitle,
    });
  }
  authorHandler(event) {
    let inputAuthor = event.target.value;
    this.setState({
      author: inputAuthor,
    });
  }
  yearHandler(event) {
    let inputYear = event.target.value;
    this.setState({
      year: inputYear,
    });
  }
  submitHandler(event) {
    event.preventDefault();
    let title = this.state.title;
    let year = this.state.year;
    let author = this.state.author;
    if (title.length && author.length && year.length) {
      let newBook = {
        id: this.state.books.length + 1,
        title,
        author,
        year,
      };
      this.setState((prev) => {
        return {
          books: [...prev.books, newBook],
          title: "",
          author: "",
          year: "",
        };
      });
    } else {
      this.setState((prev) => {
        return {
          books: [...prev.books],
        };
      });
    }
  }
  render() {
    return (
      <div className="conainer">
        <Header></Header>
        <form id="book-form" autocomplete="off" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              onChange={this.titleHandler}
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
            />
          </div>

          <div className="form-group">
            <label for="author">Author</label>
            <input
              onChange={this.authorHandler}
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              onChange={this.yearHandler}
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
            />
          </div>
          <input type="submit" value="Add Book" className="submit-btn" />
        </form>
        <table class="table-container">
          <thead>
            <tr className="tr-cart">
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => {
              return <Books {...book} key={book.id} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
