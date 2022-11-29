import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box } from "@chakra-ui/react";

interface Props {
  lineChartData: {
    name: number;
    Order: number;
    Sales: number;
  }[];
}

const BiaxialLineChartComponent = ({ lineChartData }: Props) => {
  return (
    <Box height="300px" marginTop="12px">
      <ResponsiveContainer>
        <LineChart
          data={lineChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Order"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="Sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BiaxialLineChartComponent;
