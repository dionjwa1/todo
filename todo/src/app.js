import React from 'react';
import { ItemContext } from './context/Items.js';
import ToDo from './components/todo/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsForm from './components/SettingsForm.js';
import { useContext } from 'react';
import { ThemeContext } from './context/Theme.js';
import Sign from './components/todo/Signin.js'
import Login from './components/Login.js';

function App() {
  const theme = useContext(ThemeContext);
  const itemTheme = useContext(ItemContext);
  console.log(itemTheme);
  return (
   
        <div className={`App ${theme.mode}`}>
          <Login />
        <Sign capability="delete"/>
          <SettingsForm/>
          <ToDo /> 
          {/* <p>It Works{itemTheme.itemNumber}</p> */}
        </div>
    
  );
}
export default App;

      // app.post('../todo.js', (req, res, next) => {
      //   console.log(req.body);
      //   res.status(201).json({
      //     message: 'This Has Been Created'
      //   });
      // })

