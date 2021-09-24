import React from "react";

const List = ({ errands }) => {
  return (
    <>
      {errands.map((errand) => {
        const { id, description, image } = errand;
        return <article key={id} className="errand">
            <img src={image} alt={description} />
            <div>
                <h4>{description}</h4>
            </div>
        </article>;
      })}
    </>
  );
};

export default List;
