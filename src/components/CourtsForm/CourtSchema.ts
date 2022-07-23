import * as Yup from "yup";
const CourtSchema = Yup.object().shape({
  name: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
  length: Yup.number().integer().positive().min(1).required("Required"),
  width: Yup.number().integer().positive().min(1).required("Required"),
  centreCircleRadius: Yup.number().integer().positive().min(1).required("Required"),
  lengthOfCorner: Yup.number().integer().positive().min(1).required("Required"),
  lineBorderWidth: Yup.number().integer().positive().min(1).required("Required"),
  restrictedAreaLength: Yup.number().integer().positive().min(1).required("Required"),
  restrictedAreaWidth: Yup.number().integer().positive().min(1).required("Required"),
  sideBorderWidth: Yup.number().integer().positive().min(1).required("Required"),
  threePointLine: Yup.number().integer().positive().min(1).required("Required"),
  threePointRadius: Yup.number().integer().positive().min(1).required("Required"),
  description: Yup.string(),
});

export default CourtSchema;
