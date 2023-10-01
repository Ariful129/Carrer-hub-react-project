const getStoredJobApplication=()=>{
    const storedJobApplication=localStorage.getItem('Job-Application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication=(id)=>{
   const storedJobApplication=getStoredJobApplication();
   const exists=storedJobApplication.find(jobId=> jobId===id);
   if(!exists){
     storedJobApplication.push(id);
     localStorage.setItem('Job-Application',JSON.stringify(storedJobApplication))
   }
}

export {getStoredJobApplication,saveJobApplication}