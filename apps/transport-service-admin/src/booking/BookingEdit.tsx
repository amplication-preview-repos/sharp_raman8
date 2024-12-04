import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DriverTitle } from "../driver/DriverTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="ID.id" reference="Driver" label="name">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
