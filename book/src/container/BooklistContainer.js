import React, { Component } from "react";
import Booklist from "../component/Booklist";
import { observer, inject } from "mobx-react";

@inject("Bookstore")
@observer
class BooklistContainer extends Component {
  handleSelectBook = (book) => {
    this.props.Bookstore.selectBook(book);
  };

  render() {
    let books = this.props.Bookstore.getbooks;
    return <Booklist books={books} onSelect={this.handleSelectBook} />;
  }
}

export default BooklistContainer;
