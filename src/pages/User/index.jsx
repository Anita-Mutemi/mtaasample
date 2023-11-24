import React from "react";

import { Img, List, Text } from "components";

const UserPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[84px] items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
          <Text
            className="mb-[47px] ml-9 md:ml-[0] md:mt-0 mt-[31px] md:text-5xl text-6xl text-teal-500"
            size="txtInterExtraBold60"
          >
            MtaaMall
          </Text>
          <Text
            className="bg-blue_gray-900_23 border-[3px] border-solid border-teal-600 h-[70px] justify-center mb-12 md:ml-[0] ml-[31px] md:mt-0 mt-[33px] sm:pl-5 pl-[35px] pr-3.5 py-4 rounded-[30px] text-3xl sm:text-[26px] md:text-[28px] text-black-900_7f text-shadow-ts w-[585px]"
            size="txtInterLight30"
          >
            search for shop, Brand Categories...
          </Text>
          <div className="bg-blue_gray-900_23 border-[3px] border-solid border-teal-500 flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-center mb-12 md:ml-[0] ml-[150px] mr-[27px] md:mt-0 mt-[33px] p-[15px] rounded-[30px] shadow-bs w-[24%] md:w-full">
            <Img
              className="h-10 md:h-auto sm:ml-[0] ml-[19px] object-cover w-10"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
            <Text
              className="mr-[115px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtInterLight30Black900"
            >
              account
            </Text>
          </div>
        </header>
        <List
          className="flex flex-col gap-16 items-center max-w-[1382px] mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[35px] sm:px-5 rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start mb-[27px] w-[98%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                      <Img
                        className="h-[62px] sm:h-auto mb-1 object-cover w-[7%] md:w-full"
                        src="images/img_screenshotfrom.png"
                        alt="screenshotfrom"
                      />
                      <Text
                        className="ml-8 md:ml-[0] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                        size="txtInterRegular45"
                      >
                        <span className="text-teal-500 font-inter text-left font-bold">
                          ElectroPulse
                        </span>
                        <span className="text-black-900 font-inter text-left font-normal">
                          {" "}
                        </span>
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[460px] md:mt-0 mt-[29px] text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                        size="txtInterRegular30"
                      >
                        LOCATION
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[3px] w-[92%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-3 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterRegular30Black900"
                      >
                        ELECTRONICS SHOP
                      </Text>
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtInterBold30"
                      >
                        <>
                          Ngong Road,
                          <br />
                          Green House
                        </>
                      </Text>
                    </div>
                    <Text
                      className="mt-[25px] text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                      size="txtInterRegular30"
                    >
                      About ElectorPulse
                    </Text>
                    <Text
                      className="leading-[50.00px] mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-full"
                      size="txtInterLight30Black900"
                    >
                      <>
                        An electronic shop is a retail hub for all things tech.
                        From smartphones to laptops, cameras to audio gear,
                        it&#39;s a haven for gadget lovers. Services like
                        repairs and tech support often complement the diverse
                        array of cutting-edge products on display
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_image11.png"
                    alt="imageEleven"
                  />
                </div>
                <div className="flex flex-row md:gap-10 items-start justify-between mt-[49px] w-[88%] md:w-full">
                  <Text
                    className="mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterLight30Black900"
                  >
                    Call us on{" "}
                  </Text>
                  <Text
                    className="mb-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterLight30Black900"
                  >
                    Follow us on
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-6 w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtInterLight30Black900"
                  >
                    0712345678
                  </Text>
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[613px] object-cover w-[50px]"
                    src="images/img_image6.png"
                    alt="imageSix"
                  />
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                    src="images/img_image7.png"
                    alt="imageSeven"
                  />
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                    src="images/img_image8.png"
                    alt="imageEight"
                  />
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                    src="images/img_image12.png"
                    alt="imageTwelve"
                  />
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                    src="images/img_image9.png"
                    alt="imageNine"
                  />
                  <Img
                    className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                    src="images/img_image10.png"
                    alt="imageTen"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[19px] rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start mb-[57px] w-[95%] md:w-full">
              <div className="flex flex-col gap-4 justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[78%] md:w-full">
                  <div className="h-[62px] md:h-[66px] mb-1 relative w-[7%] md:w-full">
                    <Img
                      className="h-[62px] m-auto object-cover w-full"
                      src="images/img_screenshotfrom.png"
                      alt="screenshotfrom"
                    />
                    <Img
                      className="absolute h-[62px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_screenshotfrom.png"
                      alt="screenshotfrom_One"
                    />
                  </div>
                  <div className="h-[61px] ml-8 md:ml-[0] relative w-[32%] md:w-full">
                    <Text
                      className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtInterRegular50"
                    >
                      <span className="text-teal-500 font-inter text-left font-bold">
                        ElectroPulse
                      </span>
                      <span className="text-black-900 font-inter text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-max"
                      size="txtInterRegular50"
                    >
                      <span className="text-teal-500 font-inter text-left font-bold">
                        ElectroPulse
                      </span>
                      <span className="text-black-900 font-inter text-left font-normal">
                        {" "}
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[430px] md:mt-0 mt-[29px] text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                    size="txtInterRegular30"
                  >
                    LOCATION
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[22px] w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[81%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30Black900"
                    >
                      ELECTRONICS SHOP
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterBold30"
                    >
                      <>
                        Ngong Road,
                        <br />
                        Green House
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                    size="txtInterRegular30"
                  >
                    About ElectorPulse
                  </Text>
                  <Text
                    className="leading-[50.00px] mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[90%] sm:w-full"
                    size="txtInterLight30Black900"
                  >
                    <>
                      An electronic shop is a retail hub for all things tech.
                      From smartphones to laptops, cameras to audio gear,
                      it&#39;s a haven for gadget lovers. Services like repairs
                      and tech support often complement the diverse array of
                      cutting-edge products on display
                    </>
                  </Text>
                  <div className="flex flex-row md:gap-10 items-start justify-between mt-[51px] w-[88%] md:w-full">
                    <Text
                      className="mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      Call us on{" "}
                    </Text>
                    <Text
                      className="mb-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      Follow us on
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-4 w-full">
                    <Text
                      className="mb-[3px] md:mt-0 mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      0712345678
                    </Text>
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[588px] object-cover w-[50px]"
                      src="images/img_image6.png"
                      alt="imageThirteen"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image7.png"
                      alt="imageFourteen"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image8.png"
                      alt="imageFifteen"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image12.png"
                      alt="imageNineteen"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image9.png"
                      alt="imageSixteen"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image10.png"
                      alt="imageSeventeen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-[20px] w-full">
            <div className="flex flex-col items-center justify-start mb-[25px] w-[96%] md:w-full">
              <div className="flex flex-col gap-2.5 justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[79%] md:w-full">
                  <Img
                    className="h-[62px] sm:h-auto mb-1 object-cover w-[7%] md:w-full"
                    src="images/img_screenshotfrom.png"
                    alt="screenshotfrom"
                  />
                  <Text
                    className="ml-8 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtInterRegular50"
                  >
                    ElectroPulse{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[430px] md:mt-0 mt-[29px] text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                    size="txtInterRegular30"
                  >
                    LOCATION
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[81%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-1.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterRegular30Black900"
                    >
                      ELECTRONICS SHOP
                    </Text>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterBold30"
                    >
                      <>
                        Ngong Road,
                        <br />
                        Green House
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-green-700_c9"
                    size="txtInterRegular30"
                  >
                    About ElectorPulse
                  </Text>
                  <Text
                    className="leading-[50.00px] mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[90%] sm:w-full"
                    size="txtInterLight30Black900"
                  >
                    <>
                      An electronic shop is a retail hub for all things tech.
                      From smartphones to laptops, cameras to audio gear,
                      it&#39;s a haven for gadget lovers. Services like repairs
                      and tech support often complement the diverse array of
                      cutting-edge products on display
                    </>
                  </Text>
                  <div className="flex flex-row md:gap-10 items-start justify-between mt-[75px] w-[88%] md:w-full">
                    <Text
                      className="mt-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      Call us on{" "}
                    </Text>
                    <Text
                      className="mb-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      Follow us on
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[18px] w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtInterLight30Black900"
                    >
                      0712345678
                    </Text>
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[588px] object-cover w-[50px]"
                      src="images/img_image6.png"
                      alt="imageTwentySeven"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image7.png"
                      alt="imageTwentyEight"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image8.png"
                      alt="imageTwentyNine"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image12.png"
                      alt="imageThirtyThree"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image9.png"
                      alt="imageThirty"
                    />
                    <Img
                      className="h-[50px] md:h-auto md:ml-[0] ml-[37px] object-cover w-[50px]"
                      src="images/img_image10.png"
                      alt="imageThirtyOne"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
        <div className="bg-green-700_c9 flex md:flex-col flex-row md:gap-5 items-start justify-end p-[18px] w-full">
          <Text
            className="md:mt-0 mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterLight30WhiteA700"
          >
            About US
          </Text>
          <Text
            className="md:ml-[0] ml-[392px] md:mt-0 mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterLight30WhiteA700"
          >
            Services
          </Text>
          <Text
            className="md:ml-[0] ml-[321px] md:mt-0 mt-[26px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtInterLight30WhiteA700"
          >
            Contact Us
          </Text>
          <div className="bg-blue_gray-100 flex flex-col h-20 items-end justify-start mb-[123px] md:ml-[0] ml-[101px] mr-[33px] p-2.5 md:px-5 rounded-[50%] w-20">
            <Img
              className="h-[58px] mr-[21px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
