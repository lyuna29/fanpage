import { useState } from "react";
import { StBtn, StInput, StLayout, StLogo, Wrapper } from "./Auths.styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabaseClient";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const handleLogoClick = async () => {
    navigate("/auths/login");
  };

  const handleSignUpClick = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      nickname: nickname,
    });
    if (error) {
      throw error;
    }
    console.log(data);
    const { data: user } = await supabase.from("users").insert({
      id: data.user.id,
      created_at: data.user.created_at,
      email: data.user.email,
      nickname: nickname,
    });
    if (!email || !password || !nickname) {
      alert("내용을 모두 입력하세요.");
    }

    setForm({
      nickname: nickname,
      email: email,
      password: password,
    });
    alert("회원가입 성공!");
    navigate("/auths/login");
  };
  return (
    <Wrapper>
      <StLayout>
        <StLogo onClick={handleLogoClick} src={logo} alt="로고이미지" />
        <StInput>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
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
