import React from 'react';



function Form(props) {
    return(
    <form onSubmit={props.handleSubmit}>

        <h2 style={{color:'blue'}}>Add To Do Item</h2>

        <label>
            <span style={{backgroundColor:'orange'}}>To Do Item</span>
            <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
            <span>Assigned To</span>
            <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
            <span>Difficulty</span>
            <input onChange={props.handleChange} defaultValue={3}  style={{background:'green'}}type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
            <button style={{backgroundColor:'gold'}} type="submit">Add Item</button>
        </label>

        <button style={{backgroundColor:'pink'}}type="submit">Previous</button><button style={{backgroundColor:'green'}} type="submit">Next</button>
    </form>
    );}

export default Form;
