import { Search, Chat, AccountCircle, ExitToApp } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, search } from "../redux/userRedux";

const Container = styled.div`
  width: 100%;
  padding: 18px 32px;
  background: rgba(15, 23, 42, 0.94);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  ${mobile({ padding: "14px 18px" })}
`;

const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  ${mobile({ flexDirection: "column", alignItems: "stretch" })}
`;

const Brand = styled(Link)`
  color: #ffffff;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  text-decoration: none;
  ${mobile({ textAlign: "center" })}
`;

const SearchContainer = styled.form`
  flex: 1;
  max-width: 440px;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.14);
  ${mobile({ width: "100%", marginTop: "12px" })}
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #f8fafc;
  font-size: 0.95rem;
  &::placeholder {
    color: #cbd5e1;
  }
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  color: #60a5fa;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  ${mobile({ justifyContent: "center", flexWrap: "wrap" })}
`;

const ActionLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #e2e8f0;
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 14px;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: rgba(96, 165, 250, 0.12);
    transform: translateY(-1px);
  }
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: rgba(96, 165, 250, 0.14);
  color: #dbeafe;
  padding: 10px 18px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: rgba(96, 165, 250, 0.2);
    transform: translateY(-1px);
  }
`;

const Username = styled.span`
  font-size: 0.95rem;
  color: #f8fafc;
`;

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchedValue, setsearchedValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(search(searchedValue));
  };

  useEffect(() => {
    dispatch(search(null));
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <Brand to="/">NoteChat</Brand>
        <SearchContainer onSubmit={searchHandler}>
          <SearchInput
            placeholder="Search notes, authors, chats..."
            onChange={(e) => setsearchedValue(e.target.value)}
            value={searchedValue}
          />
          <IconButton type="submit">
            <Search style={{ fontSize: 22 }} />
          </IconButton>
        </SearchContainer>
        <NavActions>
          {currentUser ? (
            <>
              <ActionLink to={`/profile/${currentUser._id}`}>
                <AccountCircle />
                <Username>{currentUser.username}</Username>
              </ActionLink>
              <ActionButton onClick={logoutHandler}>
                <ExitToApp /> Logout
              </ActionButton>
            </>
          ) : (
            <>
              <ActionLink to="/login">Sign In</ActionLink>
              <ActionLink to="/register">Register</ActionLink>
            </>
          )}
          <ActionLink to="/searchuser">
            <Chat /> Chat
          </ActionLink>
        </NavActions>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
