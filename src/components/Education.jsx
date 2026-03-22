import { useState } from "react";   
import "./education.css";

export default function Education({onsubmit, initialData}){
    const [list, setlist] = useState(initialData.length ? initialData:[{school:'',study:'',date:''}]);
    const handleChange= (index,e) =>{
        const newList= [...list];
        newList[index][e.target.name]=e.target.value;
        setlist(newList);
    };

    const addField =()=>{
        setlist([...list,{school:"",study:"",data:""}])

    };
    return(
        <div className='edu'>
            <h2>Education</h2>
            {list.map((item,index)=>(
                <div key={index} classname="education">
                    <input type="text" name="school" value={item.school} onChange={(e)=> handleChange(index,e)} placeholder="school"/>
                    <input type="text" name="study" value={item.study} onChange={(e)=> handleChange(index,e)} placeholder="study"  />
                    <input type="date"name="date" value={item.data} onChange={(e)=> handleChange(index,e)} placeholder="Date" />
                </div>
            ))}
            <br />
            <button onClick={addField}>Add Education</button>
            <button onClick={() =>onsubmit(list)} >Save</button>
            
        </div>
    )
    
}
