import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import VideoSchema from "../../models/VideoSchema";
import Video from "./Video";

@InputType()
class VideoInput{
    @Field()
    description: string;
    @Field()
    name: string;
    @Field()
    category: string;
}

@Resolver(Video)
class VideoResolver {

    @Query(() => [Video])
    async videos() {
        const videos = await VideoSchema.find();
        return videos;
    }

    @Mutation(() => Video)
    async createVideos(@Arg("videoInput") videoInput: VideoInput){
        const Video = await VideoSchema.create(videoInput);
        return Video;
    }
}

export default VideoResolver;