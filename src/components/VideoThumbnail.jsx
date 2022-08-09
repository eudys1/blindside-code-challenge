import {Link} from "react-router-dom";


export default function VideoThumbnail({video}) {

	return (
		<div className="relative bg-slate-300  rounded-md w-fit group ">
            {/* <img className="absolute " src="https://img.icons8.com/external-inkubators-glyph-inkubators/344/external-play-button-video-interface-inkubators-glyph-inkubators.png" alt="video play icon" /> */}
            <Link to={`/video/${video.id}`} className="flex items-center justify-center">
                <svg className="absolute w-28 group-hover:opacity-50" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"/></svg>
                <img src={video.image} alt="video thumbnail" className="rounded-md " width={300} height={200} />
            </Link>
        </div>
	);
}
