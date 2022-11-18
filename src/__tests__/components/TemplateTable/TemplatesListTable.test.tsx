import TemplatesAuditTable from "@/components/TemplateTable/TemplatesAuditTable";
import renderWithMockedProvider from "../../utils";
import mockTemplateData from "@/components/MockDate/MockTemplateData";
import TemplatesListTable from "@/components/TemplateTable/TemplatesListTable";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Template List table", () => {
  const mockTemplateDate = mockTemplateData;
  it("Should render all table heads", () => {
    renderWithMockedProvider(<TemplatesListTable templates={mockTemplateDate} />);
    const tableHeads = screen.getAllByRole("columnheader");
    tableHeads.map((header) => expect(header).toBeInTheDocument());
  });

  it("Should correctly render the list data", () => {
    renderWithMockedProvider(<TemplatesListTable templates={mockTemplateDate} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(mockTemplateDate[0].design.designName)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateDate[0].design.designer)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateDate[0].user_id)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateDate[0].status)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateDate[0].tags.CourtType)).toBeInTheDocument();
  });

  it("The court preview modal is correctly load after click", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateDate} />);
    const image = screen.getByRole('img');
    userEvent.click(image)
    expect(screen.getByTestId("court-preview")).toBeInTheDocument();
  });
});