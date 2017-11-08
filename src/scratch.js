import "babel-polyfill";
import { h, render } from "preact";

const TodoItem = ({ name }) => <li>{name}</li>;

const TodoList = ({ items }) => (
  <ul>{items.map((item, i) => <TodoItem name={item.name} />)}</ul>
);

const root = document.querySelector("#maji-app");
root.innerHTML = "";

const todoItems = [
  { name: "Todo 1", done: true },
  { name: "Todo 2", done: false },
  { name: "Todo 3", done: false }
];

render(
  <section>
    <h1>Hello there</h1>
    <p>This is a html page</p>
    <p>With some paragraphs</p>
    <TodoList items={todoItems} />
  </section>,
  root,
  root.firstChildElement
);

if (process.env.NODE_ENV !== "production") {
  require("preact/devtools");

  if (module.hot) {
    module.hot.accept();
  }
}
