import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationButton from "../../../components/PaginationButton.tsx";

describe("PaginationButton", () => {
  const props = {
    setOffSet: jest.fn(),
    isFetching: false,
    totalPages: 5,
  };
  it("each button should render the 'icon' correctly", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        isFetching={props.isFetching}
        totalPages={props.totalPages}
      />
    );
    const arrowBackElement = screen.getByTestId("arrow-back-label");
    const arrowForwardElement = screen.getByTestId("arrow-forward-label");

    expect(arrowBackElement).toBeInTheDocument();
    expect(arrowForwardElement).toBeInTheDocument();
  });

  it("arrow back button should not be called when click the arrow back button", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        isFetching={props.isFetching}
        totalPages={props.totalPages}
      />
    );
    const arrowBackBtn = screen.getByRole("button", { name: "arrow back" });
    userEvent.click(arrowBackBtn);
    expect(props.setOffSet).not.toBeCalled();
  });
  it("arrow forward button should be called when click the arrow forward button", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        isFetching={props.isFetching}
        totalPages={props.totalPages}
      />
    );
    const arrowForwardBtn = screen.getByRole("button", { name: "arrow forward" });
    userEvent.click(arrowForwardBtn);
    expect(props.setOffSet).toBeCalled();
  });

  it("should render the page and totalPages number correctly", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        isFetching={props.isFetching}
        totalPages={props.totalPages}
      />
    );
    const pageAndTotalPagesElement = screen.getByText("1 / 5");
    expect(pageAndTotalPagesElement).toBeInTheDocument();
  });
});
