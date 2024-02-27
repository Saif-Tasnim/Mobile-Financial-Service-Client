import React from "react";
import img from "../../assets/login.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./EntryPage.css";
import { useLocation } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
// import Swal from "sweetalert2";

const EntryPage = () => {
  const location = useLocation();

//   if (location.state?.from?.pathname) {
//     Swal.fire({
//       title: "Login First",
//       iconHtml: "😞",
//       customClass: {
//         icon: "no-border",
//       },
//     });
//   }

  return (
    <section className="md:py-28 md:px-20 flex flex-col space-y-10 md:flex-row md:justify-center md:gap-20 bg-indigo-50">
      <div className="w-full h-[80vh] md:w-4/5 flex items-center">
        <img src={img} alt="" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* tabs section */}
      <div className="w-full text-center">
        <Tabs>
          <TabList role="tablist" className="tabs flex gap-5">
            <Tab
              role="tab"
              className="tab cursor-pointer w-1/3 py-3 border rounded-md bg-pending text-white transition-all duration-500 h-11 text-lg font-bold ml-0 md:ml-20"
            >
              Sign In
            </Tab>
            <Tab
              role="tab"
              className="tab cursor-pointer w-1/3 py-3 border rounded-md bg-pending text-white transition-all duration-500 h-11 text-lg font-bold"
            > Sign Up
            </Tab>
          </TabList>

          <TabPanel>
            <SignIn/>
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default EntryPage;
