import React, { PureComponent } from 'react';
import GoogleLogin from 'react-google-login';

export default class Login extends PureComponent {  
    state = {
    data: []
  }
  
  render() {
    return (
        <GoogleLogin
            clientId="558923625260-g1i4te4f65rj63irdltjr2vfv2e0lj5m.apps.googleusercontent.com"
            buttonText="Login with google"
            onSuccess={this.props.responseGoogle}
            onFailure={this.props.responseGoogle}
            cookiePolicy={'single_host_origin'}
      />
    );
  }
}