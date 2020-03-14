import { h } from 'hyperapp'

export default (props) =>
  h('div', { class: 'todo-item__root' }, [
    h('input', { type: 'checkbox', checked: props.done, onchange: props.onToggleDone }),
    h('p', null, [props.text]),
    h('p', null, ['Created on ' + new Date(props.createdAt).toLocaleString()])
  ])
