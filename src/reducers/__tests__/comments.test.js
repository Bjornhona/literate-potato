import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {

  // create a fake action
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  // create a reducer with an empty state and the fake action
  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});
