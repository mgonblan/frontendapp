import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Line, List, Text } from "components";
import CartAddedDialog from "components/CartAddedDialog";

const CartaddedModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[67%]"
      overlayClassName="bg-blue-900_28 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <CartAddedDialog className="bg-gray-100 flex flex-col items-start justify-start max-w-[960px] mx-auto my-[121px] md:px-5 w-full" />
      </div>
    </ModalProvider>
  );
};

export default CartaddedModal;
