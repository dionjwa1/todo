import React from 'react';
import { Card } from 'react-bootstrap';

function List(props) {

    return (
        <>
                {props.list.map(item => (
                    <Card style={{width:'50%'}} key={item.id}>
                        <p>{item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <p>THIS IS WHERE IT IS</p>
                        <button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</button>
                        <hr />
                    </Card>
                ))
            }
        </>
    );
}

export default List;