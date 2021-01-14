// Nusaiba Mahmood
// ITRJS PP02
// ToDo.js

import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            todo_list:
                [
                    {
                        id: 0,
                        task: 'This is a todo task',
                        done: false
                    },
                    {
                        id: 1,
                        task: 'This is another todo task',
                        done: false
                    }
                ],

            new_todo_item: '',
        };
    }

    handleInputChange(event) {
        this.setState({ new_todo_item: `${event.target.value}` });
    }

    handleCheckbox(event) {
        console.log(`${event.target.checked ? 'was checked' : 'was unchecked'}`);
        console.log(event.target.parentElement);

        const taskChecked = event.target.checked;
        const list_item_id = event.target.parentElement.id;

        const updatedList = this.state.todo_list.map(
            (item) => {
                if (item.id == list_item_id) {
                    return { id: item.id, task: item.task, done: (taskChecked ? true : false) }
                }
                return item;
            }
        )

        console.log(updatedList);
        this.setState({ todo_list: updatedList });
    }

    addItem(event) {
        event.preventDefault();
        console.log('A new task was submitted: ' + this.state.new_todo_item);
        console.log(this.state.todo_list.length);

        const newItem = { id: this.state.todo_list.length, task: this.state.new_todo_item, done: false };
        this.setState({ todo_list: [...this.state.todo_list, newItem] });
        console.log(this.state.todo_list.length);
    }

    removeItem(event) {
        const updatedList = this.state.todo_list.filter((item) => item.id != event.target.parentElement.id);
        this.setState({ todo_list: updatedList });
        console.log(updatedList);
    }

    render() {

        return (
            <div>
                <h1>TO DO LIST</h1>
                <form onSubmit={this.addItem.bind(this)}>
                    <input
                        type="text" value={this.state.new_todo_item} onChange={this.handleInputChange.bind(this)}
                        placeholder='Enter a task to do...' size='35' required
                    />
                    <input type="submit" value="Add Task" />
                </form>

                <h2>TO DO: </h2>
                <ul style={{ listStyleType: "none" }}>
                    {
                        this.state.todo_list.map(
                            (item) => <li key={`${item.id}`} id={`${item.id}`}>
                                <button style={{ background: 'salmon' }} onClick={this.removeItem.bind(this)}>x</button>
                                <input type="checkbox" onChange={this.handleCheckbox.bind(this)} />
                                {item.done ? <del>{item.task}</del> : `${item.task}`}
                            </li>
                        )
                    }
                </ul>
            </div>

        );
    }
}

export default ToDo;
