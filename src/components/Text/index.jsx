import React from "react";

const sizeClasses = {
  txtInterRegular50: "font-inter font-normal",
  txtInterRegular40: "font-inter font-normal",
  txtInterRegular30: "font-inter font-normal",
  txtInterLight30WhiteA700: "font-inter font-light",
  txtInterRegular30Black900: "font-inter font-normal",
  txtInterSemiBold25: "font-inter font-semibold",
  txtInterSemiBold45: "font-inter font-semibold",
  txtInterLight18: "font-inter font-light",
  txtInterLight20Teal500: "font-inter font-light",
  txtInterBold30: "font-bold font-inter",
  txtInterLight25: "font-inter font-light",
  txtInterMedium30: "font-inter font-medium",
  txtInterLight45: "font-inter font-light",
  txtInterExtraBold45: "font-extrabold font-inter",
  txtInterLight20: "font-inter font-light",
  txtInterExtraBold65: "font-extrabold font-inter",
  txtInterLight30Black900: "font-inter font-light",
  txtInterLight30: "font-inter font-light",
  txtInterRegular45: "font-inter font-normal",
  txtInterExtraBold40: "font-extrabold font-inter",
  txtInterRegular25: "font-inter font-normal",
  txtInterExtraBold60: "font-extrabold font-inter",
  txtInterRegular40Black900: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
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
