import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-columns container-fluid">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Estambul-Turquia9857.JPG"
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Estambul-Turquia9857.JPG"
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Estambul-Turquia9857.JPG"
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
