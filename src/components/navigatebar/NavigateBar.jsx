import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/Users/lyuna/Desktop/fanpage-wook/src/assets/main_logo.png";
import {
  NavItem,
  Navitems,
  StNavLogin,
  Stnavigate,
} from "./NavigateBar.styled";

export default function NavigateBar() {
  const navigate = useNavigate();
  const loginclick = () => {
    console.log("aaa");
    navigate("/auths/login");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <Stnavigate>
      <img onClick={handleLogoClick} src={logo} alt="로고이미지" />
      <Navitems>
        <NavItem to="/cam">직캠</NavItem>
        <NavItem to="/bubble">Bubble</NavItem>
        <NavItem to="/memtwit">멤트</NavItem>
      </Navitems>
      <StNavLogin onClick={loginclick}>로그인</StNavLogin>
    </Stnavigate>
  );
}
