import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, options, ...rest }) => {
  const styles =
    "w-[500px] h-[45px] rounded-[3px] pl-1 pr-2 my-2 shadow-sm outline outline-1 drop-shadow-md";

  return (
    <div className="mb-4">
      <div>
        <label className="text-tododark text-lg font-semibold" htmlFor={name}>
          {label}
        </label>
      </div>
      <div>
        <select name={""} {...rest} className={styles}>
          <option key={"/"} className="text-tododarkfade">
            Important
          </option>
        </select>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Select;
