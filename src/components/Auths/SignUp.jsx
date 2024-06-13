import { useState } from "react";
import { StBtn, StInput, StLayout, StLogo, Wrapper } from "./Auths.styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleLogoClick = async () => {
    navigate("/auths/login");
  };

  const handleSignUpClick = async () => {
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/auths/login");
    }
  };
  return (
    <Wrapper>
      <StLayout>
        <StInput>
          <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀변호를 입력하세요"
          />
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
        </StInput>
        <StBtn>
          <button type="submit" onClick={handleSignUpClick}>
            가입하기
          </button>
        </StBtn>
      </StLayout>
    </Wrapper>
  );
}
