import React, {Component} from 'react';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className='todo-list'>
        <div className='todo-list__header'>
          <form className='todo-list__body' onSubmit={this.props.addItem}>
            <input 
              className='todo-list__field'
              placeholder='Task...'
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
              />
            <button className='todo-list__btn' type='submit'>
              Add Task
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;