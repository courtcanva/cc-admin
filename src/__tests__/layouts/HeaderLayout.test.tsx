import renderWithMockedProvider from "../utils";
import HeaderLayout from "../../layouts/HeaderLayout";
import Home from "../../pages";

describe("Header", () => {
  it("should render layout success", () => {
    const { debug } = renderWithMockedProvider(
      <HeaderLayout title="Home">
        <Home />
      </HeaderLayout>
    );
    debug(undefined, Infinity);
  });
});
