import iconUrl from "./icon.png";
import spinningUrl from "./spin.svg";

const BYPASS_ORIGIN = "https://freedium.cfd/";

export default function BypassButton() {
  let loading = false;

  const handleClick = () => {
    if (loading) return;
    loading = true;

    img.src = spinningUrl;
    location.href = BYPASS_ORIGIN + window.location.href;
  };

  const button = document.createElement("button");
  button.title = "Bypass Medium paywall";
  button.addEventListener("click", handleClick);

  const img = document.createElement("img");
  img.alt = "icon";
  img.src = iconUrl;

  button.appendChild(img);

  return button;
}
