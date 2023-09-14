import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {

  const currentMode = useStateContext();

  return (
    <div>
      <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      // background={currentMode === 'Dark'? '#33373e' : '#fff'}
      >
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>

        <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      </ChartComponent>
    </div>
  );
};

export default LineChart;
