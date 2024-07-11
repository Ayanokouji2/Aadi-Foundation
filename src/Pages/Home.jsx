import React, { useEffect, useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/user.context';

const Login = ({ setUser }) => {

    const navigate = useNavigate();

    const responseFacebook = (response) => {
        // setUserData(response);
        try {

            console.log(response);
            setUser(response);
            console.log('User set in Login.jsx', response);
            navigate('/profile');
        } catch (error) {
            navigate('/');
            console.log('Error in Login.jsx', error.message);
        }
    };

    return (
        <div className='min-h-dvh flex justify-center items-center bg-black text-white'>
            <div className='flex items-center flex-col gap-5 '>
                <p className='text-3xl'>Login with facebook</p>
                <FacebookLogin
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    scope="pages_show_list,read_insights,pages_read_engagement"
                    icon="fa-facebook"
                />
            </div>
        </div>
    );
};

export default Login;