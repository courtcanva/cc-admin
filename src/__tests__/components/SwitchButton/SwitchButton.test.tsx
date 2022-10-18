import { fireEvent, screen } from "@testing-library/react";
import renderWithMockedProvider from "../../utils";
import SwitchButton from "../../../components/SwitchButton/SwitchButton";

describe("SwitchButton Component", () => {
  const mockFunction = jest.fn();

  it("should render the switch button and 'ON' content", () => {
    renderWithMockedProvider(<SwitchButton initialState={true} switchBtnHandler={mockFunction} />);
    const switchBtn = screen.getByTestId("switch-btn");
    const switchBtnLabel = screen.getByTestId("switch-label");

    expect(switchBtn).toBeInTheDocument();
    expect(switchBtnLabel).toHaveTextContent("ON");
  });

  it("should render the switch button and 'OFF' content", () => {
    renderWithMockedProvider(<SwitchButton initialState={false} switchBtnHandler={mockFunction} />);
    const switchBtn = screen.getByTestId("switch-btn");
    const switchBtnLabel = screen.getByTestId("switch-label");

    expect(switchBtn).toBeInTheDocument();
    expect(switchBtnLabel).toHaveTextContent("OFF");
  });

  it("should toggle between on and off", () => {
    renderWithMockedProvider(<SwitchButton initialState={true} switchBtnHandler={mockFunction} />);
    const switchBtn = screen.getByTestId("switch-btn");
    fireEvent.click(switchBtn);
    expect(mockFunction).toBeCalled();
  });
});
