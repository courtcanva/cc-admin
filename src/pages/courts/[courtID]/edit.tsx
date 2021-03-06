import CourtForm from "@/components/CourtsForm";
import { api } from "@/utils/axios";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ICourt } from "../../../interfaces/courtData";

const EditCourt = () => {
  const router = useRouter();
  const CourtId = router.query.courtID;
  const [defaultCourtData, setDefaultCourtData] = useState<ICourt>();
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = `courts/${CourtId}`;

  useEffect(() => {
    api(apiUrl, { method: "get" }).then(({ data }) => {
      const {
        name,
        length,
        width,
        centreCircleRadius,
        threePointRadius,
        threePointLine,
        lengthOfCorner,
        restrictedAreaLength,
        restrictedAreaWidth,
        sideBorderWidth,
        lineBorderWidth,
        description,
      } = data;
      const editableData = {
        name,
        length,
        width,
        centreCircleRadius,
        threePointRadius,
        threePointLine,
        lengthOfCorner,
        restrictedAreaLength,
        restrictedAreaWidth,
        sideBorderWidth,
        lineBorderWidth,
        description,
      } as ICourt;
      setDefaultCourtData(editableData);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (!defaultCourtData) return;
  return (
    <CourtForm
      header="Edit Court Information"
      courtData={defaultCourtData}
      API={apiUrl}
      method="put"
    />
  );
};

export default EditCourt;
