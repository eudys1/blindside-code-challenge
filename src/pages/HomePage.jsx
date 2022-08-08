import { useEffect, useState } from "react";
import Comments from "../components/Comments";
import VideoThumbnail from "../components/VideoThumbnail";



export default function HomePage() {
    const [videos, setVideos] = useState([]);
    
    
    useEffect(() => {
        const getData = async () => {
            let popularVideos = [];

            const restData = await fetch(
                "https://api.pexels.com/videos/popular?&per_page=12",
                {
                    headers: {
                        Authorization:
                            "563492ad6f91700001000001a0265ddb4280491f99743b3ae2e559d5",
                    },
                }
            );
            const data = await restData.json();
            // console.log(data);
            data.videos.forEach((video) => {
                popularVideos.push(video);
            });
    
            setVideos(popularVideos);
        };
        
        getData();

	}, []);
    
    console.log(videos);
	return (
		<div className=" flex flex-wrap gap-6 mx-5 w-fit">
			{
                videos.map((video) => {
                    return (
                        <VideoThumbnail video={video} key={video.id} />
                    )
                })
            }
            {/* <Comments/> */}
		</div>
	);
}
