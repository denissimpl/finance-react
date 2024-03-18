import { useRef, useEffect, CSSProperties } from "react";
import { init, getInstanceByDom } from "echarts";
import type { ECharts, EChartsOption, SetOptionOpts } from "echarts";

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
}


const Chart = ({option,style,settings,loading}: ReactEChartsProps): JSX.Element => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let chart: ECharts | undefined;
        if (chartRef.current !== null) {
            chart = init(chartRef.current);
        }

        function resizeChart() {
            chart?.resize();
        }

        window.addEventListener("resize", resizeChart);


        return () => {
            chart?.dispose();
            window.removeEventListener("resize", resizeChart);
        };
    },[]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading]);

  return <div ref={chartRef} style={{ width: "100%", height: "100px", ...style }} />;
}

export default Chart;
