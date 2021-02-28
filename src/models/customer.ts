export interface CustomerData {
  id: number;
  name: string;
  roof_size: number;
  roof_thickness: number;
  location: string;
  start_date: string;
}

export type CustomerListData = CustomerData & {
  last_water: string
}