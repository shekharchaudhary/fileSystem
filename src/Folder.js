import React, { useState } from "react";
import { File } from "./File";

export const Folder = ({ name, contents }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="folder">
      <div onClick={handleToggle}>
        {!isOpen ? "+" : "-"} <strong>{name}</strong>
      </div>
      {isOpen && (
        <div>
          {contents.map(({ name, children, type }, index) => {
            if (type === "file") {
              return <File key={index} name={name} />;
            }
            if (type === "folder") {
              return <Folder key={index} name={name} contents={children} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};
