import React from "react";

const Select = ({ name, label, options ,error, ...rest }) => {
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
        <select name={name} id={name} {...rest} className={styles}>
          {options.map((option) => (
            <option key={option.id} value={option.id} className="text-tododarkfade">
              {option.name}
            </option>
          ))}
        </select>
      </div>
      { error && <div role="alert" className="block sm:inline text-todoorange"> {error} </div>}
    </div>
  );
};

export default Select;
