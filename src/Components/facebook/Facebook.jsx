import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState()
    const [pages, setPages] = useState([])
    const navigate = useNavigate();


    const getPages = async () => {
        const response = await axios.get(`https://graph.facebook.com/me/accounts?access_token=${user.data.accessToken}`)
        console.log(response.data.data)
        setPages(response.data.data)
    }
    const responseFacebook = (response) => {
        // setUserData(response);
        setUser({ data: response })
        console.log(response);
        // navigate('/profile');
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <h2>Login with Facebook</h2>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    scope="pages_show_list"
                    icon="fa-facebook"
                />
            </div>

            <button onClick={getPages}>Click Me</button>
        </div>
    );
};

export default Login;