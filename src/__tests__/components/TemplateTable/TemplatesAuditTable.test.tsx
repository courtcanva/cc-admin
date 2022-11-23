import mockTemplateData from "@/components/MockDate/MockTemplateData";
import TemplatesAuditTable from "@/components/TemplateTable/TemplatesAuditTable";
import renderWithMockedProvider from "../../utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TemplateAuditHeads } from "@/constants/TemplatesHeads";

describe("Template audit table", () => {
  it("Should render all table heads", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);
    const tableHeads = TemplateAuditHeads;
    tableHeads.map((header) => expect(screen.getByText(header.title)).toBeInTheDocument());
  });

  it("Should correctly render the audit data", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].design.designName)).toBeInTheDocument();
    expect(screen.getByText(mockTemplateData[0].design.designer)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /publish/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /reject/i,
      })
    ).toBeInTheDocument();
  });

  it("The court preview modal is correctly load after click", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);
    const image = screen.getByRole("img");
    userEvent.click(image);
    expect(screen.getByTestId("court-preview")).toBeInTheDocument();
  });

  it("The edit confirmation modal is correctly load after click 'Publish' button", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);
    const publishBtn = screen.getByRole("button", {
      name: /publish/i,
    });
    userEvent.click(publishBtn);
    expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
  });

  it("The edit confirmation modal is correctly load after click 'Reject' button", () => {
    renderWithMockedProvider(<TemplatesAuditTable templates={mockTemplateData} />);
    const rejectBtn = screen.getByRole("button", {
      name: /reject/i,
    });
    userEvent.click(rejectBtn);
    expect(screen.getByTestId("confirmation-modal")).toBeInTheDocument();
  });
});
