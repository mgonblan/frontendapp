import React from "react";

const sizeClasses = {
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtIBMPlexSans20: "font-ibmplexsans font-normal",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular32: "font-inter font-normal",
  txtIBMPlexSans14BlueA70003: "font-ibmplexsans font-normal",
  txtInterRegular18Bluegray700: "font-inter font-normal",
  txtIBMPlexSans14: "font-ibmplexsans font-normal",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtIBMPlexSans14WhiteA700: "font-ibmplexsans font-normal",
  txtOpenSansSemiBold12: "font-opensans font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
