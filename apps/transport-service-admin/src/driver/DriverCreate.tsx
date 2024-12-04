import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BookingTitle } from "../booking/BookingTitle";

export const DriverCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bookings.id"
          reference="Booking"
          label="Bookings"
        >
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
