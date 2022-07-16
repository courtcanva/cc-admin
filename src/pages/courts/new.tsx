import CourtForm from "@/components/CourtsForm";
import { ICourt } from "@/interfaces/courtData";

const NewCourt: React.FC = () => {
  const defaultCourtData = {
    name: "",
    length: 0,
    width: 0,
    centreCircleRadius: 0,
    threePointRadius: 0,
    threePointLine: 0,
    lengthOfCorner: 0,
    restrictedAreaLength: 0,
    restrictedAreaWidth: 0,
    sideBorderWidth: 0,
    lineBorderWidth: 0,
    description: "",
  } as ICourt;
  return (
    <CourtForm header="Add New Court" courtData={defaultCourtData} API="courts" method="post" />
  );
};

export default NewCourt;
