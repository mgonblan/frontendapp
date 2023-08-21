import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

type SideiconProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "category1" | "category2" | "category3"
> &
  Partial<{ category1: string; category2: string; category3: string }>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sideicon: React.FC<SideiconProps> = (props) => {
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    { label: <>{props?.category1}</> },
    { label: <>{props?.category2}</> },
    { label: <>{props?.category3}</> },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-9 mb-[1020px] mt-6 mx-auto"
          src="images/img_dhiwiselogo.svg"
          alt="dhiwiselogo"
        />
        <div className="flex flex-row items-start justify-between mb-[947px] mt-[109px] mx-auto w-[84%]">
          <Text
            className="mt-[3px] text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Categories
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_angleupoutline.svg"
            alt="angleupoutline"
          />
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingBottom: "13px",
              paddingLeft: "13px",
              flexDirection: "column",
              color: "#424c5d",
              fontSize: "14px",
              fontFamily: "Inter",
            },
          }}
          className="flex flex-col items-center justify-start mb-[858px] mt-36 md:pr-10 sm:pr-5 pr-[178px] w-[41%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <div className="flex flex-row items-center justify-between mb-[815px] mt-[241px] mx-auto w-[84%]">
          <Text
            className="text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Price
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown"
          />
        </div>
        <div className="flex flex-row items-center justify-between mb-[765px] mt-[291px] mx-auto w-[84%]">
          <Text
            className="text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Brands
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown_One"
          />
        </div>
        <div className="flex flex-row items-start justify-between mb-[715px] mt-[341px] mx-auto w-[84%]">
          <Text
            className="mt-[3px] text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Ratings
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown_Two"
          />
        </div>
        <div className="flex flex-row items-center justify-between mb-[665px] mt-[391px] mx-auto w-[84%]">
          <Text
            className="text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Color
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown_Three"
          />
        </div>
        <div className="flex flex-row items-center justify-between mb-[615px] mt-[441px] mx-auto w-[84%]">
          <Text
            className="text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Discount
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown_Four"
          />
        </div>
        <div className="flex flex-row items-center justify-between mb-[565px] mt-[491px] mx-auto w-[84%]">
          <Text
            className="text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            Offers
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_blue_gray_700.svg"
            alt="arrowdown_Five"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-2 items-start justify-center mb-[47px] ml-8 mr-[200px] mt-[1008px] p-0.5 w-[23%]">
          <Img
            className="h-6 mb-[45px] md:ml-[0] ml-[29px] mr-[244px] md:mt-0 mt-[1005px] w-6"
            src="images/img_questioncircleoutline.svg"
            alt="questioncircleo_One"
          />
          <Text
            className="mb-11 ml-2 md:ml-[0] mr-[197px] text-base text-blue_gray-700"
            size="txtOpenSansSemiBold16"
          >
            Help
          </Text>
        </div>
        <Img
          className="h-6 mb-[45px] md:ml-[0] ml-[29px] mr-[244px] md:mt-0 mt-[1005px] w-6"
          src="images/img_questioncircleoutline.svg"
          alt="questioncircleo_One"
        />
        <Text
          className="mb-11 ml-2 md:ml-[0] mr-[197px] text-base text-blue_gray-700"
          size="txtOpenSansSemiBold16"
        >
          Help
        </Text>
      </Sidebar>
    </>
  );
};

Sideicon.defaultProps = {
  category1: "Kids Footwear",
  category2: "Womens Footwear",
  category3: "Mens Footwear",
};

export default Sideicon;
