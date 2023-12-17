type ArrowLeftProps = {
  disabled?: boolean;
};

export function ArrowLeft({ disabled }: ArrowLeftProps) {
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
        d="M20.707 7.62627C21.0976 8.01679 21.0976 8.64996 20.707 9.04048L9.74747 20L20.707 30.9596C21.0976 31.3501 21.0976 31.9833 20.707 32.3738C20.3165 32.7643 19.6833 32.7643 19.2928 32.3738L7.62615 20.7071C7.23562 20.3166 7.23562 19.6835 7.62615 19.2929L19.2928 7.62627C19.6833 7.23574 20.3165 7.23574 20.707 7.62627Z"
      ></path>
    </svg>
  );
}
