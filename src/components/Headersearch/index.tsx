import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type HeadersearchProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "onClick"
> &
  Partial<{ onClick: () => void }>;

const Headersearch: React.FC<HeadersearchProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-8 md:mt-0 my-[9px] w-8"
          src="images/img_subjectoutline.svg"
          alt="subjectoutline"
        />
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[30px] w-[96%] md:w-full">
          <Img
            className="h-9"
            src="images/img_dhiwiselogo.svg"
            alt="dhiwiselogo"
          />
          <ul className="flex flex-row sm:hidden items-center justify-start md:ml-[0] ml-[222px] w-[29%] md:w-full common-row-list">
            <li>
              <a>
                <div
                  className="common-pointer flex flex-row gap-2.5 items-center justify-between"
                  onClick={props?.onClick}
                >
                  <Text
                    className="text-base text-center text-gray-900"
                    size="txtInterRegular16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div className="flex flex-row gap-[7px] items-center justify-center ml-[22px]">
                  <Text
                    className="text-base text-center text-gray-900"
                    size="txtInterRegular16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_One"
                  />
                </div>
              </a>
            </li>
            <li>
              <a className="ml-[58px] text-base text-center text-gray-900">
                <Text
                  className="common-pointer"
                  size="txtInterRegular16"
                  onClick={() => navigate("/advancedsearch")}
                >
                  Buscar
                </Text>
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-6 items-center justify-between md:ml-[0] ml-[260px] w-[19%] md:w-full">
            <a
              href="javascript:"
              className="text-base text-gray-900 text-right"
            >
              <Text size="txtInterRegular16">Sign in</Text>
            </a>
            <Button className="bg-blue-A700 cursor-pointer font-inter min-w-[148px] py-[15px] rounded-md text-base text-center text-white-A700">
              Sign up for free
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Headersearch.defaultProps = {};

export default Headersearch;
