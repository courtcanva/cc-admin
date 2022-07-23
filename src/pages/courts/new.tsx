import CourtForm from "@/components/CourtsForm";
import { ICourt } from "@/interfaces/courtData";

const NewCourt: React.FC = () => {
  const defaultCourtData = {
    name: "",
    length: "",
    width: "",
    centreCircleRadius: "",
    threePointRadius: "",
    threePointLine: "",
    lengthOfCorner: "",
    restrictedAreaLength: "",
    restrictedAreaWidth: "",
    sideBorderWidth: "",
    lineBorderWidth: "",
    description: "",
  } as ICourt;
  return (
    <CourtForm header="Add New Court" courtData={defaultCourtData} API="courts" method="post" />
  );
};

export default NewCourt;
