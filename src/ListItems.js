import React, {Component} from 'react';

class ListItems extends Component {
  createTasks = item => {
    return (
      <li 
        className='list-items__item-task'
        key={item.key} 
        onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return (
      <ul className='list-items'>
        {listItems}
      </ul>
    );
  }
}

export default ListItems;