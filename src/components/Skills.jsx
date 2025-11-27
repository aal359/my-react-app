import data from "../data/dataMahasiswa.json";

export default function Skills() {
  return (
    <div className="section-box">
      <h2>Skills & Expertise</h2>

      {data.skills.map((skill, i) => (
        <div key={i} className="skill-item">
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <div className="progressbar">
            <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
          </div>
          <p className="skill-level">{skill.level}</p>
        </div>
      ))}
    </div>
  );
}
