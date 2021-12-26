import { UPDATE_HOUSE_NAME } from "../Redux/actions/actionChar";
const charlistReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_NAME:
      return { name: action.payload };
    default:
      return state;
  }
};
export default charlistReducer;
