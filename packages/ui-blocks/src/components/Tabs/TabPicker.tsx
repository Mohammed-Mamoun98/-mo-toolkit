import React from "react";
import { ISingleTab } from "./Tabs";
import clsx from "clsx";

export interface ITabPicker<IdType = string> {
  tabs: ISingleTab[];
  setCurrentTab: React.Dispatch<React.SetStateAction<IdType>>;
  currentTab: IdType;
  className?: string;
}

export default function DefaultTabPicker({
  tabs = [],
  setCurrentTab,
  currentTab,
  className,
}: ITabPicker) {
  return (
    <div className={clsx("tabs-picker", className)}>
      {tabs.map((tab) => (
        <React.Fragment key={tab.id}>
          <div
            onClick={() => setCurrentTab(tab.id)}
            className={clsx("tab pointer", tab.tabClassName, {
              "tab-active": currentTab === tab.id,
            })}
            data-testid={tab.title}
          >
            {currentTab === tab.id && <div className="active-indicator" />}
            {tab.title}
            {tab.extraTabContent}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
