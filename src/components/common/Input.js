/**
 * @Author: Your name
 * @Date:   2022-07-25 01:50:51
 * @Last Modified by:   Your name
 * @Last Modified time: 2022-07-25 03:49:07
 */
import React from "react";
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, name, type }) => {
  const styles =
    "w-[500px] h-[40px] rounded-[3px] my-1 text-tododarkfade shadow-sm shadow-tododarkfade focus:outline-none";

  return (
    <div className="mb-4">
      <div>
        <label className="text-tododark text-lg font-semibold mb-3" htmlFor={name}>
          {label}
        </label>
      </div>
      <div>
        <input
          className={styles}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired
}

export default Input;
