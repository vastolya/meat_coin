interface RubleIconProps {
  width?: number
  height?: number
}

export default function RubleIcon({ width = 20, height = 20 }: RubleIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#ruble-clip)">
        <path
          d="M11.2631 12H8.30313V13.104H11.9031V13.952H8.30313V16H6.84713V13.952H5.34313V13.104H6.84713V12H5.34313V11.04H6.84713V5.296H11.2791C13.3111 5.296 14.7831 6.704 14.7831 8.64C14.7831 10.592 13.3271 12 11.2631 12ZM11.0071 6.496H8.30313V11.04H10.9591C12.3511 11.04 13.3591 10.08 13.3591 8.768C13.3591 7.472 12.3671 6.496 11.0071 6.496Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="ruble-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
