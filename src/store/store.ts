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
    
    fetchWaterData(customerId: number): void{
      fetch(`${process.env.REACT_APP_API_URL}/water/${customerId}`)
        .then<WaterResponse[]>(res => res.json())
        .then((data) => {
          set({
            waterData: data
          })
        })
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