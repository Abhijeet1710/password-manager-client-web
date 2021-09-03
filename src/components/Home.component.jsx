import React, { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import ListHome from "./ListHome.components";
import { RiSearch2Line } from "react-icons/ri";

function Home({ setUser, user, setLogin }) {
  let [isOpen, setIsOpen] = useState(false);
  let [data, setData] = useState(user.data);

  function addItem() {
    let siteName = document.querySelector("#ipSiteName").value;
    let sitePassword = document.querySelector("#ipPassword").value;
    if(siteName === "" || sitePassword === "") {setIsOpen(false); return;}
    const siteData = {
          siteName : siteName,
          sitePassword : sitePassword
      }; 
        
    axios.post('/info/insert', {
        siteData : siteData,
        userId : user._id
      })
      .catch(function (error) {
        alert(error);
      });
    console.log("cl");

    user.data.push(siteData);
    setUser(user);
    setIsOpen(false);
  }

  function realTimeSearch() {
    let text = document.querySelector("#textToSearch").value.toLowerCase();

      let filteredData = [];
      user.data.forEach((singleD) => { 
          // console.log(singleD);
          if(singleD.siteName.toLowerCase().includes(text)) {
              filteredData.push(singleD);
          }
      });
      // user.data.push(siteData);
      // setUser(user);
      setData(filteredData);
      console.log(filteredData);
  }

  return (
    <>
      <div className="bg-fixed px-2">
        <div className="flex max-w-lg mx-auto justify-center py-10">
          <div className="flex bg-white p-3 w-full rounded-md shadow-lg ">
            <div className="w-full px-2">
              <input
                className="w-full outline-none font-medium"
                placeholder="Type here to search"
                id="textToSearch"
                onChange={realTimeSearch}
              ></input>
            </div>
            <div className="flex items-center">
              <RiSearch2Line className="w-5 h-5 text-black cursor-pointer " />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-3">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-2xl font-medium">My vault</h2>
          </div>
          <div className="">
            <button
              type="button"
              onClick={ () => setIsOpen(true) }
              className="px-4 py-2 text-sm font-medium rounded-full md:rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Add Item
            </button>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gray-300 mt-3"></div>
        {data.map((item, index) => {
          return <ListHome site={item} />;
        })}
        <div className="h-0.5 w-full bg-gray-300 mb-6"></div>
        <div className="text-center">
          <p className="text-gray-500 pb-16">
            Made with ❤️ By - Abhijeet Khamkar.
          </p>
        </div>
      </div>


      {/*  Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto mt-8"
          onClose={addItem}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. 
            <span
              className="inline-block h-screen my-10"
              aria-hidden="true"
            >
              &#8203;
            </span>
          */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl p-10 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-3xl md:rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 mb-4"
                >
                  Add Item
                </Dialog.Title>
                <div>
                  <label for="userName">Site</label>
                  <br></br>
                  <input
                    className="w-full mt-1 border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 rounded"
                    id="ipSiteName"
                    type="text"
                  ></input>
                </div>
                <div className="mt-3">
                  <label for="password">Password</label>
                  <br></br>
                  <input
                    className="w-full mt-1 border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 rounded"
                    id="ipPassword"
                    type="password"
                  ></input>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-900 rounded-full md:rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={addItem}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Home;
