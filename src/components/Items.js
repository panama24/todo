import React, { useState } from "react";
import { connect } from "react-redux";

import EditField from './EditField';
import { deleteItem, editItem } from "../actions";
import "../App.css";

const mapDispatchToProps = dispatch => ({
  dispatchDeleteItem: id => dispatch(deleteItem(id)),
  dispatchEditItem: (id, newItem) => dispatch(editItem(id, newItem))
});

const mapStateToProps = ({ items }) => ({ items });

const Items = ({ dispatchDeleteItem, dispatchEditItem, items }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = id => setIsEditing(id);

  return (
    !!items.length &&
    items.map(({ id, payload }) => {
      const isBeingEdited = isEditing && isEditing === id;
      return (
        <div className="item-wrap" key={id}>
          {isBeingEdited ? (
            <EditField
             dispatchEditItem={dispatchEditItem}
             id={id}
             initialValue={payload}
             toggleEdit={toggleEdit}
            />
          ) : (
            <div
             className="item"
             onClick={e => toggleEdit(id)}
            >
              {payload}
            </div>
          )}
          <div className="delete" onClick={() => dispatchDeleteItem({ id })}>
            X
          </div>
        </div>
      );
    })
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);

