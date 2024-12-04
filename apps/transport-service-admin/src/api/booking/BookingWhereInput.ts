import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
};
