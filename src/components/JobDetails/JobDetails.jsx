import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localstorage";

const JobDetails = () => {
    const jobs=useLoaderData();

    const {id}=useParams();
    const idInt=parseInt(id);

    const job=jobs.find(job =>job.id===idInt) 

    console.log(job.job_title)
    console.log(job)
    //Tostify start
    const handleApplyJob=()=>{
        saveJobApplication(idInt); //Trans id to local storage(interg form)
        toast('Applyed successfully');
    }
    //Tostify end

    return (
        <div>
             <h1>Job Details: {id} </h1>
             <div className="grid gap-4 md:grid-cols-4 ">
                 <div className="border md:col-span-3">
                       <h2 className="text-4xl text-center">Datils here</h2>
                 </div>
                 <div className="border">
                    <h1 className="text-xl">Job Details</h1><hr></hr>

                      <p> {job.contact_information.phone}</p>
                      <p> {job.contact_information.email}</p>
                      <p> {job.contact_information.address}</p><br></br>

                    <button  onClick={handleApplyJob}
                     className="border-2 w-full p-2 m-2 bg-red-600 rounded-xl">Apply Now</button>
                 </div>
             </div>
             <ToastContainer />
        </div>
    );
};

export default JobDetails;