import { h } from 'hyperapp'
import TodoList from '../TodoList'
import TodoItemInput from '../TodoItemInput'

export default (state, actions) => h('div', { oncreate: () => { actions.fetchTodos() } }, [
  TodoList({
    items: state.items,
    onToggleDone: (id) => () => actions.toggleDone(id)
  }),
  TodoItemInput({
    text: state.addItemInput,
    onInputChange: actions.updateTodoInput,
    onAdd: actions.addTodoItem
  })
])
