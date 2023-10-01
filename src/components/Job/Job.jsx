import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineAlipay } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id,logo,job_title,company_name,remote_or_onsite,
        job_type,salary, location} = job;
    return (
        <div className="card card-compact bg-base-200 shadow-xl p-4">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-2">{job_type}</button>
                </div>
                <div className='flex gap-10 mt-4 mb-2'>
                    <h2 className='flex gap-2 items-center'><CiLocationOn className='text-2xl'></CiLocationOn> {location}</h2>
                    <h2 className='flex gap-2 items-center'><AiOutlineAlipay className='text-2xl'></AiOutlineAlipay> {salary}</h2>
                </div>
                <div className="card-actions ">
                     <Link to={`/job/${id}`}>
                     <button className="btn btn-primary">View Details</button>
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;