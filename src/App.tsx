import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let tasks1 = [
        {id: 1, title: 'CSS', isDone: true},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'JS', isDone: false}
    ]
    let tasks2 = [
        {id: 1, title: 'Terminator', isDone: true},
        {id: 2, title: 'XXX', isDone: false},
        {id: 3, title: 'Capitan America', isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title='What to learn' tasks={tasks1} title2={100200}/>
            <Todolist title='Movies' tasks={tasks2}/>
        </div>
    );
}


export default App;
