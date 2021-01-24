import React, { useEffect, useMemo, useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import { useWaterStore } from '../../../store/store'

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
      },
    }],
    xAxes: [{
      ticks: {
        callback: function(value:string , index: any, values: any) {
          return new Date(value).toLocaleTimeString()
        }
      },
    }]
  },
  tooltips: {
    callbacks: {
      title: (tooltip: any) => {
        return new Date(tooltip[0].label).toLocaleString()
      }
    }
  },
  legend: {

  }
}


interface LineData {
  labels: string[];
  datasets: { 
    label: string,
    data: number[];
    fill: "start";
    backgroundColor: string;
  }[]
}

const LineChart = () => {
  // const [data, setData] = useState<LineData>()
  const waterData = useWaterStore((data) => data.waterData);
  const fetchWaterData = useWaterStore((data) => data.fetchWaterData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch("https://chatter-somber-scallion.glitch.me/waterLevel")
  //       .then<WaterResponse[]>(res => res.json())
  //       .then(response => {          
  //         const incomingData: number[] = [];
  //         const outgoingData: number[] = [];
  //         const transformedData = response.reduce<LineData>((acc, value) => {
  //           const date = new Date(value.date);

  //           // acc.labels.push(date.toLocaleTimeString());
  //           acc.labels.push(value.date);
  //           incomingData.push(value.incoming);
  //           outgoingData.push(value.outgoing);
  //           return acc;
  //         }, {
  //           labels: [],
  //           datasets: [{
  //             label: 'Inkomend water',
  //             data: incomingData,
  //             backgroundColor: 'rgb(129, 173, 248)',
  //             fill: "start",
  //           }, {
  //             label: 'Uitgaand water',
  //             data: outgoingData,
  //             backgroundColor: 'rgb(66, 133, 244)',
  //             fill: "start",
  //           }]
  //         });
          
  //         setData(transformedData)
  //       });
  //   }
  //   const timeout = setInterval(fetchData, 2000)
  //   return () => clearInterval(timeout)
  // }, [])

  useEffect(() => {
    console.log('useeffect')
    const timeout = setInterval(fetchWaterData, 2000)
    return () => clearInterval(timeout)
  }, [fetchWaterData])

  const data = useMemo(() => {
    const incomingData: number[] = [];
    const outgoingData: number[] = [];
    return waterData.reduce<LineData>((acc, value) => {
      // const date = new Date(value.date);

      // acc.labels.push(date.toLocaleTimeString());
      acc.labels.push(value.date);
      incomingData.push(value.incoming);
      outgoingData.push(value.outgoing);
      return acc;
    }, {
      labels: [],
      datasets: [{
        label: 'Inkomend water',
        data: incomingData,
        backgroundColor: 'rgb(129, 173, 248)',
        fill: "start",
      }, {
        label: 'Uitgaand water',
        data: outgoingData,
        backgroundColor: 'rgb(66, 133, 244)',
        fill: "start",
      }]
    });
  }, [waterData]);

  return (
  <>
    { data && <Line type="line" data={data} options={options}  /> }
  </>
)}

export default LineChart
