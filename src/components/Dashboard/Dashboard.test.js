import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { shallow, mount } from "enzyme";
import React from "react";
import { Button } from "react-bootstrap";

describe("When the Dashboard component is displayed", () => {
  
    it("should render logout button", () => {
    const wrapper = shallow(<Dashboard />);
    expect(
      typeof wrapper.find(".logout-button").getElement().props.children
    ).toBe("string");
    expect(wrapper.find(".logout-button").getElement().props.children).toEqual(
      "Logout"
    );
  });

  it("Login button should call mock function when clicked", () => {
    const testClick = jest.fn();
    const wrapper = shallow(<Dashboard logoutButtonClick={testClick} />);
    const logoutButton = wrapper.find("button").simulate("click");
    expect(testClick).toHaveBeenCalled();
  });

  
});
