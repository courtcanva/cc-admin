import TemplatesAuditTable from "@/components/TemplateTable/TemplatesAuditTable";
import renderWithMockedProvider from "../../utils";
import mockTemplateData from "@/components/MockDate/MockTemplateData";
import TemplatesListTable from "@/components/TemplateTable/TemplatesListTable";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TemplatesListHeads } from "@/constants/TemplatesHeads";

describe("Template List table", () => {
  it("Should render all table heads", () => {
    renderWithMockedProvider(<TemplatesListTable templates={mockTemplateData} />);
    const tableHeads = TemplatesListHeads;
    tableHeads.map((header) => expect(screen.getByText(header.title)).toBeInTheDocument());
  });

  it("Should correctly render the list data", () => {
    renderWithMockedProvider(<TemplatesListTable templates={mockTemplateData} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].design.designName)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].design.designer)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].user_id)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].status)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].tags.CourtType)).toBeInTheDocument();
  });

  it("The court preview modal is correctly load after click", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);
    const image = screen.getByRole("img");
    userEvent.click(image);
    expect(screen.getByTestId("court-preview")).toBeInTheDocument();
  });
});
