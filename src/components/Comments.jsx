import { useState } from "react";


export default function Comments() {
    const [comments, setComments] = useState([]);

    const handleCommnet = (e) => {
        e.preventDefault();

        setComments([...comments, e.target[0].value]);

        e.target.reset();
    }

    return(
        <div className="">
            <h2>Comments of this video:</h2>
            {comments.length==0?
                <p>No comments yet, be the first!!!</p>
                :
                <div className="">
                    {comments.map((comment, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-6">
                                <p>{comment}</p>
                            </div>
                        )})
                    }

                </div>
            }

            <form onSubmit={handleCommnet}>
                <textarea name="comment" cols="70" ></textarea>
                <button type="submit">Comment</button>
            </form>

        </div>
    )

}