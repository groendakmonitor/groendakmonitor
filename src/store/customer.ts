import { CustomerData } from "models/customer";
import create from "zustand";

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
        fetch(`${process.env.REACT_APP__API_URL}/customer/${customerId}`)
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