type PageSectionLinkTitleProps = {
  text: string;
};

export function PageSectionLinkTitle({ text }: PageSectionLinkTitleProps) {
  return (
    <p className="font-sharon-display text-lg font-medium leading-6 text-btn-secondary-hover-background-color lg:text-xl lg:leading-6">
      {text}
    </p>
  );
}
