import React, { useEffect } from 'react';

function FacebookLogin() {
    useEffect(() => {
        // Load the Facebook SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Initialize the Facebook SDK after it has loaded
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: process.env.REACT_APP_FACEBOOK_APP_ID,// Replace with your Facebook app ID
                cookie: true,
                xfbml: true,
                version: 'v2.7' // Ensure this is a valid version
            });

            window.FB.AppEvents.logPageView();
        };
    }, []);

    const handleFBLogin = () => {
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');
                window.FB.api('/me', { fields: 'name,email' }, function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    console.log('Your email is ' + response.email);
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, { scope: 'public_profile,email' });
    };

    return (
        <div>
            <h1>Facebook Login Example</h1>
            <button onClick={handleFBLogin}>Login with Facebook</button>
        </div>
    );
}

export default FacebookLogin;
