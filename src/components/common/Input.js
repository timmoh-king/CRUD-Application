import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, label, value , ...rest }) => {
  const styles =
    "w-[500px] h-[45px] rounded-[3px] px-1 my-1 text-tododarkfade shadow-sm outline outline-1 drop-shadow-md drop-shadow-todogreen";

  return (
    <div className="mb-4">
      <div>
        <label className="text-tododark text-lg font-semibold" htmlFor={name}>
          {label}
        </label>
      </div>
      <div>

        <input
         value={ value }
          className={styles} 
          name={name} 
          id={name}
         {...rest}
          />

      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
