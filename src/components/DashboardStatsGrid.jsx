import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";

function DashboardStatsGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-500">
          <IoBagHandleOutline className="text-4xl text-white-500" />
        </div>
        <div>
          <span>Total Sales</span>
          <div className="div">
            <strong>$1,200</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoBagHandleOutline className="text-4xl text-white-500" />
        </div>
        <div>
          <span>Box b</span>
          <div className="div">
            <strong>Content for Box b</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoBagHandleOutline className="text-4xl text-white-500" />
        </div>
        <div>
          <span>Box c</span>
          <div className="div">
            <strong>Content for Box c</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
          <IoBagHandleOutline className="text-4xl text-white-500" />
        </div>
        <div>
          <span>Box d</span>
          <div className="div">
            <strong>Content for Box d</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-grey-200 flex item-center">
      {children}
    </div>
  );
}
