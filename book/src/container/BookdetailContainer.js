import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Bookdetail from "../component/Bookdetail";

@inject("Bookstore")
@observer
class BookdetailContainer extends Component {
  onModify = () => {
    this.props.Bookstore.ModifyBook();
  };

  onDelete = () => {
    const book = this.props.Bookstore.getselectbook;
    console.log(book);
    this.props.Bookstore.DeleteBook(book);
  };

  render() {
    const selectBook = this.props.Bookstore.getselectbook;
    return (
      <Bookdetail
        book={selectBook}
        onModify={this.onModify}
        onDelete={this.onDelete}
      />
    );
  }
}

export default BookdetailContainer;
