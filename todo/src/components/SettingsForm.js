import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ThemeContext } from '../context/Theme.js';

function SettingsForm() {

    // this varible will equal the `value` on the ThemeProvider props.
    const theme = useContext(ThemeContext);

    return (

        <>
        <Card style={{width:'50%'}}>
            <span>Day/Dark Mode Toggle</span>
            <input onClick={theme.toggleMode} type="checkbox" checked data-toggle="toggle" data-size="lg" label="Theme Mode" onChange={theme.toggleMode} />
        </Card>
        </>
    )
}

export default SettingsForm;