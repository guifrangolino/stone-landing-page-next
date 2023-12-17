type DropdownMenuOptionDesc2Props = {
  text: string;
};

export function DropdownMenuOptionDesc2({
  text,
}: DropdownMenuOptionDesc2Props) {
  return (
    <p className="mt-[2px] text-sm font-normal text-color-dark-gray group-hover/option:text-color-dark-gray">
      {text}
    </p>
  );
}
