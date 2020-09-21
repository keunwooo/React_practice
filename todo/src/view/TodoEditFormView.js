import React, { PureComponent } from "react";
import { Form, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class TodoEditFormView extends PureComponent {
  //
  constructor(props) {
    super(props);
  }

  render() {
    //
    const { todo, onSetTodoProp, onAddTodo, onModify, onDelete } = this.props;

    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            value={todo && todo.title ? todo.title : ""}
            onChange={(e) => onSetTodoProp("title", e.target.value)}
          />
          <Form.Field>
            <label>Date</label>
            <DatePicker
              showTimeSelect
              selected={todo && todo.date ? moment(todo.date).toDate() : null}
              dateFormat="yyyy-MM-dd HH:mm"
              timeFormat="HH:mm"
              timeIntervals={15}
              onChange={(date) => onSetTodoProp("date", date.valueOf())}
            />
          </Form.Field>
        </Form.Group>
        <Button primary onClick={onAddTodo}>
          추가하기
        </Button>
        <Button primary onClick={onDelete}>
          삭제하기
        </Button>
        <Button primary onClick={onModify}>
          수정하기
        </Button>
      </Form>
    );
  }
}

export default TodoEditFormView;
