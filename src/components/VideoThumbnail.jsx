import {Link} from "react-router-dom";


export default function VideoThumbnail({video}) {

	return (
		<div className="bg-slate-300  rounded-md w-fit">
            <Link to={`/video/${video.id}`}>
                <img src={video.image} alt="" className="rounded-md" width={300} height={200} />
            </Link>
        </div>
	);
}
