import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJobs = () => {
      
    const [jobs,setJobs]=useState([]);
     //paging data(slicing) strt
     const [datalength,setDatalength]=useState(4);
     //paging data(slicing) end

   useEffect(()=>{
       fetch('jobs.json')
       .then(res=>res.json())
       .then(data=>setJobs(data))
   },[])

    return (
        <div>
            <div className="text-center">
             <h1 className="text-4xl ">Featured Jobs: {jobs.length}</h1>
            <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
               {
                jobs.slice(0,datalength).map(job => <Job key={job.id} job={job}></Job>)
               }
          </div>
          <div className={datalength===jobs.length?'hidden':'text-center mt-4'}>
              <button 
               onClick={()=>setDatalength(jobs.length)}
               className="btn btn-primary ">Show All</button>
          </div>
        </div>
    );
};

export default FeatureJobs;