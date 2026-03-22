import { useState } from "react";
import "./experience.css";

export default function Experience({ onsubmit, initialData }) {
  const [list, setList] = useState(initialData.length ? initialData : [{ company: "", position: "", responsibilities: "", from: "", to: "" }]);

  const handleChange = (index, e) => {
    const newList = [...list];
    newList[index][e.target.name] = e.target.value;
    setList(newList);
  };

  const addField = () => {
    setList([...list, { company: "", position: "", responsibilities: "", from: "", to: "" }]);
  };

  return (
    <div>
      <h2>Experience</h2>
      {list.map((item, index) => (
        <div key={index}>
          <input name="company" value={item.company} onChange={(e) => handleChange(index, e)} placeholder="Company" />
          <input name="position" value={item.position} onChange={(e) => handleChange(index, e)} placeholder="Position" />
          <input name="responsibilities" value={item.responsibilities} onChange={(e) => handleChange(index, e)} placeholder="Responsibilities" />
          <input name="from" type="date" value={item.from} onChange={(e) => handleChange(index, e)} placeholder="From" />
          <input name="to" type="date" value={item.to} onChange={(e) => handleChange(index, e)} placeholder="To" />
        </div>
      ))}
      <button onClick={addField}>Add Experience</button>
      <button class="bt2" onClick={() => onsubmit(list)}>Save</button>
    </div>
  );
}