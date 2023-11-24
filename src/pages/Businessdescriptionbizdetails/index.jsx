import React from "react";

import { Button, Line, Text } from "components";

const BusinessdescriptionbizdetailsPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-end mx-auto p-3.5 w-full">
        <div className="flex flex-col items-start justify-start max-w-[1254px] mt-1.5 mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[35px] md:text-[41px] text-[45px] text-teal-500"
            size="txtInterExtraBold45"
          >
            MtaaMall
          </Text>
          <Text
            className="mt-[34px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
            size="txtInterRegular25"
          >
            <span className="text-black-900 font-inter text-left font-light">
              Welcome{" "}
            </span>
            <span className="text-teal-500 font-inter text-left font-light">
              Electropulse
            </span>
          </Text>
          <Text
            className="mt-[49px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
            size="txtInterLight25"
          >
            To proceed, please set your profile{" "}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2.5 md:ml-[0] mt-6 w-[86%] md:w-full">
            <Text
              className="bg-white-A700 border-2 border-solid border-teal-500 flex h-[100px] items-center justify-center sm:px-5 rounded-[50%] sm:text-4xl md:text-[38px] text-[40px] text-center text-shadow-ts text-teal-500 w-[100px]"
              size="txtInterRegular40"
            >
              1
            </Text>
            <Line className="bg-black-900 h-[5px] md:ml-[0] ml-[34px] md:mt-0 my-[47px] w-[29%]" />
            <Text
              className="bg-white-A700 border-2 border-gray-900 border-solid flex h-[100px] items-center justify-center md:ml-[0] ml-[33px] sm:px-5 rounded-[50%] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center text-shadow-ts w-[100px]"
              size="txtInterRegular40Black900"
            >
              2
            </Text>
            <Line className="bg-black-900 h-[5px] md:ml-[0] ml-[69px] md:mt-0 my-[47px] w-[29%]" />
            <Text
              className="bg-white-A700 border-2 border-gray-900 border-solid flex h-[100px] items-center justify-center ml-8 md:ml-[0] sm:px-5 rounded-[50%] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center text-shadow-ts w-[100px]"
              size="txtInterRegular40Black900"
            >
              3
            </Text>
          </div>
          <Text
            className="mt-8 sm:text-4xl md:text-[38px] text-[40px] text-teal-600"
            size="txtInterExtraBold40"
          >
            Business Details
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-5 w-[97%] md:w-full">
            <Text
              className="md:mt-0 mt-[19px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              Business Location
            </Text>
            <div className="bg-white-A700 h-[60px] mb-0.5 md:ml-[0] ml-[114px] rounded-[30px] w-[30%]"></div>
            <Text
              className="md:ml-[0] ml-[46px] md:mt-0 mt-[21px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              Category
            </Text>
            <div className="bg-white-A700 h-[60px] md:ml-[0] ml-[78px] md:mt-0 mt-0.5 rounded-[30px] w-1/4"></div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start mt-9 p-[27px] sm:px-5 rounded-[30px] w-full">
            <Text
              className="mb-[70px] ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900_59"
              size="txtInterMedium30"
            >
              Business Description
            </Text>
          </div>
          <Text
            className="mt-8 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
            size="txtInterSemiBold25"
          >
            Location details:
          </Text>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-11 w-[93%] md:w-full">
            <Text
              className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              Building Name:
            </Text>
            <Line className="bg-black-900 h-0.5 mb-[11px] ml-14 md:ml-[0] md:mt-0 mt-[22px] w-1/4" />
            <Text
              className="md:ml-[0] ml-[206px] md:mt-0 mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              Estate
            </Text>
            <Line className="bg-black-900 h-0.5 md:ml-[0] ml-[67px] md:mt-0 mt-[33px] w-1/4" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] w-[65%] md:w-full">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              Suv County:
            </Text>
            <div className="h-0.5 md:ml-[0] ml-[90px] md:mt-0 mt-[23px] relative w-[36%] md:w-full">
              <Line className="bg-black-900 h-0.5 m-auto w-full" />
              <Line className="absolute bg-black-900 h-0.5 inset-[0] justify-center m-auto w-full" />
            </div>
            <Text
              className="md:ml-[0] ml-[200px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtInterLight25"
            >
              County
            </Text>
          </div>
          <Line className="bg-black-900 h-0.5 md:ml-[0] ml-[868px] mt-[3px] w-[24%]" />
          <Button
            className="!text-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[200px] md:ml-[0] ml-[1024px] mt-[39px] text-3xl sm:text-[26px] md:text-[28px] text-center"
            size="xs"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default BusinessdescriptionbizdetailsPage;
