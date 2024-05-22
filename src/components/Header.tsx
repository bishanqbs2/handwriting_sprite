import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const headImage = pathname == "/home" ? "logo.png" : "home_icon.png";

  const headText: any = {
    home: "media/img/oxford_logo.png",
    before: "New South Wales Foundation Style alphabet – Before you write",
    lowercase: "New South Wales Foundation Style alphabet – Lower-case letters",
    uppercase: "New South Wales Foundation Style alphabet – Upper-case letters",
    num: "New South Wales Foundation Style alphabet – Numbers",
    words: "New South Wales Foundation Style alphabet – Oxford Wordlist words",
    own: "New South Wales Foundation Style alphabet – Your own words",
  };

  function toggle_full_screen() 
  {
    // console.log(document);
    // var documents = document.getElementById('wrapper')
    // console.log(document.fullscreenElement,document.fullscreenElement == null);
    
    
      if ((document.fullscreenElement && document.fullscreenElement !== null))
      {
        document.exitFullscreen()  
              
      }
      else
      {
        document.documentElement.requestFullscreen()   
      }
  }


  
  return (
    <header>
      <Link to={"/home"} className="logo">
        <img src={process.env.PUBLIC_URL + "/media/img/" + headImage} alt="" />
      </Link>
      <div className="header_text">{pathname !== "/home" && headText[pathname.slice(1)]} 
        {pathname == "/home" && <img src={headText[pathname.slice(1)]}/>}
      </div>
      {/* <div className="header_text">Oxford</div> */}
      <div className="hdr_btn" onClick={toggle_full_screen}>
        <img src={process.env.PUBLIC_URL + "/media/img/button_1.png"} alt="" />
      </div>
    </header>
  );
};

export default Header;
