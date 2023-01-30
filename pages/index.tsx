import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent } from "react";
import InputField from "../components/InputField";
import Stepper from "../components/Stepper";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import UserNameForm from "../components/UserNameForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Multi step form</title>
      </Head>
      <div className="w-full min-h-screen flex justify-center items-center py-10 bg-gradient-to-r from-green-300 to-blue-500 ">
        <div className="w-1/2">
          <form className="bg-white rounded  h-auto text-center p-4">
            <span className="text-gray-700 font-semibold">
              Create Your Profile
            </span>
            {/* <Stepper /> */}
            <div className="text-left my-5">
              <h2 className="text-gray-700">User Name</h2>
              <p className="text-gray-500 text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Id,
                impedit
              </p>
              <hr className="h-px my-3 bg-gray-200 border-0" />
              <UserNameForm />
            </div>
            <div className="flex items-center justify-between">
              <button className="text-green-500 text-sm flex items-center duration-300 hover:text-green-600">
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
              <button className="text-green-500 text-sm flex items-center duration-300 hover:text-green-600">
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
