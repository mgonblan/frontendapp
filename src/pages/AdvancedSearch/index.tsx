import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import HamburgerMenuCardbusiness from "components/HamburgerMenuCardbusiness";
import Headerm from "components/Headerm";
import Sideicon from "components/Sideicon";

import { CloseSVG } from "../../assets/images";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const AdvancedSearchPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    { label: "Kids Footwear" },
    { label: "Womens Footwear" },
    { label: "Mens Footwear" },
  ];
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-opensans items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
          <Sideicon className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-inter gap-8 items-center justify-start md:mt-0 mt-8 md:px-5 w-full">
            <Headerm className="flex md:flex-col flex-row md:gap-5 items-center justify-center sticky w-full" />
            <div className="flex flex-col md:gap-10 gap-[101px] items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-blue_gray-600 text-center text-lg w-auto"
                  size="txtInterRegular18"
                >
                  category
                </Text>
              </div>
              <div className="md:gap-5 gap-px grid grid-cols-1 items-start min-h-[auto] overflow-auto w-auto md:w-full">
                <div className="flex p-2.5 relative w-full">
                  <div className="flex my-auto w-[68%] md:w-full">
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-auto w-auto"
                      userimage="images/img_image1.png"
                      username="Name"
                      userprice="$0"
                      visitorscounter="500 visitors"
                      unlimitedprojects="Unlimited projects"
                      extendedfreetrial="extended free trial"
                      addtocart="add to cart"
                      userimage1="images/img_image1.png"
                      username1="Name"
                      userprice1="$0"
                      visitorscounter1="500 visitors"
                      unlimitedprojects1="Unlimited projects"
                      extendedfreetrial1="extended free trial"
                      addtocart1="add to cart"
                    />
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                      userimage="images/img_image1.png"
                      userimage1="images/img_image1.png"
                    />
                  </div>
                  <HamburgerMenuCardbusiness
                    className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                    username="Name"
                    userprice="$0"
                    visitorscounter="500 visitors"
                    unlimitedprojects="Unlimited projects"
                    extendedfreetrial="extended free trial"
                    addtocart="add to cart"
                    username1="Name"
                    userprice1="$0"
                    visitorscounter1="500 visitors"
                    unlimitedprojects1="Unlimited projects"
                    extendedfreetrial1="extended free trial"
                    addtocart1="add to cart"
                  />
                </div>
                <div className="flex p-2.5 relative w-full">
                  <div className="flex my-auto w-[68%] md:w-full">
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-auto w-auto"
                      userimage="images/img_image1.png"
                      username="Name"
                      userprice="$0"
                      visitorscounter="500 visitors"
                      unlimitedprojects="Unlimited projects"
                      extendedfreetrial="extended free trial"
                      addtocart="add to cart"
                      userimage1="images/img_image1.png"
                      username1="Name"
                      userprice1="$0"
                      visitorscounter1="500 visitors"
                      unlimitedprojects1="Unlimited projects"
                      extendedfreetrial1="extended free trial"
                      addtocart1="add to cart"
                    />
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                      userimage="images/img_image1.png"
                      userimage1="images/img_image1.png"
                    />
                  </div>
                  <HamburgerMenuCardbusiness
                    className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                    username="Name"
                    userprice="$0"
                    visitorscounter="500 visitors"
                    unlimitedprojects="Unlimited projects"
                    extendedfreetrial="extended free trial"
                    addtocart="add to cart"
                    username1="Name"
                    userprice1="$0"
                    visitorscounter1="500 visitors"
                    unlimitedprojects1="Unlimited projects"
                    extendedfreetrial1="extended free trial"
                    addtocart1="add to cart"
                  />
                </div>
                <div className="flex p-2.5 relative w-full">
                  <div className="flex my-auto w-[68%] md:w-full">
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-auto w-auto"
                      userimage="images/img_image1.png"
                      username="Name"
                      userprice="$0"
                      visitorscounter="500 visitors"
                      unlimitedprojects="Unlimited projects"
                      extendedfreetrial="extended free trial"
                      addtocart="add to cart"
                      userimage1="images/img_image1.png"
                      username1="Name"
                      userprice1="$0"
                      visitorscounter1="500 visitors"
                      unlimitedprojects1="Unlimited projects"
                      extendedfreetrial1="extended free trial"
                      addtocart1="add to cart"
                    />
                    <HamburgerMenuCardbusiness
                      className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                      userimage="images/img_image1.png"
                      userimage1="images/img_image1.png"
                    />
                  </div>
                  <HamburgerMenuCardbusiness
                    className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[-66px] my-auto w-auto z-[1]"
                    username="Name"
                    userprice="$0"
                    visitorscounter="500 visitors"
                    unlimitedprojects="Unlimited projects"
                    extendedfreetrial="extended free trial"
                    addtocart="add to cart"
                    username1="Name"
                    userprice1="$0"
                    visitorscounter1="500 visitors"
                    unlimitedprojects1="Unlimited projects"
                    extendedfreetrial1="extended free trial"
                    addtocart1="add to cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearchPage;
