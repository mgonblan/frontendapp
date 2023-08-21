import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

type HeadermProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Headerm: React.FC<HeadermProps> = (props) => {
  const [group10270value, setGroup10270value] = React.useState<string>("");

  return (
    <>
      <header className={props.className}>
        <Input
          name="group10270"
          placeholder="Search"
          value={group10270value}
          onChange={(e) => setGroup10270value(e)}
          className="font-inter p-0 placeholder:text-blue_gray-200 sm:pl-5 text-base text-blue_gray-200 text-left w-full"
          wrapClassName="bg-white-A700 border border-blue_gray-300 border-solid flex md:mt-0 my-0.5 pl-[22px] pr-4 py-[15px] rounded-lg w-[46%] md:w-full"
          suffix={
            group10270value?.length > 0 ? (
              <CloseSVG
                className="mt-px mb-auto cursor-pointer h-5 ml-[35px]"
                onClick={() => setGroup10270value("")}
                fillColor="#bac1ce"
                height={20}
                width={20}
                viewBox="0 0 20 20"
              />
            ) : (
              <Img
                className="mt-px mb-auto cursor-pointer h-5 ml-[35px]"
                src="images/img_search_outline.svg"
                alt="search/Outline"
              />
            )
          }
        ></Input>
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-14 items-end justify-start md:ml-[0] ml-[446px] p-2 rounded-[50%] w-14">
          <div className="md:h-9 h-[35px] mb-1 relative w-9">
            <Img
              className="absolute bottom-[0] h-8 left-[0] w-8"
              src="images/img_belloutline.svg"
              alt="belloutline"
            />
            <Text
              className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
              size="txtOpenSansSemiBold12"
            >
              2
            </Text>
          </div>
        </div>
        <Img
          className="h-14 ml-6 md:ml-[0] w-14"
          src="images/img_contrast.svg"
          alt="contrast"
        />
      </header>
    </>
  );
};

Headerm.defaultProps = {};

export default Headerm;
