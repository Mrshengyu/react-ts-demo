import React, { useEffect,useRef } from 'react'
import * as echarts from 'echarts';



export default function Home() {
  const chartRef = useRef(null);
  // 组件渲染完毕后可以调用
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  },[])
  return (
    <div>
      <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
    </div>
  )
}
