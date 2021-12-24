import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from 'Root';

const props = {
  saveComment: jest.fn()
}

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox {...props}/>);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("textarea input", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "some comment" },
    });
    wrapped.update();
  });

  it("has a textarea that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("some comment");
  });

  it("when form is submitted, text area gets emptied", () => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "some comment" },
    });
    wrapped.update();
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
