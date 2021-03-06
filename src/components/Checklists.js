import React from "react";
import Checklist from "./Checklist.js";

function Checklists(props) {
  const { handleUpdate, checklists, handleDelete } = props;
  console.log(checklists)
  return (
    <div>
      {checklists && checklists.map((checklist) => (
        <Checklist
          key={checklist.id}
          checklist={checklist}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Checklists ;