import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StBtn, StInput, StLayout, StLogo, Wrapper } from "./Auths.styled";
import logo from "../../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogoClick = () => {
    navigate("/auths/login");
  };
  const handleLogInClick = async () => {
    const { id, password } = await login({
      id: id,
      password: password,
    });
    alert("로그인이 되었습니다");
    setUser({ id, password });
    navigate("/");
  };

  const handleSignUpClick = async () => {
    navigate("/auths/signup");
  };

  return (
    <Wrapper>
      <StLayout>
        <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
        <StInput>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="이메일"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </StInput>
        <StBtn>
          <button type="submit" onClick={handleLogInClick}>
            로그인
          </button>
          <button type="submit" onClick={handleSignUpClick}>
            회원가입
          </button>
        </StBtn>
      </StLayout>
    </Wrapper>
  );
}
