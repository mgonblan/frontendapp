import React from "react";

import { Button, Img, Text } from "components";

type HamburgerMenuCardbusinessProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userimage"
  | "username"
  | "userprice"
  | "ellipsetwoOne"
  | "visitorscounter"
  | "ellipsethreeOne"
  | "unlimitedprojects"
  | "ellipseoneOne"
  | "extendedfreetrial"
  | "addtocart"
  | "userimage1"
  | "username1"
  | "userprice1"
  | "ellipsetwoTwo"
  | "visitorscounter1"
  | "ellipsethreeTwo"
  | "unlimitedprojects1"
  | "ellipseoneTwo"
  | "extendedfreetrial1"
  | "addtocart1"
  | "onClick"
> &
  Partial<{
    userimage: string;
    username: string;
    userprice: string;
    ellipsetwoOne: string;
    visitorscounter: string;
    ellipsethreeOne: string;
    unlimitedprojects: string;
    ellipseoneOne: string;
    extendedfreetrial: string;
    addtocart: string;
    userimage1: string;
    username1: string;
    userprice1: string;
    ellipsetwoTwo: string;
    visitorscounter1: string;
    ellipsethreeTwo: string;
    unlimitedprojects1: string;
    ellipseoneTwo: string;
    extendedfreetrial1: string;
    addtocart1: string;
    onClick: () => void;
  }>;

const HamburgerMenuCardbusiness: React.FC<HamburgerMenuCardbusinessProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[443px] md:h-auto items-start justify-start w-[307px]">
          {!!props?.userimage1 ? (
            <Img
              className="h-[443px] md:h-auto object-cover w-[231px]"
              alt="imageOne_Two"
              src="props?.userimage1"
            />
          ) : null}
        </div>
        <div className="flex relative w-[91%] md:w-full">
          <div className="flex flex-col items-center justify-start ml-[undefinedpx] my-auto w-[382px] sm:w-full z-[1]">
            <div className="bg-white-A700 flex flex-col gap-[37px] h-[443px] md:h-auto items-center justify-start pl-[62px] pr-[76px] md:px-10 sm:px-5 py-8 rounded-md w-[382px] sm:w-full">
              <div className="flex flex-col gap-4 h-[120px] md:h-auto items-center justify-between w-full">
                {!!props?.username1 ? (
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-full"
                    size="txtInterRegular24"
                  >
                    {props?.username1}
                  </Text>
                ) : null}
                {!!props?.userprice1 ? (
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
                    size="txtInterRegular40"
                  >
                    {props?.userprice1}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-col gap-6 h-[135px] md:h-auto items-center justify-between w-full">
                <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                  {!!props?.ellipsetwoTwo ? (
                    <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                  ) : null}
                  {!!props?.visitorscounter1 ? (
                    <Text
                      className="common-pointer flex-1 text-blue_gray-700 text-lg w-auto"
                      size="txtInterRegular18Bluegray700"
                      onClick={props?.onClick}
                    >
                      {props?.visitorscounter1}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                  {!!props?.ellipsethreeTwo ? (
                    <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                  ) : null}
                  {!!props?.unlimitedprojects1 ? (
                    <Text
                      className="flex-1 text-blue_gray-700 text-lg w-auto"
                      size="txtInterRegular18Bluegray700"
                    >
                      {props?.unlimitedprojects1}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                  {!!props?.ellipseoneTwo ? (
                    <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                  ) : null}
                  {!!props?.extendedfreetrial1 ? (
                    <Text
                      className="flex-1 text-blue_gray-700 text-lg w-auto"
                      size="txtInterRegular18Bluegray700"
                    >
                      {props?.extendedfreetrial1}
                    </Text>
                  ) : null}
                </div>
              </div>
              {!!props?.addtocart1 ? (
                <Button className="bg-blue-800 cursor-pointer font-inter min-w-[230px] py-3 rounded-md text-base text-center text-white-A700">
                  {props?.addtocart1}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col h-[443px] md:h-auto items-start justify-start ml-[-66px] my-auto w-[307px] z-[1]">
            {!!props?.userimage1 ? (
              <Img
                className="h-[443px] md:h-auto object-cover w-[231px]"
                alt="imageOne_Two"
                src="props?.userimage1"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[382px] sm:w-full">
          <div className="bg-white-A700 flex flex-col gap-[37px] h-[443px] md:h-auto items-center justify-start pl-[62px] pr-[76px] md:px-10 sm:px-5 py-8 rounded-md w-[382px] sm:w-full">
            <div className="flex flex-col gap-4 h-[120px] md:h-auto items-center justify-between w-full">
              {!!props?.username1 ? (
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-full"
                  size="txtInterRegular24"
                >
                  {props?.username1}
                </Text>
              ) : null}
              {!!props?.userprice1 ? (
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
                  size="txtInterRegular40"
                >
                  {props?.userprice1}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-col gap-6 h-[135px] md:h-auto items-center justify-between w-full">
              <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                {!!props?.ellipsetwoTwo ? (
                  <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                ) : null}
                {!!props?.visitorscounter1 ? (
                  <Text
                    className="common-pointer flex-1 text-blue_gray-700 text-lg w-auto"
                    size="txtInterRegular18Bluegray700"
                    onClick={props?.onClick}
                  >
                    {props?.visitorscounter1}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                {!!props?.ellipsethreeTwo ? (
                  <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                ) : null}
                {!!props?.unlimitedprojects1 ? (
                  <Text
                    className="flex-1 text-blue_gray-700 text-lg w-auto"
                    size="txtInterRegular18Bluegray700"
                  >
                    {props?.unlimitedprojects1}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-4 h-[29px] md:h-auto items-center justify-between w-full">
                {!!props?.ellipseoneTwo ? (
                  <div className="bg-blue-A700_01 h-2 rounded-[50%] w-2"></div>
                ) : null}
                {!!props?.extendedfreetrial1 ? (
                  <Text
                    className="flex-1 text-blue_gray-700 text-lg w-auto"
                    size="txtInterRegular18Bluegray700"
                  >
                    {props?.extendedfreetrial1}
                  </Text>
                ) : null}
              </div>
            </div>
            {!!props?.addtocart1 ? (
              <Button className="bg-blue-800 cursor-pointer font-inter min-w-[230px] py-3 rounded-md text-base text-center text-white-A700">
                {props?.addtocart1}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

HamburgerMenuCardbusiness.defaultProps = {};

export default HamburgerMenuCardbusiness;
