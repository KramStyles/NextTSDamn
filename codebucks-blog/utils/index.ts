export const cx = (...classNames: (string | undefined | null | false)[]) =>
  classNames.filter(Boolean).join(" ");
