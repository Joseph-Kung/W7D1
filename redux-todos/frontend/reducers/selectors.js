export const allTodos = (state) => Object.values(state.todos);
window.allTodos = allTodos;

//  {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };
