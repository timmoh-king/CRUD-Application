import React from "react";

const Button = ({ label, page }) => {
  const style =
    "my-1 px-2 bg-todoblue text-todowhite font-semibold text-lg rounded-[5px]";

  return (
    <>
      {page ? (
        <button className={style} style={{ width: "500px", height: "50px" }}>
          {label}
        </button>
      ) : (
        <button className={style} style={{ width: "160px", height: "40px" }}>
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
