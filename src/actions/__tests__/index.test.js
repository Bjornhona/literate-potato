// import React from "react";
import { saveComment } from 'actions/index';
import { SAVE_COMMENT } from 'actions/types';

describe('Testing actions', () => {

  it('has the same type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  })
  
  it('has the correct payload', () => {
    const action = saveComment('New Comment');
    expect(action.payload).toEqual('New Comment');
  })
})