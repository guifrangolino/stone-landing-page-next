import { ReactNode } from "react";

type PageSectionLinkContentProps = {
  children: ReactNode;
};

export function PageSectionLinkContent({
  children,
}: PageSectionLinkContentProps) {
  return <div className="pl-4 lg:pl-0 lg:pt-4">{children}</div>;
}
