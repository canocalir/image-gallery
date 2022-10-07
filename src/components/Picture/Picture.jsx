import data from "../../data/data";
import "./Picture.css";

const Picture = () => {
  return (
    <>
      {data.map((image, id) => (
        <div key={id} className="image-card">
        <div className="image-container">
            <img alt={id} src={image.src.large} />
        </div>
        <div className="image-info">
           <p>{image.photographer.toLocaleUpperCase()}</p>
        </div>
        </div>
      ))}
      </>
  );
};

export default Picture;
