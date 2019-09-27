import React, { useState } from "react";

import "../App.css";

const EditField = ({ dispatchEditItem, id, initialValue, toggleEdit }) => {
  const [editValue, setEditValue] = useState(initialValue);

  const handleChange = e => setEditValue(e.target.value);
  const onKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      dispatchEditItem({ id, item: editValue });
      toggleEdit(false);
    }
  };

  return (
    <input
      autoFocus
      type="text"
      onBlur={toggleEdit}
      onChange={e => handleChange(e)}
      onKeyDown={onKeyDown}
      value={editValue}
    />
  );
};

export default EditField;

