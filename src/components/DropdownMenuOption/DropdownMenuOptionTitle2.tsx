type DropdownMenuOptionTitle2Props = {
  text: string;
};

export function DropdownMenuOptionTitle2({
  text,
}: DropdownMenuOptionTitle2Props) {
  return (
    <p className="text-base font-medium group-hover/option:text-primary-color">
      {text}
    </p>
  );
}
