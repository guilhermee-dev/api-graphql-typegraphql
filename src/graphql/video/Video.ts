import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Video {
    @Field()
    name: string;
    @Field()
    description: string;
    @Field()
    category: string;
    @Field()
    _id: string;
}

export default Video;