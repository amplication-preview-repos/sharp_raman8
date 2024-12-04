import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DriverTitle } from "../driver/DriverTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="ID.id" reference="Driver" label="name">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
