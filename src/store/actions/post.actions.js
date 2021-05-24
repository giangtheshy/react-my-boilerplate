import * as types from "types";
import * as apis from "Apis";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await apis.getPosts();
    dispatch({ type: types.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};