import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BookingTitle } from "../booking/BookingTitle";

export const DriverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="bookings.id"
          reference="Booking"
          label="Bookings"
        >
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
