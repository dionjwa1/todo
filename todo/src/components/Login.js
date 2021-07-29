
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { AuthContext } from '../context/Auth.js';

function Login() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        login(username, password);
    }

    return (
        <div className="login">
            {isAuthenticated
                ? <Button onClick={logout}>Logout</Button>
                : <form onSubmit={handleSubmit}>
                    <input name="username" id="usename" placeholder="username" />
                    <input name="password" id="password" placeholder="password" />
                    <Button type='submit'>login</Button>
                </form>
            }
        </div>
    )
}

export default Login;