import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "ID";

export const BookingTitle = (record: TBooking): string => {
  return record.ID?.toString() || String(record.id);
};
