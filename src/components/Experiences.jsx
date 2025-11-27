import data from "../data/dataMahasiswa.json";

export default function Experiences() {
  return (
    <div className="section-box">
      <h2>Experience</h2>

      {data.experience.map((exp, i) => (
        <div key={i} className="experience-item">
          <h3>{exp.role}</h3>
          <p className="company">{exp.company}</p>
          <p className="duration">{exp.start} - {exp.end}</p>
          <p className="desc">{exp.desc}</p>

          <div className="tags">
            {exp.tags?.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
