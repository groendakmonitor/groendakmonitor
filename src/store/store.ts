import { CustomerData } from "models/customer";
import create from "zustand";
import { WaterResponse } from "../models/water";

type WaterStore = {
  waterData: WaterResponse[],
  fetchWaterData(customerId: number): void,
  getTotalIncoming(): number,
  getTotalOutgoing(): number,
}



export const useWaterStore = create<WaterStore>(
  (set, get): WaterStore => ({
    waterData: [],

    fetchWaterData(customerId: number): void {
      if (customerId !== undefined) {
        fetch(`${process.env.REACT_APP_API_URL}/water/${customerId}`)
          .then<WaterResponse[]>(res => res.json())
          .then((data) => {
            set({
              waterData: data
            })
          })
      }
    },

    getTotalIncoming: () => {
      return get().waterData.reduce((acc, value) => {
        acc += value.incoming;
        return acc;
      }, 0)
    },

    getTotalOutgoing: () => {
      return get().waterData.reduce((acc, value) => {
        acc += value.outgoing;
        return acc;
      }, 0)
    }
  })
)

const determineInitialCustomerId = () => {
  const fromStorage = localStorage.getItem("customerId");
  if (!fromStorage) return undefined;
  return parseInt(fromStorage)
}

type CustomerStore = {
  customerId?: number;
  customerData?: CustomerData,
  fetchCustomerData: (customerId: number) => void;
}


export const useCustomerStore = create<CustomerStore>(
  (set, get): CustomerStore => ({
    customerId: determineInitialCustomerId(),
    customerData: undefined,
    
    fetchCustomerData: (customerId: number) => {
      localStorage.setItem("customerId", customerId.toString());
      set({ customerId });

      if (customerId !== undefined) {
        fetch(`${process.env.REACT_APP_API_URL}/customer/${customerId}`)
          .then<CustomerData>(res => res.json())
          .then((customerData) => {
            set({
              customerData
            })
          })
      }
    },

    
  })
)
// if (customerId !== undefined) {
//   fetch(`${process.env.REACT_APP_API_URL}/customers/${customerId}`)
//     .then<CustomerData[]>(res => res.json())
//     .then((data) => {
//       console.log(data)
//       // set({
//       //   waterData: data
//       // })
//     })
// }