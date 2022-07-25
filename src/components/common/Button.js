/**
 * @Author: Your name
 * @Date:   2022-07-25 01:50:22
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-25 04:05:17
 */
import React from "react";
import PropTypes from 'prop-types';

const Button = ({ label, page }) => {
  const style =
    "my-1 px-2 bg-todoblue text-todowhite font-semibold text-lg rounded-[5px] h-[40px]";

  return (
    <>
      {page ? (
        <button className={style} style={{ width: "500px"}}>
          {label}
        </button>
      ) : (
        <button className={style} style={{ width: "160px"}}>
          {label}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  page: PropTypes.bool.isRequired
}

export default Button;
