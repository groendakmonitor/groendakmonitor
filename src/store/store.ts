import create from "zustand";
import { WaterResponse } from "../typing/water";

type WaterStore = {
  waterData: WaterResponse[],
  fetchWaterData(): void,
  getTotalIncoming(): number,
  getTotalOutgoing(): number,
}

export const useWaterStore = create<WaterStore>(
  (set, get): WaterStore => ({
    waterData: [],

    fetchWaterData() {
      fetch("https://chatter-somber-scallion.glitch.me/waterLevel")
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