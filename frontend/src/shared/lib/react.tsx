import { Children, createElement, isValidElement } from "react";

const ComposeChildren = ({ children }: { children: React.ReactNode }) => {
  const array = Children.toArray(children);
  const last = array.pop();
  return (
    <>
      {array.reduceRight((child, element) => {
        return isValidElement(element)
          ? createElement(element.type, element.props, child)
          : child;
      }, last)}
    </>
  );
};

export default ComposeChildren;
