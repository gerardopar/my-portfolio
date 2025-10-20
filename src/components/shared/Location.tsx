import React from "react";

import Divider from "@components/shared/Divider";
import RotatingStatus from "@components/shared/RotatingText";

export const Location: React.FC = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center gap-8 max-mobile-768:hidden">
        <p className="text-primary-white font-jetbrains font-bold max-mobile-768:text-sm">
          🌴 Ventura, CA
        </p>
        <Divider className="max-mobile-888:hidden" />
        <p className="text-primary-white font-jetbrains font-bold max-mobile-888:hidden">
          Pacific Time (UTC-7)
        </p>
        <Divider />
        <RotatingStatus />
      </div>

      <div className="w-full hidden items-start justify-start gap-2 max-mobile-768:flex max-mobile-888:flex-col">
        <div className="flex items-center w-full gap-2">
          <Divider className="max-w-[50px]" />
          <p className="text-primary-white font-jetbrains font-bold max-mobile-768:text-sm">
            🌴 Ventura, CA
          </p>
        </div>
        <div className="flex items-center w-full gap-2">
          <Divider className="max-w-[50px]" />
          <p className="text-primary-white font-jetbrains font-bold">
            Pacific Time (UTC-7)
          </p>
        </div>
        <div className="flex items-center w-full gap-2">
          <Divider className="max-w-[50px]" />
          <RotatingStatus />
        </div>
      </div>
    </>
  );
};

export default Location;
