import React, { useState } from 'react'
import Card from './Card'


function Cards({courses, category}) {
    const [likedCourse, setLikedCourse] = useState([]);
    let allCoures = [];
    
    const getCourses = () => {
        if(category ==="All"){
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (course) =>{
                    allCoures.push(course);
                })
            })
            // console.log(allCoures);
            return allCoures;
        }
        else{
            return courses[category];
        }
        
    }

    return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map( (course) => {
                return (<Card course = {course} likedCourse={likedCourse} setLikedCourse = {setLikedCourse} />)
            })
        }
        
    </div>
  )
}

export default Cards