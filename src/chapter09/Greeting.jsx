import React, { useState } from "react";

function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props){
    return <h1>회원가입을 해주세요</h1>
}

function Greeting(props){
    const isLoggedIn=props.isLoggedIn;

    return isLoggedIn? <UserGreeting/>:<GuestGreeting/>

    // if(isLoggedIn){
    //     return <UserGreeting/>
    // }
    // return <GuestGreeting/>;
}
export default Greeting;