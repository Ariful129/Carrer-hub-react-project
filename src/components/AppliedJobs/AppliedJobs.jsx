import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjob, setAppliedjob] = useState([]);
    const [displayJobs,setDisplayjobs]=useState([]);

    //Filter start
    const handleJobsFilter=(Filter)=>{
        if(Filter==='all'){
            setDisplayjobs(appliedjob);
        }
        else if(Filter==='remote'){
            const remotejobs=appliedjob.filter(job=>job.remote_or_onsite==='Remote');
            setDisplayjobs(remotejobs);
        }
        else if(Filter==='onsite'){
            const onsitejobs=appliedjob.filter(job=>job.remote_or_onsite==='Onsite');
            setDisplayjobs(onsitejobs);
        }
        
    }
   //Filter End
    useEffect(() => {  //local storage theke data load
        const storedJobs = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobs) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            //   console.log(jobs,storedJobs,jobsApplied)
            setAppliedjob(jobsApplied);
            setDisplayjobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div>
            <h1 className="text-3xl">Applied Jobs here :{appliedjob.length}</h1>
            {/* Dropsown start */}
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            {/* Dropsown End*/}
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title}</span><br></br>
                        <span>{job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;