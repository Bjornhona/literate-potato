import React from "react";
import { mount } from "enzyme";
import moxios from 'moxios';
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: "Fetched #2"}]
  })
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  // Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // Delay the test to give moxios some time to respond
  moxios.wait(() => {
  // setTimeout(() => {
    // Rerender our component
    wrapped.update();
    
    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);

    // Hold to finish test until both these tests have passed
    done();
    wrapped.unmount();
  // }, 100);
  });

})