import React from "react";
import { SiTencentqq } from "react-icons/si";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";


function ListHome({ site }) {
  return (
    <>
      <div className="flex justify-between group hover:bg-gray-300 rounded-md p-2">

              <div className="flex items-center gap-6">
                  <SiTencentqq className="md:invisible group-hover:visible w-5 h-5 " />
                  <div>
                    <h1 className="cursor-pointer hover:underline text-blue-800 font-medium text-lg">
                      {site.siteName}
                    </h1>
                    <h1 className="text-md text-gray-500">{site.sitePassword}</h1>
                  </div>
              </div>

              <div className="flex items-center gap-3 mr-2">
                  <FaEdit className="invisible cursor-pointer  group-hover:visible w-5 h-5" />
                  <AiFillDelete className="invisible cursor-pointer group-hover:visible w-5 h-5" />
              </div>

      </div>
    </>
  );
}

export default ListHome;
