import { useEffect, useMemo } from 'react'
import { Line } from '@reactchartjs/react-chart.js'
import { useWaterStore } from 'store/water'
import { useCustomerStore } from 'store/customer'
import { Theme } from 'static/theme'

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

const WATER_FETCH_INTERVAL = 120000; // two minutes

const COLOR_OUTGOING_GROENDAKMONITOR = 'rgb(129, 173, 248)';
const COLOR_OUTGOING_ZINCO = '#87b539';
const COLOR_INCOMING_GROENDAKMONITOR = 'rgb(66, 133, 244)';
const COLOR_INCOMING_ZINCO = '#749a32';

const getColor = (inOrOut: 'outgoing' | 'incoming', theme: Theme) => {
  switch (theme) {
    case 'groendakmonitor':
      return inOrOut === 'outgoing' ? COLOR_OUTGOING_GROENDAKMONITOR : COLOR_INCOMING_GROENDAKMONITOR;
    case 'zinco':
      return inOrOut === 'outgoing' ? COLOR_OUTGOING_ZINCO : COLOR_INCOMING_ZINCO;
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
  const customerId = useCustomerStore((data) => data.customerId);
  const theme = useCustomerStore((data) => data.customerData?.theme) ?? "groendakmonitor";
  const waterData = useWaterStore((data) => data.waterData);
  const fetchWaterData = useWaterStore((data) => data.fetchWaterData);

  useEffect(() => {
    if (!customerId) return
    fetchWaterData(customerId)
    const timeout = setInterval(() => {
      fetchWaterData(customerId)
    }, WATER_FETCH_INTERVAL)
    return () => clearInterval(timeout)
  }, [customerId, fetchWaterData])

  const data = useMemo(() => {
    const incomingData: number[] = [];
    const outgoingData: number[] = [];
    return waterData.reduce<LineData>((acc, value) => {
      acc.labels.push(value.date);
      incomingData.push(value.incoming);
      outgoingData.push(value.outgoing);
      return acc;
    }, {
      labels: [],
      datasets: [{
        label: 'Uitgaand water',
        data: outgoingData,
        backgroundColor: getColor('outgoing', theme),
        fill: "start",
      }, {
        label: 'Inkomend water',
        backgroundColor: getColor('incoming', theme),
        data: incomingData,
        fill: "start",
      }]
    });
  }, [waterData, theme]);

  return (
  <>
    { data && <Line type="line" data={data} options={options}  /> }
  </>
)}

export default LineChart
