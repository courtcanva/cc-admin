import EditConfirmModal from "@/components/Deposit/EditConfirmModal";
import renderWithMockedProvider from "../../utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("EditConfirmModal", () => {
  const prop = {
    onClose: jest.fn(),
    isOpen: true,
    currentDeposit: 0.1,
  };
  it("should render edit deposit modal", async () => {
    renderWithMockedProvider(
      <EditConfirmModal
        onClose={prop.onClose}
        isOpen={prop.isOpen}
        currentDeposit={prop.currentDeposit}
      />
    );
    const inputBar = screen.getByTestId("numberInput");
    const cancelBtn = screen.getByRole("button", { name: /cancel/i });
    const changeBtn = screen.getByRole("button", { name: /change/i });
    expect(inputBar).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    expect(changeBtn).toBeInTheDocument();

    userEvent.click(cancelBtn);
    expect(prop.onClose).toBeCalled();
  });
});
