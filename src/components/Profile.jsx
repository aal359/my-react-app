import data from "../data/dataMahasiswa.json";
import "../styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <img src={data.photo} className="profile-photo" alt="foto" />
      
      <div className="profile-info">
        <h1>{data.name}</h1>
        <p>{data.major} | {data.classYear}</p>
        <span className="badge">{data.nim}</span>
        <p className="desc">{data.description}</p>

        <button className="btn">Visit Portfolio</button>
      </div>
    </div>
  );
}
