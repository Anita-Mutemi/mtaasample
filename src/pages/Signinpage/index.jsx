import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Radio, Text } from "components";

const SigninpagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto p-11 md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row gap-5 items-start justify-center max-w-[1063px] mb-[50px] mx-auto w-full">
          <div className="bg-gradient  flex flex-col gap-[17px] items-start justify-center p-[55px] md:px-10 sm:px-5 rounded-bl-[15px] rounded-tl-[15px]">
            <Text
              className="mt-40 sm:text-[35px] md:text-[41px] text-[45px] text-gray-100"
              size="txtInterLight45"
            >
              Welcome to{" "}
            </Text>
            <Text
              className="mb-[463px] md:text-5xl text-[65px] text-gray-100 tracking-[3.25px]"
              size="txtInterExtraBold65"
            >
              MtaaMall
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col gap-[38px] items-center justify-start md:mt-0 mt-[26px] w-[58%] md:w-full">
            <Text
              className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
              size="txtInterSemiBold45"
            >
              Sign up
            </Text>
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="sm:mt-0 mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Business name{" "}
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] mb-1.5 rounded-[29px] shadow-bs w-[58%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[25px] w-full">
                <Text
                  className="sm:mt-0 mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Business Email
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] mb-1.5 rounded-[29px] shadow-bs w-[58%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-between mt-[25px] w-full">
                <Text
                  className="sm:mt-0 mt-9 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Business phone NO
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] mb-2 rounded-[29px] shadow-bs w-[58%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[23px] w-full">
                <Text
                  className="sm:mt-0 mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Password
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] mb-1.5 rounded-[29px] shadow-bs w-[58%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-11 items-end justify-between mt-[23px] w-[99%] md:w-full">
                <Text
                  className="sm:mt-0 mt-7 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                  size="txtInterLight25"
                >
                  Confirm Password
                </Text>
                <div className="bg-gray-100 border border-green-700_54 border-solid h-[59px] rounded-[29px] shadow-bs w-[58%]"></div>
              </div>
              <Radio
                value="Ivereadandagreetermsandconditions"
                className="font-thin leading-[normal] mr-[167px] mt-[25px] sm:pl-5 text-black-900 text-left text-xl"
                inputClassName="bg-gray-100 border border-solid border-teal-500 h-[25px] mr-[5px] rounded-[12px] w-[25px]"
                checked={false}
                name="ivereadandagreeOne"
                label="Ive read and agree terms and conditions  "
                id="Ivereadandagreetermsandconditions"
              ></Radio>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[300px] mr-[179px] mt-2.5 text-3xl sm:text-[26px] md:text-[28px] text-center"
                onClick={() => navigate("/login")}
              >
                Sign Up
              </Button>
              <Text
                className="common-pointer mt-3 text-black-900 text-xl"
                size="txtInterLight20"
                onClick={() => navigate("/login")}
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Already have an account?{" "}
                </span>
                <span className="text-teal-500 font-inter text-left font-semibold">
                  Sign In
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  {" "}
                </span>
              </Text>
              <div className="flex flex-row items-start justify-center mt-[17px] w-[44%] md:w-full">
                <Img
                  className="h-[31px] md:h-auto object-cover w-1/5"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Text
                  className="ml-[81px] text-black-900 text-xl"
                  size="txtInterLight20"
                >
                  or
                </Text>
                <Img
                  className="h-[31px] md:h-auto ml-[62px] object-cover w-1/5"
                  src="images/img_image1.png"
                  alt="imageTwo"
                />
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[54px] items-center justify-between mt-0.5 w-[92%] md:w-full">
                <div
                  className="common-pointer bg-gray-100 border border-solid border-teal-500 flex flex-row gap-[7px] items-center justify-start p-2.5 rounded-[24px] shadow-bs w-[46%] sm:w-full"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    className="h-7 md:h-auto ml-[9px] object-cover w-7"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtInterLight18"
                  >
                    Sign Up with Google
                  </Text>
                </div>
                <div className="bg-gray-100 border border-solid border-teal-500 flex flex-row gap-[7px] items-center justify-end p-0.5 rounded-[24px] shadow-bs w-[45%] sm:w-full">
                  <Img
                    className="h-[38px] md:h-auto my-[3px] object-cover w-[38px]"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                  <Text
                    className="text-black-900 text-lg"
                    size="txtInterLight18"
                  >
                    Sign Up with Facebook
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninpagePage;
