import styled, { keyframes } from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../redux/apiCalls";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 36px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #081029 0%, #10224b 45%, #0f172a 100%);
  color: #e2e8f0;
`;

const Grid = styled.div`
  width: min(1120px, 100%);
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 28px;
  animation: ${fadeIn} 0.8s ease both;
  ${mobile({ gridTemplateColumns: "1fr", gap: "20px" })}
`;

const SidePanel = styled.div`
  padding: 34px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 28px;
  backdrop-filter: blur(18px);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.16);
`;

const SideHeading = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 18px;
  line-height: 1.02;
  color: #f8fafc;
`;

const SideText = styled.p`
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 28px;
`;

const BenefitList = styled.div`
  display: grid;
  gap: 16px;
`;

const Benefit = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.9);
`;

const BenefitDot = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 7px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #7dd3fc;
`;

const Card = styled.div`
  position: relative;
  padding: 40px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.16);
  min-height: 560px;
  color: #0f172a;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #111827;
`;

const CardDetail = styled.p`
  font-size: 0.98rem;
  color: #475569;
  margin-bottom: 28px;
`;

const Form = styled.form`
  display: grid;
  gap: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  color: #0f172a;
  font-size: 0.98rem;
  outline: none;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 18px;
  border-radius: 16px;
  border: none;
  background: #2563eb;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const FooterRow = styled.div`
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: #475569;
  font-size: 0.95rem;
`;

const Anchor = styled(Link)`
  color: #2563eb;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #1d4ed8;
  }
`;

const InfoText = styled.p`
  margin-top: 12px;
  color: #64748b;
  font-size: 0.92rem;
`;

const Error = styled.p`
  color: #b91c1c;
  font-weight: 600;
`;

const LoadingLayer = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 5px solid rgba(37, 99, 235, 0.24);
  border-top-color: #2563eb;
  animation: spin 0.95s linear infinite;
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    setValidationError("");
    if (!username.trim()) {
      setValidationError("Please enter a valid username.");
      return;
    }
    if (password !== confirmpassword) {
      setValidationError("Passwords do not match.");
      return;
    }
    register(dispatch, { firstname, lastname, username, email, password });
  };

  return (
    <Container>
      <Grid>
        <SidePanel>
          <SideHeading>Build the future of note sharing.</SideHeading>
          <SideText>
            Create your account and instantly connect with peers, upload notes, and join conversations with an elevated experience.
          </SideText>
          <BenefitList>
            <Benefit>
              <BenefitDot />
              <span>Advanced profile controls and institution support.</span>
            </Benefit>
            <Benefit>
              <BenefitDot />
              <span>Smart onboarding that keeps the same backend contract intact.</span>
            </Benefit>
            <Benefit>
              <BenefitDot />
              <span>Fast, secure registration flows with real-time validation.</span>
            </Benefit>
          </BenefitList>
        </SidePanel>

        <Card>
          {isFetching && (
            <LoadingLayer>
              <Spinner />
            </LoadingLayer>
          )}
          <CardTitle>Create your account</CardTitle>
          <CardDetail>Register with the same API fields used by the backend so your note sharing stays seamless.</CardDetail>
          <Form>
            <Input
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <Input
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              placeholder="Confirm password"
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <SubmitButton onClick={handleClick} disabled={isFetching}>
              {isFetching ? "Creating account..." : "Create Account"}
            </SubmitButton>
            {(validationError || error) && (
              <Error>{validationError || "Something went wrong during registration."}</Error>
            )}
          </Form>

          <FooterRow>
            <span>Already have an account?</span>
            <Anchor to="/login">Sign in</Anchor>
          </FooterRow>

          <InfoText>
            By signing up you agree to the privacy policy and accept the data terms used by NoteChat.
          </InfoText>
        </Card>
      </Grid>
    </Container>
  );
};

export default Register;
