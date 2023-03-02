import MoonPng from "moon-assets/banner/banner.png";

interface MoonLogoProps {
  width?: number;
  height?: number;
}

export default (props: MoonLogoProps) => (
  <img
    style={{ display: "inline", "border-radius": "0.725rem", "user-select": "none" }}
    src={MoonPng}
    width={props.width || 225}
    height={props.height ?? 80.5}
    draggable={false}
  />
);
