import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { login } from "../../redux/apiCalls";
import { mobile } from "../../responsive.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #081029 0%, #10224b 45%, #0f172a 100%);
  color: #e2e8f0;
`;

const Grid = styled.div`
  width: min(1120px, 100%);
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
  animation: ${fadeIn} 0.8s ease both;
  ${mobile({ gridTemplateColumns: "1fr", gap: "20px" })}
`;

const Hero = styled.div`
  padding: 34px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 28px;
  backdrop-filter: blur(18px);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.18);
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 1.05;
  margin-bottom: 18px;
  letter-spacing: -0.04em;
  color: #f8fafc;
`;

const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.82);
  margin-bottom: 28px;
`;

const FeatureList = styled.div`
  display: grid;
  gap: 14px;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 0.96rem;
  color: rgba(255, 255, 255, 0.88);
`;

const FeatureBullet = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 6px;
  border-radius: 50%;
  background: #7dd3fc;
  flex-shrink: 0;
`;

const Card = styled.div`
  position: relative;
  padding: 34px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 28px;
  min-height: 520px;
  box-shadow: 0 40px 120px rgba(15, 23, 42, 0.16);
  border: 1px solid rgba(148, 163, 184, 0.22);
  color: #0f172a;
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 16px;
  color: #111827;
`;

const CardSubtitle = styled.p`
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
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.12);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 16px 18px;
  border-radius: 16px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  background: #2563eb;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 14px 26px rgba(37, 99, 235, 0.24);
  }
  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
`;

const HelperText = styled.p`
  font-size: 0.92rem;
  color: #64748b;
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 0.95rem;
  color: #475569;
`;

const Anchor = styled(Link)`
  color: #2563eb;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #1d4ed8;
  }
`;

const Error = styled.div`
  color: #b91c1c;
  font-size: 0.95rem;
  font-weight: 600;
`;

const LoadingLayer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.92);
  border-radius: 28px;
`;

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 5px solid rgba(37, 99, 235, 0.24);
  border-top-color: #2563eb;
  animation: spin 0.9s linear infinite;
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { identifier, password });
  };

  return (
    <Container>
      <Grid>
        <Hero>
          <HeroTitle>Next-generation note sharing</HeroTitle>
          <HeroText>
            Welcome back to an upgraded NoteChat experience. Fast authentication,
            secure sessions, and an intelligent interface designed for serious learners.
          </HeroText>
          <FeatureList>
            <FeatureItem>
              <FeatureBullet />
              Secure sign-in with your existing account.
            </FeatureItem>
            <FeatureItem>
              <FeatureBullet />
              Fast access to notes, conversations, and profile insights.
            </FeatureItem>
            <FeatureItem>
              <FeatureBullet />
              Built to stay in sync with the current backend API contract.
            </FeatureItem>
          </FeatureList>
        </Hero>

        <Card>
          {isFetching && (
            <LoadingLayer>
              <Spinner />
            </LoadingLayer>
          )}
          <CardTitle>Sign in to continue</CardTitle>
          <CardSubtitle>Use the same email or username plus password from your current account.</CardSubtitle>
          <Form>
            <Input
              placeholder="Email or username"
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button onClick={handleClick} disabled={isFetching}>
              {isFetching ? "Signing in..." : "Login"}
            </Button>
            {error && <Error>Unable to login. Please check your credentials and try again.</Error>}
          </Form>
          <LinkRow>
            <HelperText>Need a new account?</HelperText>
            <Anchor to="/register">Create one now</Anchor>
          </LinkRow>
          <LinkRow>
            <HelperText>Want to explore without signing in?</HelperText>
            <Anchor to="/">Browse notes</Anchor>
          </LinkRow>
        </Card>
      </Grid>
    </Container>
  );
};

export default Login;
