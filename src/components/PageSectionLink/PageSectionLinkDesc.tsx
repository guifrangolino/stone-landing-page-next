type PageSectionLinkDescProps = {
  text: string;
};

export function PageSectionLinkDesc({ text }: PageSectionLinkDescProps) {
  return (
    <p className="pt-2 text-base leading-6 text-color-dark-gray lg:text-lg lg:leading-6">
      {text}
    </p>
  );
}
