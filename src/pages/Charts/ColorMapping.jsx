import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  colorMappingData,
  rangeColorMapping,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const currentMode = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Color Mappping" />
      <ChartComponent
        id="charts"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ mode: "Range", background: "white" }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : ""}
      >
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {rangeColorMapping.map((item, index) => (
            <RangeColorSettingDirective key={index} {...item} />
          ))}
        </RangeColorSettingsDirective>
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
