import { useContext } from 'react';

import { AuthContext } from '../../context/Auth';

function Sign(props) {

    const { isAuthenticated, isAuthorized } = useContext(AuthContext);
console.log(props);
    return (
        <>
            {(isAuthenticated && isAuthorized(props.capability))
                ? props.capability
                : null
            }
        </>
    )
}

export default Sign;