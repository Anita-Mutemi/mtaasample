import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto p-[69px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1165px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[161px] items-center justify-start md:mt-0 mt-[3px] w-[52%] md:w-full">
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
              size="txtInterSemiBold45"
            >
              Sign in
            </Text>
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Phone / email
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] rounded-[29px] shadow-bs w-[59%]"></div>
              </div>
              <a className="mt-[50px] text-teal-500 text-xl">
                <Text
                  className="common-pointer"
                  size="txtInterLight20Teal500"
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot password?
                </Text>
              </a>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Password
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] rounded-[29px] shadow-bs w-[59%]"></div>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[300px] mr-[181px] mt-[49px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                onClick={() => navigate("/businessdescriptionbizdetails")}
              >
                Sign in
              </Button>
              <Text
                className="common-pointer mt-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterLight25"
                onClick={() => navigate("/")}
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Do not have an account?{" "}
                </span>
                <span className="text-teal-500 font-inter text-left font-semibold">
                  Sign up
                </span>
              </Text>
            </div>
          </div>
          <div className="bg-gradient1  flex flex-col items-end justify-start p-[33px] sm:px-5 rounded-br-[15px] rounded-tr-[15px]">
            <Text
              className="mb-[592px] mt-[148px] md:text-5xl text-[65px] text-gray-100 tracking-[3.25px]"
              size="txtInterExtraBold65"
            >
              MtaaMall
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
