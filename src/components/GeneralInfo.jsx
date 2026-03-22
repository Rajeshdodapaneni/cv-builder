import { useState } from "react";
import "./Generalinfo.css";

export default function GeneralInfo({onsubmit, initialData}){
    const [form, setform] = useState(initialData);
    const handleChange = (e) =>{
        setform({...form, [e.target.name]: e.target.value});
    };

    return(
        <div className="form">
            <h2>General Info</h2>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name"/>
            <input type="text" name="email" value={form.email} onChange={handleChange} placeholder="Email"/>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="phone" />
            <button onClick={()=> onsubmit(form)}>Save</button>
        </div>
    )
}