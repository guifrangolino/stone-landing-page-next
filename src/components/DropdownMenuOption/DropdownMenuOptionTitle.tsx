type DropdownMenuOptionTitleProps = {
  text: string;
};

export function DropdownMenuOptionTitle({
  text,
}: DropdownMenuOptionTitleProps) {
  return (
    <p className="text-sm font-medium group-hover/option:text-primary-color xl:text-base">
      {text}
    </p>
  );
}
