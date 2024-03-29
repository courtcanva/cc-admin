import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationButton from "../../../components/PaginationButton.tsx";

describe("PaginationButton", () => {
  const props = {
    setOffSet: jest.fn(),
    totalPages: 5,
    page: 2,
    setPage: jest.fn(),
  };
  it("each button should render the 'icon' correctly", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        totalPages={props.totalPages}
        page={props.page}
        setPage={props.setPage}
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
        totalPages={props.totalPages}
        page={props.page}
        setPage={props.setPage}
      />
    );
    const arrowBackBtn = screen.getByRole("button", { name: "arrow back" });
    userEvent.click(arrowBackBtn);
    expect(props.setOffSet).toBeCalled();
  });
  it("arrow forward button should be called when click the arrow forward button", () => {
    render(
      <PaginationButton
        setOffSet={props.setOffSet}
        totalPages={props.totalPages}
        page={props.page}
        setPage={props.setPage}
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
        totalPages={props.totalPages}
        page={props.page}
        setPage={props.setPage}
      />
    );
    const pageAndTotalPagesElement = screen.getByText("2 / 5");
    expect(pageAndTotalPagesElement).toBeInTheDocument();
  });
});
