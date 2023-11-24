import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const ForgotpasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-end justify-start mx-auto p-[69px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1158px] mx-auto w-full">
          <div className="bg-gradient1  flex flex-col items-end justify-start p-[42px] md:px-10 sm:px-5 rounded-br-[15px] rounded-tr-[15px]">
            <Text
              className="mb-[571px] mt-[151px] md:text-5xl text-[65px] text-gray-100 tracking-[3.25px]"
              size="txtInterExtraBold65"
            >
              MtaaMall
            </Text>
          </div>
          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-1 w-[52%] md:w-full">
            <Text
              className="md:ml-[0] ml-[117px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
              size="txtInterSemiBold45"
            >
              Forgot password
            </Text>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] mt-[73px]">
              <Text
                className="leading-[30.00px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                size="txtInterLight25"
              >
                Please enter the email address you’d like your password reset
                information sent to{" "}
              </Text>
              <Text
                className="md:ml-[0] ml-[19px] mt-[72px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                size="txtInterLight25"
              >
                enter your email address
              </Text>
              <Text
                className="bg-gray-100 border border-green-700_54 border-solid h-[60px] justify-center mt-[11px] pb-3 pl-[23px] pr-[35px] pt-4 sm:px-5 rounded-[30px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 text-shadow-ts w-[550px]"
                size="txtInterLight25"
              >
                janedoe123@gmail.com
              </Text>
            </div>
            <Button className="cursor-pointer font-bold leading-[normal] min-w-[600px] md:min-w-full mt-[118px] text-3xl sm:text-[26px] md:text-[28px] text-center">
              Request password reset
            </Button>
            <Text
              className="common-pointer md:ml-[0] ml-[231px] mt-[37px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
              onClick={() => navigate("/login")}
            >
              <span className="text-black-900 font-inter text-left font-light">
                Back to{" "}
              </span>
              <span className="text-teal-600 font-inter text-left font-light">
                sign in
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
