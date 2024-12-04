import { Booking } from "../booking/Booking";

export type Driver = {
  bookings?: Booking | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
