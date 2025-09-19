// 柱状图组件
// 1功能代码放入
// 2可变部分抽成prop参数

import React, { useEffect,useRef } from 'react'
import * as echarts from 'echarts';

const BarChart = (props) => {
    const chartRef = useRef(null);
    const {title} = props;
  // 组件渲染完毕后可以调用
    useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title:{
        text:title
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  },[])

  return (
      <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>

  )
}

export default BarChart