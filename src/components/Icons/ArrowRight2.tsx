type ArrowRight2Props = {
  disabled?: boolean;
};

export function ArrowRight2({ disabled }: ArrowRight2Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 w-10 fill-current ${
        disabled ? "text-btn-border-color" : "text-primary-color"
      } md:h-12 md:w-12`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33325 20C7.33325 19.4477 7.78097 19 8.33325 19H31.6666C32.2189 19 32.6666 19.4477 32.6666 20C32.6666 20.5523 32.2189 21 31.6666 21H8.33325C7.78097 21 7.33325 20.5523 7.33325 20Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2929 7.62627C19.6834 7.23574 20.3166 7.23574 20.7071 7.62627L32.3738 19.2929C32.7643 19.6835 32.7643 20.3166 32.3738 20.7071L20.7071 32.3738C20.3166 32.7643 19.6834 32.7643 19.2929 32.3738C18.9024 31.9833 18.9024 31.3501 19.2929 30.9596L30.2525 20L19.2929 9.04048C18.9024 8.64996 18.9024 8.01679 19.2929 7.62627Z"
      ></path>
    </svg>
  );
}
