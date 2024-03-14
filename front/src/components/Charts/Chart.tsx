import { useRef, useEffect } from "react";
import { init, getInstanceByDom } from "echarts";
import type { ECharts } from "echarts";
import { ReactEChartsProps } from "../../types/types";



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
