import type { SVGProps } from 'react';

/** Eight-point asterisk from the title slide — uses `currentColor` for fills. */
export function DecorativeAsterisk({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <rect x="10.5" y="1" width="3" height="22" rx="1.5" />
      <rect
        x="10.5"
        y="1"
        width="3"
        height="22"
        rx="1.5"
        transform="rotate(45 12 12)"
      />
      <rect
        x="10.5"
        y="1"
        width="3"
        height="22"
        rx="1.5"
        transform="rotate(90 12 12)"
      />
      <rect
        x="10.5"
        y="1"
        width="3"
        height="22"
        rx="1.5"
        transform="rotate(135 12 12)"
      />
    </svg>
  );
}
