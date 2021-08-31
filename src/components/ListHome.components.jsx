import React from "react";
import { Si1Password } from "react-icons/si";

function ListHome({ site }) {
  return (
    <>
      <div className="hover:bg-gray-300 rounded-md p-2">
        <div className="flex items-center">
          <Si1Password className="ml-2 mr-6 w-6 h-6" />
          <div>
            <h1 className="cursor-pointer hover:underline text-blue-800 font-medium text-lg">
              {site.siteName}
            </h1>
            <h1 className="text-md text-gray-500">{site.sitePassword}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListHome;
