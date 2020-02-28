import api from "../../mocks";
import * as types from "../constants/actionTypes";

export const getDoctor = () => (
  dispatch: (arg0: { type: string; payload: any }) => void
) => {
  return api
    .get("")
    .then((res: any) => {
      dispatch({
        type: types.GET_DOCTOR,
        payload: res.data
      });
    })
    .catch((err: any) => console.log(err));
};
