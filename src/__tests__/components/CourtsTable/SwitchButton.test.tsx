import { screen } from "@testing-library/react";
import SwitchButton from "@/components/CourtsTable/SwitchButton";
import renderWithMockedProvider from "../../utils";

describe("SwitchButton Component", () => {
  const court1 = {
    centreCircleRadius: 1800,
    createdAt: "2022-09-05T11:06:44.701Z",
    description: "Pro Full Court",
    isDeleted: false,
    isHidden: false,
    length: 28000,
    lengthOfCorner: 1575,
    lineBorderWidth: 200,
    name: "Pro Full Court",
    restrictedAreaLength: 5790,
    restrictedAreaWidth: 4900,
    sideBorderWidth: 1000,
    threePointLine: 900,
    threePointRadius: 6600,
    updatedAt: "2022-10-13T06:22:30.620Z",
    width: 15000,
    _id: "6315d8448dec97602bb7a2fd",
  };
  it("should see the switch button", () => {
    renderWithMockedProvider(<SwitchButton court={court1} />);
    const switchBtn = screen.getByTestId("switch-btn");
    const switchBtnList = screen.getAllByTestId("switch-btn");

    expect(switchBtn).toBeInTheDocument();
    expect(switchBtnList.length).toBe(1);
  });

  it("should toggle 'ON'", () => {
    const { getByTestId } = renderWithMockedProvider(<SwitchButton court={court1} />);
    expect(getByTestId("switch-label")).toHaveTextContent("ON");
  });
  const court2 = {
    centreCircleRadius: 1800,
    createdAt: "2022-09-05T11:06:44.701Z",
    description: "Pro Full Court",
    isDeleted: false,
    isHidden: true,
    length: 28000,
    lengthOfCorner: 1575,
    lineBorderWidth: 200,
    name: "Pro Full Court",
    restrictedAreaLength: 5790,
    restrictedAreaWidth: 4900,
    sideBorderWidth: 1000,
    threePointLine: 900,
    threePointRadius: 6600,
    updatedAt: "2022-10-13T06:22:30.620Z",
    width: 15000,
    _id: "6315d8448dec97602bb7a2fd",
  };
  it("should toggle between 'OFF'", () => {
    const { getByTestId } = renderWithMockedProvider(<SwitchButton court={court2} />);
    expect(getByTestId("switch-label")).toHaveTextContent("OFF");
  });
});
