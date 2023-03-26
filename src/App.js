import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navabar from "./components/Navabar";
import {filterData, apiUrl} from "./data" 
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All")

  useEffect( () => {
    const fetchData = async() =>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
      }
      catch(error){
        toast.error("Something Went Wrong");
      }
      setLoading(false);
    }
    fetchData();
  }, [])



  return (  <div className="min-h-screen flex flex-col">
              <div>
                <Navabar />
              </div>
              
              <div>
                <Filter filterData={filterData}
                  category = {category}  
                  setCategory = {setCategory}
                />
              </div>
              <div className="w-11/12 max-w-[1080px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                {
                  loading ? (<Spinner />): (<Cards courses={courses} category = {category} />)
                }
              </div>


            </div>);
};

export default App;
