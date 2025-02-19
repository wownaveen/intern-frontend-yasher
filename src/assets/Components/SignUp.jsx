// eslint-disable-next-line no-unused-vars
import React, {useEffect} from "react";
import { Mail } from "lucide-react";
import { User, LockKeyhole, LockKeyholeOpen } from "lucide-react";
import Inputs from "./Inputs";
import Button from "./Button";
import Image from "./Image";
import SignIn from "./SignIn";

const SignUp = () => {
  
  return (
    <div className="flex  ">
      <div className="flex-1 p-12">
        <h2 className="text-xl font-bold text-black-600 pb-4">Sign Up</h2>
        <p>
          If you already have an account registered <br />
          You Can{" "}
          <a className="text-blue-700 hover:text-blue-900"   href={<SignIn/>}>
            Login Here!
          </a>
        </p>
        <br />

        {/* <div className="flex flex-col space-y-1">
          <label className="text-gray-500 text-sm">Email</label>
          <div className="flex items-center relative">
            <Mail size={18} className="w-5 h-5 text-gray-600 absolute" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="pl-7 w-full py-2 px-3 border-b focus:outline-none  focus:shadow-[0_1px_0_0_#1f2937]"
            />
          </div>
        </div> */}

        <Inputs
          type="text"
          title="Email"
          placeholder="Enter your Email address"
          icon={<Mail size={18} className="w-5 h-5 text-gray-600 absolute" />}
        />
        <br />
        <Inputs
          type="text"
          title="Username"
          placeholder="Enter your username"
          icon={<User size={18} className="w-5 h-5 text-gray-600 absolute" />}
        />
        <br />
        <Inputs
          type="password"
          title="Password"
          placeholder="Enter your Password"
          icon={
            <LockKeyhole size={18} className="w-5 h-5 text-gray-600 absolute" />
          }
        />
        <br />
        <Inputs
          type="password "
          title="Confirm Password"
          placeholder="Confirm your Password"
          icon={
            <LockKeyholeOpen
              size={18}
              className="w-5 h-5 text-gray-600 absolute"
            />
          }
        />
        <br />
        <Button name="Register" />
      </div>
      <Image sign='Sign Up' />
      
    </div>
  );
};

export default SignUp;
