import React, { useEffect } from 'react';

function FacebookLogin() {
    useEffect(() => {
        // Initialize the Facebook SDK
        window.fbAsyncInit = function() {
            window.FB.init({
                appId: '1186718379003926', 
                cookie: true,
                xfbml: true,
                version: 'v12.0'
            });

            window.FB.AppEvents.logPageView();
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

    const handleFBLogin = () => {
        window.FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');
                window.FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'public_profile,email'});
    };

    return (
        <div>
            <h1>Facebook Login Example</h1>
            <button onClick={handleFBLogin}>Login with Facebook</button>
        </div>
    );
}

export default FacebookLogin;
