import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UUID } from "crypto";

@ObjectType()
export class Pet {
    @Field(type => Int)
    id:number

    @Field()
    name:string

    @Field({nullable: true})
    type?:string
}