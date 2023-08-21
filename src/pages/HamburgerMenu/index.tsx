import React from "react";

import { ToastContainer, toast } from "react-toastify";

import {
  GetBusinessSearchResponseType,
  GetCategoriesResponseType,
  getBusinessSearch,
  getCategories,
} from "service/api";

import { Button, Img, Text } from "components";
import HamburgerMenuCardbusiness from "components/HamburgerMenuCardbusiness";
import Headersearch from "components/Headersearch";

import "react-toastify/dist/ReactToastify.css";

const HamburgerMenuPage: React.FC = () => {
  const [categoriesData, setCategoriesData] =
    React.useState<GetCategoriesResponseType>();
  const [searchData, setSearchData] =
    React.useState<GetBusinessSearchResponseType>();

  function visitorsCounterTwo() {
    const req = { params: { locale: "es_ES" } };

    getCategories(req)
      .then((res) => {
        setCategoriesData(res?.data);

        localStorage.setItem(
          "categories",
          JSON.stringify(res?.data?.categories),
        );

        toast.success("acierto");
      })
      .catch((err) => {
        console.error(err);
        toast.error("fallo");
      });
  }
  function rowproducts() {
    const req = {
      params: { location: "Madrid, Madrid, Spain", locale: "es_ES" },
    };

    getBusinessSearch(req)
      .then((res) => {
        setSearchData(res?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Headersearch
          className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"
          onClick={() => rowproducts()}
        />
        <div className="flex flex-col items-start justify-start max-w-[1440px] w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start max-w-[683px] md:px-5 w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 text-center w-auto"
                size="txtInterRegular32"
              >
                Busca productos
              </Text>
              <Text
                className="text-blue_gray-600 text-center text-lg w-auto"
                size="txtInterRegular18"
              >
                y ofertas geniales cerca de
              </Text>
              <Text
                className="text-blue_gray-600 text-center text-lg w-auto"
                size="txtInterRegular18"
              >
                Madrid
              </Text>
            </div>
            <div className="md:gap-5 gap-px grid grid-cols-1 items-start max-w-[1440px] min-h-[auto] overflow-auto w-full">
              {searchData?.businesses?.map((searchElement, index) => {
                return (
                  <React.Fragment key={`searchElement${index}`}>
                    <div className="flex p-2.5 md:px-5 relative w-full">
                      <div className="flex my-auto w-[68%] md:w-full">
                        <HamburgerMenuCardbusiness
                          className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-auto w-auto"
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
                          onClick={() => visitorsCounterTwo()}
                          userimage={searchElement?.["image_url"]}
                          username={searchElement?.name}
                          userprice={searchElement?.price}
                          visitorscounter={searchElement?.categories}
                        />
                        <HamburgerMenuCardbusiness
                          className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-[-66px] my-auto w-auto z-[1]"
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
                          onClick={() => visitorsCounterTwo()}
                        />
                      </div>
                      <div className="h-[443px] ml-[-66px] my-auto w-[36%] z-[1]"></div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default HamburgerMenuPage;
