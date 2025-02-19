// eslint-disable-next-line no-unused-vars
import React from "react";
import Inputs from "./Inputs";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "./Button";
import Image from "./Image";

const SignIn = () => {
  return (
    <div className="flex  ">
      <div className="flex-1 p-12">
        <h2 className="text-xl font-bold text-black-600 pb-4">Sign Up</h2>
        <p>
          If you already have an account registered <br />
          You Can{" "}
          <a className="text-blue-700 hover:text-blue-900" href="">
            Login Here!
          </a>
        </p>
        <br />

        <Inputs
          type="text"
          title="Email"
          placeholder="Enter your Email address"
          icon={<Mail size={18} className="w-5 h-5 text-gray-600 absolute" />}
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

        <br />
        <Button name="Login" />
      </div>
      <Image sign="Sign In" />
    </div>
  );
};

export default SignIn;
