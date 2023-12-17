import { ReactNode } from "react";

type PageSectionLinkIconProps = {
  icon: ReactNode;
};

export function PageSectionLinkIcon({ icon }: PageSectionLinkIconProps) {
  return <div className="mb-1 min-w-max">{icon}</div>;
}
