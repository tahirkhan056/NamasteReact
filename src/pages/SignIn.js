import React from "react";

const SignIn = () => {
  return (
    <div className="w-screen h-screen z-20 sticky bg-gray-400 opacity-5 top-0 right-0">
      <div className="flex h-full justify-end">
        <div className="bg-white opacity-0">
          <div>
            <button>X</button>
          </div>
          <div>
            <span>SignIn</span>
            <span>or create an account</span>
          </div>
          <div>
            <input type={"text"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
