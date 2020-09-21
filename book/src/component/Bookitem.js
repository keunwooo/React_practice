import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";

class Bookitem extends Component {
  render() {
    const { book, onSelect } = this.props;
    //console.log(book);

    return (
      <div>
        <Item onClick={() => onSelect(book)}>
          <Item.Image size="small" src={book.imgUrl} />

          <Item.Content>
            <Item.Header as="title">{book.title}</Item.Header>
            <Item.Description>
              <p>{book.price}</p>
              <p>{book.author}</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </div>
    );
  }
}

export default Bookitem;
