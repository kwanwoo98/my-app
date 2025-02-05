import React, { useState } from "react";
import Toolbar from "./ToolBar";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            onClickLogout={onClickLogout} />
            <div style={{padding : 16}}>집에가고싶다</div>
        </div>
    )
}
export default LandingPage;