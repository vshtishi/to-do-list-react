import React from "react";

const List = ({ errands, onToggle }) => {
  return (
    <>
      {errands.map((errand) => {
        const { id, description, image, done } = errand;
        return (
          <article key={id} className="errand">
            <img
              src={
                done
                  ? "https://www.poornima.edu.in/wp-content/uploads/2020/08/green-circle-check-mark-confirmation-tick-marks-vector-21826245-600x598.jpg"
                  : image
              }
              alt={description}
            />
            <div>
              <h4
                onDoubleClick={() => onToggle(errand.id)}
                className={done ? "marked" : ""}
              >
                {description}
              </h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
