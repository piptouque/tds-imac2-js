export default {
  toggleDone: (id) => (state) => {
    const itemAtId = state.items.find(item => item.id === id)

    if (itemAtId === undefined) {
      console.error(`Item id ${id} could not be found, this should not happen`)
      return
    }

    return {
      ...state,
      items: state.items
        .filter(item => item.id !== id)
        .concat({ ...itemAtId, done: !itemAtId.done })
    }
  },
  updateTodoInput: (event) => (state) => ({ ...state, addItemInput: event.target.value }),
  addTodoItem: () => (state) => {
    const input = state.addItemInput
    if (input.length === 0) {
      return state
    }
    return {
      ...state,
      items: state.items.concat({
        done: false,
        text: input,
        id: Math.random().toString(16).substring(2, 8),
        createdAt: new Date().toISOString()
      }),
      addItemInput: ''
    }
  }
}
