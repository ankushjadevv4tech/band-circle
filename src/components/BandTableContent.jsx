import React from "react";
import BandTags from "./BandTags";

function BandTableContent({ bandData }) {
  return (
    <table className="w-full border-collapse border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border border-gray-300">Band</th>
          <th className="p-2 border border-gray-300">Debut Year</th>
          <th className="p-2 border border-gray-300">Hometown</th>
          <th className="p-2 border border-gray-300">Tags</th>
        </tr>
      </thead>
      <tbody>
        {bandData.map((band, index) => (
          <tr
            key={index}
            className="even:bg-gray-100 odd:bg-white hover:bg-gray-50"
          >
            <td className="p-2 border border-gray-300">
              {band?.name || "Unknown"}
            </td>
            <td className="p-2 border border-gray-300">
              {band?.["life-span"]?.begin || "N/A"}
            </td>
            <td className="p-2 border border-gray-300">
              {band?.area?.name || "N/A"}
            </td>
            <td className="p-2 border border-gray-300">
              {band?.tags ? (
                <BandTags tags={band.tags} />
              ) : ""
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BandTableContent;
