import React from "react";
import axios from "axios";
import { CgLogIn } from "react-icons/cg";
import { AiOutlineWallet } from "react-icons/ai";


function Gateway({ isLogedIn, setLogin, setUser, user }) {

  
  const logInBtnClicked = () => {  
    let userName = document.querySelector("#ipUserName").value;
    let masterPassword = document.querySelector("#ipMasterPassword").value;
    let email = document.querySelector("#ipEmail").value;

    axios.post('https://passwordmanager-api.herokuapp.com/user/login', {
        userName: userName,
        masterPassword: masterPassword,
        email: email,
      })
      .then(function (response) {
        console.log(response.data.user)
        setUser(response.data.user);
        setLogin(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signUpBtnClicked = () => {

    let userName = document.querySelector("#ipUserName").value;
    let masterPassword = document.querySelector("#ipMasterPassword").value;
    let email = document.querySelector("#ipEmail").value;

    axios.post('https://passwordmanager-api.herokuapp.com/user/new', {
        userName: userName,
        masterPassword: masterPassword,
        email: email,
      })
      .then(function (response) {
        alert("Account created sucessfully !");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="px-2 max-w-md mx-auto">
        <div className="py-10">
          <div className="text-center">
            <div className="w-60 h-10 mx-auto">
              <img
                className="w-full h-full"
                src="https://vault.bitwarden.com/images/logo-dark@2x.png"
                alt="logo"
              />
            </div>
            <h3 className="mx-auto text-gray-500 text-lg p-3">
              Log in or create a new account to access your secure vault.
            </h3>
          </div>
          <div className="bg-white border mt-4 py-3 px-8 rounded-md shadow-xl">
            <div>
              <label for="ipUserName">User name</label>
              <br></br>
              <input
                className="w-full mt-1 border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring focus:border-blue-300 rounded"
                id="ipUserName"
                type="text"
              ></input>
            </div>
            <div className="mt-1">
              <label for="ipMasterPassword">Master password</label>
              <br></br>
              <input
                className="w-full mt-1 border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring focus:border-blue-300 rounded"
                id="ipMasterPassword"
                type="password"
              ></input>
            </div>
            <div className="mt-1">
              <label for="ipEmail">Email address</label>
              <br></br>
              <input
                className="w-full mt-1 border border-gray-300 px-2 py-1.5 text-xs focus:outline-none focus:ring focus:border-blue-300 rounded"
                id="ipEmail"
                type="email"
              ></input>
            </div>
            <p className="text-blue-600 text-sm cursor-pointer mt-1 hover:underline">
              Get master password hint
            </p>
            <div className="flex flex-nowrap mt-6">
              <div
                onClick={logInBtnClicked}
                className="flex items-center justify-center rounded bg-blue-600 hover:bg-blue-800 w-1/2 mr-1 py-1 text-white focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
              >
                <CgLogIn className="mr-1" />
                <p className="ml-1">Log in</p>
              </div>
              <div
                onClick={signUpBtnClicked}
                className="flex items-center justify-center rounded border bg-gray-100 hover:bg-gray-300 w-1/2 ml-1 py-1focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
              >
                <AiOutlineWallet className="mr-1" />
                <p className="ml-1">Create account</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-500">Made with ❤️ By - Abhijeet Khamkar.</p>
        </div>
      </div>
    </>
  );
}

export default Gateway;
