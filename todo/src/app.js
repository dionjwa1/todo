import React from 'react';
import { ItemContext } from './context/Items.js';
import ToDo from './components/todo/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <ItemContext.Provider>
        <ToDo />
      </ItemContext.Provider>

      // app.post('../todo.js', (req, res, next) => {
      //   console.log(req.body);
      //   res.status(201).json({
      //     message: 'This Has Been Created'
      //   });
      // });
    );
  }
}
