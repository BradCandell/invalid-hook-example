import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useModal } from "./";
import { act } from "react-dom/test-utils";

describe("useModal React Hook", () => {
  it("displays a Modal Window when specified", () => {
    const { Modal, show, hide, isVisible } = useModal();
    const { queryByText } = render(<Modal>This is the Modal Contents</Modal>);

    expect(isVisible).toBeFalsy();
    expect(queryByText("This is the Modal Contents")).not.toBeInTheDocument();

    act(() => {
      show();
    });

    expect(isVisible).toBeTruthy();
    expect(queryByText("This is the Modal Contents")).toBeInTheDocument();
  });
});
