import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DriverWhereInput = {
  bookings?: BookingWhereUniqueInput;
  id?: StringFilter;
};
