import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  driverId?: SortOrder;
  updatedAt?: SortOrder;
};
