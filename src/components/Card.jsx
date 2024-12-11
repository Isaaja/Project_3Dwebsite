const Card = ({ src, link }) => {
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl h-full">
        <figure>
          <img src={src} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href={link}>Details</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
