import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DriverCreateInput = {
  bookings?: BookingWhereUniqueInput | null;
};
