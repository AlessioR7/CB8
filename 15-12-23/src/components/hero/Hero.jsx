import "./index.css";

const Hero = ({ imageUrl, title }) => {
  return (
    <div className="Hero">
      <img src={imageUrl} alt="Hero__image" />
      <div className="Hero__title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
