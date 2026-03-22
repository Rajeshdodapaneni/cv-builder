import { useState} from 'react'

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVDisplay from "./components/CVDisplay";

export default function App() {
  const [data,setData] = useState({
    general: {name:"",email:"",phone:""},
    education: [],
    experience: [],
  });

  const [isediting, setisediting] = useState(true);

  const handlesubmit = (section, values) =>{
    setData((prev)=> ({...prev,[section]: values}))
  };

  return(
    <div>
      <h1>CV Builder</h1>
      {isediting ?(
        <>
        <GeneralInfo initialData={data.general} onsubmit={(v)=> handlesubmit("general",v)}/>
        <Education initialData={data.education} onsubmit={(v) => handlesubmit("education",v)}/>
        <Experience initialData={data.experience} onsubmit={(v) => handlesubmit("experience",v)}/>
        <button onClick={()=> setisediting(false)}>Submit</button>
        </>):(

        <>
        <CVDisplay data={data} />
        <button onClick={()=> setisediting(true)}>Edit CV</button>
        </>

      )}

    </div>
  )
}