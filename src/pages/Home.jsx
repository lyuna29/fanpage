import React from "react";
import header from "../assets/header.png";
import NavigateBar from "../components/navigatebar/NavigateBar";
import { Contents } from "./Page.styled";

export default function Home() {
  return (
    <div>
      <NavigateBar />
      <img src={header} width="100%" />
      <Contents>
        <p>컨텐츠 모음</p>
        <div>영상</div>
      </Contents>
    </div>
  );
}
