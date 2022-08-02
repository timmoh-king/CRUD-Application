import React from "react";

const ListGroup = ({
  categories,
  selectedItem,
  valueProperty,
  textProperty,
  onCategorySelect,
}) => {
  return (
    <div className="justify-center mt-[40px]" style={{ cursor: "pointer" }}>
      <ul className="bg-white rounded-md border border-todoblue w-60 text-tododarkfade">
        {categories.map((c) => (
          <li
            onClick={() => onCategorySelect(c)}
            key={c[valueProperty]}
            className={`px-6 py-2 text-sm font-medium border-b border-todoblue ${c === selectedItem ? "active: bg-todoblue" : ""} `} 
          >
            {c[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id",
};

export default ListGroup;
