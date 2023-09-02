// import PropTypes from "prop-types";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  //   SparkLine.propTypes = {
  //     id: PropTypes.string,
  //     height: PropTypes.string,
  //     width: PropTypes.string,
  //     color: PropTypes.string,
  //     data: PropTypes.string,
  //     type: PropTypes.string,
  //     currentColor: PropTypes.string,
  //   };

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
