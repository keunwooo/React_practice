import { observable, computed, action } from "mobx";
import Books from "../Books";

class Bookstore {
  @observable books = Books;
  @observable selectbook = Books[0];

  @computed
  get getbooks() {
    return this.books ? this.books.slice() : [];
  }

  @computed
  get getselectbook() {
    return this.selectbook ? this.selectbook : {};
  }

  @action
  selectBook(book) {
    this.selectbook = book;
  }

  @action
  ModifyBook(book) {
    console.log("modify");
  }

  @action
  DeleteBook(book) {
    //console.log("delete");
    //console.log(book);
    this.books = this.books.filter((book1) => book1.ISBN !== book.ISBN);
  }
}

export default new Bookstore();
