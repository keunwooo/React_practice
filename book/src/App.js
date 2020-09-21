import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Bookdetail from "./component/Bookdetail";
import Books from "./Books";
import BooklistContainer from "./container/BooklistContainer";
import BookdetailContainer from "./container/BookdetailContainer";
class App extends Component {
  //북리스트를 읽어오자.

  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      selectBook: Books[0],
    };
  }

  handleSelectBook = (book) => {
    this.setState({
      selectBook: book,
    });
  };

  render() {
    //class는 render 함수!
    return (
      <Container>
        <Grid columns={2} divided>
          <Grid.Column>
            <BooklistContainer />
          </Grid.Column>

          <Grid.Column>
            <BookdetailContainer />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
