import { Link } from "react-router-dom";
import styled from "styled-components";

export const Stnavigate = styled.div`
  width: 100%;
  background-color: #9dafd8;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
  img {
    width: 400px;
    height: 70px;
    margin: 10px;
  }
  button {
    width: 70px;
    height: 30px;
    margin: 10px;
  }
`;
export const Navitems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const StNavLogin = styled.button`
  border: 0;
  border-radius: 10px;
`;
