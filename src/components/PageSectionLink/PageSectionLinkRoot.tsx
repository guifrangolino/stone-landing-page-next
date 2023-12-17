import { ReactNode } from "react";

type PageSectionLinkRootProps = {
  children: ReactNode;
  href: string;
};

export function PageSectionLinkRoot({
  children,
  href,
}: PageSectionLinkRootProps) {
  return (
    <a
      href={href}
      className="hover:border-border-hover-color flex rounded-2xl border-2 border-border-color p-4 lg:flex-col lg:rounded-3xl lg:p-6"
    >
      {children}
    </a>
  );
}
