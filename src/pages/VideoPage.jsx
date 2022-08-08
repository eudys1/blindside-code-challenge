import {useParams} from 'react-router-dom';
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import VideoThumbnail from "../components/VideoThumbnail";
import Comments from '../components/Comments';


export default function VideoPage() {
    const {id} = useParams();
    const [videoURL, setVideoURL] = useState("");
    const [videos, setVideos] = useState([]);


    const getURL = async () => {

        const restData = await fetch(`https://api.pexels.com/videos/videos/${id}`,
            {
                headers: {
                    Authorization:
                        "563492ad6f91700001000001a0265ddb4280491f99743b3ae2e559d5",
                },
            }
        );
        const data = await restData.json();
        setVideoURL(data.video_files[0].link);
    }

    const getRelatedVideos = async () => {
        let popularVideos = [];

        const restData = await fetch(
            "https://api.pexels.com/videos/popular?&per_page=6",
            {
                headers: {
                    Authorization:
                        "563492ad6f91700001000001a0265ddb4280491f99743b3ae2e559d5",
                },
            }
        );
        const data = await restData.json();

        data.videos.forEach((video) => {
            popularVideos.push(video);
        });

        setVideos(popularVideos);
    };

    useEffect (() => {
        getURL();
        getRelatedVideos();
    } , [id]);

    console.log(id);

    return(
        <div className="flex flex-col md:flex-row gap-20 mx-6">

            <div className='md:w-[70%]'>
                <ReactPlayer url={videoURL} controls={true} width="100%"/>
                <Comments/>
            </div>

            <div className="flex flex-col gap-6">
                {
                    videos.map((video) => {
                        return (
                            <VideoThumbnail video={video} key={video.id} />
                        )
                    })
                }
            </div>

        </div>
    )

}