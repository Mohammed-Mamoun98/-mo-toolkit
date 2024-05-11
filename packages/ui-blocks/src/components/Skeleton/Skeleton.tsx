import React from "react";
import "./Skeleton.css";

export interface ISkeletonProps {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  mockChildren?: JSX.Element | JSX.Element[];
  loading: boolean;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<ISkeletonProps> = ({
  className,
  children,
  mockChildren,
  loading,
  ...rest
}) => {
  const baseCLassName = (loading && "skeleton") || "";
  const mergedClassName = [className, baseCLassName].join(" ");
  return (
    <>
      {loading ? (
        <div className={mergedClassName} style={rest?.style}>
          {mockChildren}
        </div>
      ) : (
        children
      )}
    </>
  );
};
