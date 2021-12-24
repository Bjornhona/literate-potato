import React from 'react';
import {shallow, mount} from 'enzyme';
import App from 'components/App';
import Root from 'Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
    <App />
    </Root>
  );
})

afterEach(() => {
  wrapped.unmount();
});

it('checks if CommentBox component is in the document', () => {
  const commentBox = wrapped.find('CommentBox');
  expect(commentBox.length).toEqual(1);
})

it('checks if CommentList component is in the document', () => {
  const commentList = wrapped.find('CommentList');
  expect(commentList.length).toEqual(1);
})

