import { bindActionCreators } from "@reduxjs/toolkit";
import { githubActions } from "./../store/github/github.slice";
import { useDispatch } from "react-redux";

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};