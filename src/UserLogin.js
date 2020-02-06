import React, { useState, Component } from 'react';
import GoogleLogin from './GoogleLogin';


class UserLogin extends Component {

    state = {
        user: false,
        profile: '',
        userInfo:null
    }

    static getDerivedStateFromProps(props, state){
        if(state.userInfo == null){
            const user = JSON.parse(localStorage.getItem('userData'));
            console.log('user',user)
            return {
                userInfo:user
            }
        }
    }

    LoginResponse=(response)=> {
        const profileObj = response.profileObj;
        const name = profileObj.name;
        const email = profileObj.email;
        const userImage = profileObj.imageUrl;
        const userData = {
            name: name,
            email: email,
            userImage: userImage
        }
        this.setState({userInfo:userData})
        localStorage.setItem('userData',JSON.stringify(userData));
      
    }
    render() {
        const {userInfo} = this.state;
        if(!userInfo) {
            return (
            
            <div style={{marginLeft: '20px'}}>


                <GoogleLogin responseGoogle={this.LoginResponse} />
                </div>
            )
        }
        return (
            <div
                style={{
                    border: '1px solid #eee',    
                    display: 'flex',
                    maxWidth: 'fit-content',
                    boxShadow: '0px 5px 5px 0px #d4d4d4',
                    marginLeft: '20px'
                }}
            >
                <img src={userInfo && userInfo.userImage}/>
                <div style={{padding: '0 12px'}}>
                    <p style={{fontWeight: 'bold'}}>{userInfo && userInfo.name}</p>
                <p style={{fontWeight: 'normal'}}> {userInfo && userInfo.email}</p>
                    
                </div>
            </div>
        )
    }
}
export default UserLogin;