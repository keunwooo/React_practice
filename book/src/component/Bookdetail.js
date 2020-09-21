import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

class Bookdetail extends Component {
  render() {
    const { book, onModify, onDelete } = this.props;

    return (
      <Card>
        <Image src={book.imgUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{book.title}</Card.Header>
          <Card.Meta>
            <span className="date">
              {book.author}&nbsp;{book.publisher}
            </span>

            <p>
              <span className="date">prcie : {book.price}</span>
            </p>
          </Card.Meta>
          <Card.Description>{book.introduce}</Card.Description>
        </Card.Content>

        <Button primary onClick={onModify}>
          내용 수정하기
        </Button>
        <Button primary onClick={onDelete}>
          삭제하기
        </Button>
      </Card>
    );
  }
}

export default Bookdetail;
