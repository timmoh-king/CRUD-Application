import { categories } from './FakeCategories';

const todos = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    todo: "Go hiking with the apprentice cloud team",
    category: { id: "5b21ca3eeb7f6fbccd471825", name: "Later" },
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    todo: "finalize on the crud application project",
    category: { id: "5b21ca3eeb7f6fbccd471818", name: "Urgent" },
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    todo: "Go party at canniva groud",
    category: { id: "5b21ca3eeb7f6fbccd471820", name: "Important" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd471819",
    todo: "do studies ",
    category: { id: "5b21ca3eeb7f6fbccd471814", name: "Delegate" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd47181a",
    todo: "Visit my friends ",
    category: { id: "5b21ca3eeb7f6fbccd471814", name: "Delegate" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd47181b",
    todo: "a trip to castle forest",
    category: { id: "5b21ca3eeb7f6fbccd471814", name: "Delegate" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd47181e",
    todo: "attend church service",
    category: { id: "5b21ca3eeb7f6fbccd471820", name: "Important" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd47181f",
    todo: "Sleep the whole day",
    category: { id: "5b21ca3eeb7f6fbccd471820", name: "Important" }, 
 },
  {
    id: "5b21ca3eeb7f6fbccd47181g",
    todo: "Work on the backend api",
    category: { id: "5b21ca3eeb7f6fbccd471818", name: "Urgent" }, 
 },
 {
    id: "5b21ca3eeb7f6fbccd47181h",
    todo: "Browse other questions tagged ",
    category: { id: "5b21ca3eeb7f6fbccd471818", name: "Urgent" }, 
 },
 {
    id: "5b21ca3eeb7f6fbccd47181i",
    todo: "go partoh Goh partoh",
    category: { id: "5b21ca3eeb7f6fbccd471825", name: "Later" }, 
 }
];

export function getTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find(t => t.id === id);
}

export function saveTodo(todo) {
  let todoInDb = todos.find(t => t.id === todo.id) || {};
  todoInDb.todo = todo.todo;
  todoInDb.category = categories.find(g => g.id === todo.categoryId);

  if (!todoInDb.id) {
    todoInDb.id = Date.now().toString();
    todos.push(todoInDb);
  }

  return todoInDb;
}

export function deleteTodo(id) {
  let todoInDb = todos.find(m => m.id === id);
  todos.splice(todos.indexOf(todoInDb), 1);
  return todoInDb;
}
