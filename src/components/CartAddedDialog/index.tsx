import React from "react";

import { Button, Img, Line, List, Text } from "components";

type CartAddedDialogProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "title"
  | "description"
  | "cancelbuttontext"
  | "deletebuttontext"
  | "acceptbuttontext"
> &
  Partial<{
    title: string;
    description: string;
    cancelbuttontext: string;
    deletebuttontext: string;
    acceptbuttontext: string;
  }>;

const CartAddedDialog: React.FC<CartAddedDialogProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-4 items-start justify-start p-4 w-full">
          <div className="flex flex-1 flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[76px] w-full">
            <Text
              className="text-gray-900_01 text-xl w-full"
              size="txtIBMPlexSans20"
            >
              {props?.title}
            </Text>
          </div>
          <Button className="bg-white-A700 flex h-5 items-center justify-center p-[5px] w-5">
            <Img className="h-2.5" src="images/img_close.svg" alt="close" />
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start pb-12 w-full">
          <div className="flex flex-col items-start justify-start pb-6 px-4 w-full">
            <div className="flex flex-col items-start justify-start md:pr-10 pr-44 sm:pr-5 w-full">
              <Text
                className="leading-[20.00px] max-w-[752px] md:max-w-full text-gray-900_01 text-sm tracking-[0.16px]"
                size="txtIBMPlexSans14"
              >
                {props?.description}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-center pb-[31px] pt-[15px] px-4 w-full">
                  <Text
                    className="text-blue-A700_03 text-sm tracking-[0.16px] w-auto"
                    size="txtIBMPlexSans14BlueA70003"
                  >
                    {props?.cancelbuttontext}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 h-16 w-1/4"></div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 w-1/2 md:w-full"
                orientation="horizontal"
              >
                <div className="bg-gray-800_01 flex flex-col items-start justify-start sm:ml-[0] w-full">
                  <div className="flex flex-col items-center justify-center pb-[31px] pl-4 md:pr-10 pr-16 sm:pr-5 pt-[15px] w-full">
                    <Text
                      className="text-sm text-white-A700 tracking-[0.16px] w-auto"
                      size="txtIBMPlexSans14WhiteA700"
                    >
                      {props?.deletebuttontext}
                    </Text>
                  </div>
                </div>
                <div className="bg-blue-A700_03 flex flex-col items-start justify-start sm:ml-[0] w-full">
                  <div className="flex flex-col items-center justify-center pb-[31px] pl-4 md:pr-10 pr-16 sm:pr-5 pt-[15px] w-full">
                    <Text
                      className="text-sm text-white-A700 tracking-[0.16px] w-auto"
                      size="txtIBMPlexSans14WhiteA700"
                    >
                      {props?.acceptbuttontext}
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-white-A700 h-px w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

CartAddedDialog.defaultProps = {
  title: "Agregado a la cesta de la compra",
  description:
    "Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  cancelbuttontext: "Cancel",
  deletebuttontext: "Eliminar",
  acceptbuttontext: "Aceptar",
};

export default CartAddedDialog;
