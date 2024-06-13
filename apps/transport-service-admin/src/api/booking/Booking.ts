import { Driver } from "../driver/Driver";

export type Booking = {
  createdAt: Date;
  id: string;
  ID?: Driver | null;
  updatedAt: Date;
};
