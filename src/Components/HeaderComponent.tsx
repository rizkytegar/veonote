import React from "react";
import AddNoteModal from "./AddNoteModal";

const HeaderComponent: React.FC = () => {
  return (
    <div className="flex justify-between gap-2">
      <div></div>
      <div>
        <AddNoteModal />
      </div>
    </div>
  );
};

export default HeaderComponent;
