export default function CVDisplay({ data }) {
  return (
    <div>
      <h2>{data.general.name}</h2>
      <p>{data.general.email}</p>
      <p>{data.general.phone}</p>

      <h3>Education</h3>
      {data.education.map((edu, index) => (
        <div key={index}>
          <p>{edu.school}</p>
          <p>{edu.study}</p>
          <p>{edu.date}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {data.experience.map((exp, index) => (
        <div key={index}>
          <p><b>Company:</b>{exp.company}</p>
          <p><b>Position:</b>{exp.position}</p>
          <p><b>Responsibilities:</b>{exp.responsibilities}</p>
          <p><b>Duration:</b>{exp.from} - {exp.to}</p>
        </div>
      ))}
    </div>
  );
}