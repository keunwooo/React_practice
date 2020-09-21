import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";
import Bookitem from "./Bookitem";

class Booklist extends Component {
  render() {
    const { books, onSelect, onModify, onDelete } = this.props;
    const bookList = this.props.books.map((book) => (
      <Bookitem book={book} onSelect={onSelect} />
    ));

    return (
      <div>
        <Item.Group>{bookList}</Item.Group>
      </div>
    );
  }
}

export default Booklist;
