import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, page, ...rest}) => {
  const style =
    "my-1 px-2 bg-todoblue text-todowhite font-semibold text-lg rounded-[5px] h-[45px]";

  return (
    <>
      {page ? (
        <button {...rest} className={style} style={{ width: "500px" }}>
          {label}
        </button>
      ) : (
        <button {...rest} className={style} style={{ width: "160px" }}>
          {label}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  page: PropTypes.bool.isRequired,
};

export default Button;
