/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: true,
    type: () => DriverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriverWhereUniqueInput)
  @Field(() => DriverWhereUniqueInput)
  ID!: DriverWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };
