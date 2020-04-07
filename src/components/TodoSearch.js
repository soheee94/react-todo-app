import React from "react";
import styled from "styled-components";
import palette from "../palette";

function TodoSearch() {
  return <TodoSearchBlock placeholder="검색"></TodoSearchBlock>;
}

const TodoSearchBlock = styled.input`
  width: 700px;
  height: 50px;
  background: white;
  margin: 0 auto 15px auto;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  font-family: inherit;
  color: ${palette.darkgray};
  &::placeholder {
    color: ${palette.gray};
  }
`;

export default TodoSearch;
