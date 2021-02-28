import create from "zustand";
import { WaterResponse } from "../models/water";

type WaterStore = {
  customerId?: number; // maybe this id should not be here
  waterData: WaterResponse[],
  setCustomerId: (customerId: number) => void;
  fetchWaterData(): void,
  getTotalIncoming(): number,
  getTotalOutgoing(): number,
}

const determineInitialCustomerId = () => {
  const fromStorage = localStorage.getItem("customerId");
  if (!fromStorage) return undefined;
  return parseInt(fromStorage)
}

export const useWaterStore = create<WaterStore>(
  (set, get): WaterStore => ({
    customerId: determineInitialCustomerId(),
    waterData: [],
    
    setCustomerId: (customerId: number) => {
      localStorage.setItem("customerId", customerId.toString());
      set({ customerId });
    },

    fetchWaterData(): void {
      const { customerId } = get();
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

