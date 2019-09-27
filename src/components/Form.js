import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../actions";
import "../App.css";

const mapDispatchToProps = dispatch => ({
  dispatchAddItem: item => dispatch(addItem(item))
});

let id = 0;
const Form = ({ dispatchAddItem }) => {
  const [value, setValue] = useState("");

  const handleChange = e => setValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatchAddItem({ id: ++id, payload: value });
    setValue("");
  };

  return (
    <div className="form-wrap">
      <form>
        <input
          type="text"
          value={value}
          onChange={e => handleChange(e)}
          placeholder="Add Task"
        />
        <div className="button-wrap">
          <button onClick={e => handleSubmit(e)}>+</button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Form);

