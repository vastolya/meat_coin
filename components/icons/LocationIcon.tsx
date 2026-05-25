interface LocationIconProps {
  width?: number
  height?: number
  color?: string
}

export default function LocationIcon({ width = 24, height = 24, color = '#BBB6AF' }: LocationIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19434 10.5734C9.19434 12.1143 10.4518 13.3263 11.9936 13.3263C13.5363 13.3263 14.8059 12.1143 14.8059 10.5734C14.8059 9.0444 13.5363 7.77344 11.9936 7.77344C10.4518 7.77344 9.19434 9.0444 9.19434 10.5734Z"
        fill={color}
      />
    </svg>
  )
}
