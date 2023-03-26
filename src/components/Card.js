import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from 'react-toastify'


function Card({course, likedCourse, setLikedCourse}) {
    
    const clickHandler = () =>{
        if(likedCourse.includes(course.id)){
            setLikedCourse((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning('Liked Removed');
        }
        else{
            if(likedCourse.length === 0){
                setLikedCourse([course.id]);
            }
            else{
                setLikedCourse((prev) => [...prev, course.id]);
            }
            toast.success('Liked Successfully');
        }
    }



    return (
    <div className="w-[300px] bg-gray-300  rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url}></img>
            
            <div className="absolute rounded-full bg-gray-200 -bottom-3 right-2 flex justify-center items-center p-1 w-[40px] h-[40px]">
                <button onClick={clickHandler}>
                    { likedCourse.includes(course.id) ?  <FcLike fontSize="1.75rem" /> :<FcLikePlaceholder fontSize="1.75rem" /> }
                </button>
            </div>
        </div>
        <div className="p-4">
            <p className="text-[#010105] font-semibold text-md">{course.title}</p>
            <p className="mt-2 text-[#010105] text-sm">
                {
                    course.description.length > 100 ? 
                    course.description.substring(0,100) + "..." : 
                    course.description
                }
            </p>
        </div>
    </div>
  )
}

export default Card