type DropdownMenuOptionDesc3Props = {
  text: string;
};

export function DropdownMenuOptionDesc3({
  text,
}: DropdownMenuOptionDesc3Props) {
  return (
    <p className="mt-[2px] text-base font-semibold text-color-dark-gray">
      {text}
    </p>
  );
}
