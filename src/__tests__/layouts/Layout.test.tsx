import renderWithMockedProvider from "../utils";
import Layout from "../../layouts";
import Home from "../../pages";

describe("Layout", () => {
  it("should render layout success", () => {
    renderWithMockedProvider(
      <Layout>
        <Home />
      </Layout>
    );
  });
});
