import React, { useEffect, useState } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import { WaterResponse } from '../../../typing/water'

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
  const [data, setData] = useState<LineData>()
  
  useEffect(() => {
    const fetchData = async () => {
      fetch("https://chatter-somber-scallion.glitch.me/waterLevel")
        .then<WaterResponse[]>(res => res.json())
        .then(response => {          
          const incomingData: number[] = [];
          const outgoingData: number[] = [];
          const transformedData = response.reduce<LineData>((acc, value) => {
            const date = new Date(value.date);

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
          
          setData(transformedData)
        });
    }
    const timeout = setInterval(fetchData, 2000)
    return () => clearInterval(timeout)
  }, [])

  return (
  <>
    { data && <Line type="line" data={data} options={options}  /> }
  </>
)}

export default LineChart



// [{
//   "id": 1,
//   "user": 1,
//   "date": "2021-01-23T00:54:35.911Z",
//   "incoming": 3,
//   "outgoing": 0
// }, {
//   "id": 2,
//   "user": 1,
//   "date": "2021-01-23T00:54:40.742Z",
//   "incoming": 3,
//   "outgoing": 2
// }, {
//   "id": 3,
//   "user": 1,
//   "date": "2021-01-23T18:50:36.012Z",
//   "incoming": 3.418,
//   "outgoing": 2.172
// }, {
//   "id": 4,
//   "user": 1,
//   "date": "2021-01-23T18:50:39.932Z",
//   "incoming": 2.492,
//   "outgoing": 1.222
// }, {
//   "id": 5,
//   "user": 1,
//   "date": "2021-01-23T18:50:41.305Z",
//   "incoming": 1.695,
//   "outgoing": 3.857
// }, {
//   "id": 6,
//   "user": 1,
//   "date": "2021-01-23T18:50:41.306Z",
//   "incoming": 4.067,
//   "outgoing": 1.133
// }, {
//   "id": 7,
//   "user": 1,
//   "date": "2021-01-23T18:50:41.309Z",
//   "incoming": 2.329,
//   "outgoing": 4.282
// }, {
//   "id": 8,
//   "user": 1,
//   "date": "2021-01-23T18:50:54.301Z",
//   "incoming": 2.329,
//   "outgoing": 4.282
// }, {
//   "id": 9,
//   "user": 1,
//   "date": "2021-01-23T18:58:22.160Z",
//   "incoming": 3.521,
//   "outgoing": 2.783
// }, {
//   "id": 10,
//   "user": 1,
//   "date": "2021-01-23T18:58:23.100Z",
//   "incoming": 3.521,
//   "outgoing": 2.783
// }, {
//   "id": 11,
//   "user": 1,
//   "date": "2021-01-23T18:58:29.510Z",
//   "incoming": 2.316,
//   "outgoing": 2.915
// }, {
//   "id": 12,
//   "user": 1,
//   "date": "2021-01-23T18:59:43.930Z",
//   "incoming": 4.807,
//   "outgoing": 3.966
// }, {
//   "id": 13,
//   "user": 1,
//   "date": "2021-01-23T19:00:14.432Z",
//   "incoming": 4.168,
//   "outgoing": 3.009
// }, {
//   "id": 14,
//   "user": 1,
//   "date": "2021-01-23T19:01:14.795Z",
//   "incoming": 1.441,
//   "outgoing": 1.174
// }]