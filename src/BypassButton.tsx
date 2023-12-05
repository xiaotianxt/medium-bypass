import { useState } from "react";
import iconUrl from "./icon.png";
import spinningUrl from "./spin.svg";

const BYPASS_ORIGIN = "https://freedium.cfd/";

export default function BypassButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      title="Bypass Medium paywall"
      onClick={() => {
        if (loading) return;
        setLoading(true);
        location.href = BYPASS_ORIGIN + window.location.href;
      }}
    >
      <img alt="icon" src={loading ? spinningUrl : iconUrl} />
    </button>
  );
}
