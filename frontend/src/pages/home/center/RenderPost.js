import React, { useContext } from "react";
import HomePost from "./Homepost.js";
import styled from "styled-components";
import axios from "axios";
import { Search,ArrowForward} from "@material-ui/icons";
import { useState, useEffect } from "react";
import { search } from "../../../redux/userRedux";
import { useSelector, useDispatch } from "react-redux";
import { mobile } from "../../../responsive";
import CircularLoader from '../../../component/CircularLoader'
import {publicRequest} from '../../../requestMethods'
const Container = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1vh;
  margin-bottom: 3vh;
  ${mobile({ marginTop: "1vh"})}
`;
const SearchContainer = styled.form`
  border: 1px solid rgba(148, 163, 184, 0.5);
  display: flex;
  align-items: center;
  padding: 6px 10px;
  width: 100%;
  max-width: 100%;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 16px 28px rgba(15, 23, 42, 0.06);
  ${mobile({ width: "100%" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  min-width: 0;
  height: 44px;
  font-size: 16px;
  ${mobile({ height: "36px" })}
  padding: 0 12px;
  background: transparent;
`;
const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
`;
const ShowmoreButton = styled.button`
  margin: auto;
  border: none;
  outline: none;
  background-color:#3E8DE3;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
 
  padding: 2vh;
  padding-left: 3vh;
  padding-right: 3vh;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  &:hover {
     background-color: #1b65b1;
  }
`;

const RenderPost = () => {
  const { currentUser:user, searchedValue } = useSelector((state) => state.user);
  const [notes, setnotes] = useState([]);
  const [issearching, setissearching] = useState(false);
  const [postcount,setpostcount]=useState(5);
  const [searchedItem, setsearchedItem] = useState(searchedValue);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchallnotes = async () => {
      setissearching(true)
      if(!searchedValue){
        const res = await publicRequest.get(`notes/?count=${postcount}`);
        setnotes(
          res.data.sort((n1, n2) => {
            return new Date(n2.createdAt) - new Date(n1.createdAt);
          })
        );
      }
      else{
        const res= await publicRequest.get("notes/findnotes/"+searchedItem);
        setnotes(res.data);
      }
      setissearching(false)
    };
    fetchallnotes();
  }, [user._id,searchedValue,postcount]);

  
  const searchHandler = async (e) => {
    e.preventDefault();
    dispatch(search(searchedItem));
  };
  useEffect(() => {
    dispatch(search(null));
  }, []);
   console.log(postcount)
  if (issearching) return <CircularLoader item={"notes"}/>;
  return (
    <div className="notes-panel">
      <Wrapper>
        <SearchContainer onSubmit={searchHandler}>
          <Input
            placeholder="Search notes..."
            onChange={(e) => setsearchedItem(e.target.value)}
          />
          <SearchButton type="submit">
            <Search style={{ color: "gray", fontSize: 30 }} />
          </SearchButton>
        </SearchContainer>
      </Wrapper>
      {notes?.length === 0 ? (
        <div className="notes-empty">
          <h3>Not Found</h3>
        </div>
      ) : (
        notes.map((p, i) => <HomePost x={p} key={i} />)
      )}
      <ShowmoreButton onClick={() => { setpostcount(postcount + 5); }}>
        Show More <ArrowForward />
      </ShowmoreButton>
    </div>
  );
};

export default RenderPost;
