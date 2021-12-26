export const UPDATE_HOUSE_NAME = "UPDATE_HOUSE_NAME";

const updateChars = (id) => {
  return {
    type: UPDATE_HOUSE_NAME,
    payload: `${id}`,
  };
};

export default updateChars;
