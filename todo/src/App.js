import React from "react";
import "./App.css";
import TodoListContainer from "./container/TodoListContainer";
import TodoEditContainer from "./container/TodoEditContainer";

import { Grid, Image } from "semantic-ui-react";

function App() {
  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <h1>일정표</h1>
        </Grid.Column>
        <Grid.Column>
          <TodoEditContainer />
        </Grid.Column>
        <Grid.Column>
          <TodoListContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
