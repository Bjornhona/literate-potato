import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>)
})

it('creates one LI per comment', () => {
  const listItem = wrapped.find('li');
  expect(listItem.length).toEqual(2)
});

it('shows the text for each comment', () => {
  const listItem = wrapped.render();
  expect(listItem.text()).toContain('Comment 1');
  expect(listItem.text()).toContain('Comment 2');
})