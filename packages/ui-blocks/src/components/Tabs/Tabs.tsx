import React, { useEffect, useState, useMemo } from "react";
import DefaultTabPicker from "./TabPicker";
import "./Tabs.css";

export interface ISingleTab {
  id: string;
  title: string;
  tabClassName?: string;
  hiddenAt?: boolean;
  extraTabContent?: JSX.Element;
}

interface ITabs {
  children: JSX.Element | JSX.Element[];
  tabs: ISingleTab[];
  initCurrentTab?: string;
  hideTabPicket?: boolean;
  setter?: (id: string) => void;
  TabPicker?: typeof DefaultTabPicker;
}

export default function Tabs({
  children,
  tabs,
  initCurrentTab = tabs[0].id,
  hideTabPicket,
  setter,
  TabPicker = DefaultTabPicker,
}: ITabs) {
  const shownTabs = useMemo(() => tabs.filter((tab) => !tab.hiddenAt), [tabs]);
  const [currentTab, setCurrentTab] = useState(
    initCurrentTab || shownTabs?.[0]?.id
  );
  console.log({currentTab});
  
  const passPropsToChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { currentTab, setCurrentTab })
  );

  useEffect(() => {
    if (initCurrentTab) setCurrentTab(initCurrentTab);
  }, [initCurrentTab]);

  useEffect(() => {
    !!setter && setter(currentTab);
  }, [currentTab]);

  return (
    <>
      {!hideTabPicket && (
        <TabPicker
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={shownTabs}
        />
      )}
      {passPropsToChildren}
    </>
  );
}

interface ITab {
  children: JSX.Element;
  tab: string;
  currentTab?: string;
  setCurrentTab?: React.Dispatch<React.SetStateAction<string>>;
}

Tabs.Tab = ({ children, currentTab, setCurrentTab, tab }: ITab) => {
  const passPropsToChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { currentTab, setCurrentTab })
  );
  return <>{tab === currentTab && passPropsToChildren}</>;
};
