import React from "react";

const BandTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-sm font-semibold border 
            ${index % 3 === 0 ? "text-blue-700 border-blue-500 bg-blue-100" : ""}
            ${index % 3 === 1 ? "text-green-700 border-green-500 bg-green-100" : ""}
            ${index % 3 === 2 ? "text-purple-700 border-purple-500 bg-purple-100" : ""}
              hover:bg-opacity-80 transition`}
        >
        {tag.name}
      </span>
      ))}
    </div>
  );
};

export default BandTags;
