import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const {id} = useParams();

    const handleCommnet = (e) => {
        e.preventDefault();

        setComments([...comments, e.target[0].value]);

        e.target.reset();
    }

    const handleShowComments = () => {
        
        setShowComments(!showComments);
    }

    // useEffect(() => {
    //     setComments([]);
    //     setShowComments(false);
    // }, [id]);


    return(
        <div className={`m-5  `}>
            <a onClick={handleShowComments} className="flex items-center cursor-pointer text-md font-bold ">
                {showComments ? "Hide Comments" : "Show Comments"}

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={showComments ? "rotate-180 " : ""} >
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" className="invisible" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                
            </a>
            
            <div className={!showComments ? "hidden " : ""}>

                <h2 className="text-xl my-4">Comments of this video:</h2>
                
                {comments.length == 0 ?
                    <p>No comments yet, be the first!!!</p>
                    :
                    <div className="flex flex-col divide-y-2">
                        {comments.map((comment, index) => {
                            return (
                                <div className="py-5">
                                    <span key={index} className="flex gap-3 items-center font-bold">
                                        <img src="https://randomuser.me/api/portraits/men/3.jpg" width={35} height={35} alt="profile picture"
                                        className="rounded-full" />
                                        Random Name
                                    </span>

                                    <p className="ml-4 mt-2">{comment}</p>

                                </div>
                            )})
                        }
                    </div>
                }

                <form onSubmit={handleCommnet} className="flex items-center gap-4 mt-8">
                    <textarea rows="2" 
                        className="block p-3 w-full text-sm rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-white" placeholder="Your comment..."/>
                    <button type="submit" 
                        className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </form>

            </div>


        </div>
    )

}