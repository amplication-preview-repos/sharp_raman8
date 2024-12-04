import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DriverUpdateInput = {
  bookings?: BookingWhereUniqueInput | null;
};
