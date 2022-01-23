import { useCallback, useState } from "react";
import copy from "copy-to-clipboard";

export default function EmailCopyButton() {
  const [copied, setCopied] = useState(false);

  const doCopy = useCallback(() => {
    try {
      copy("");
      setCopied(true);
    } catch {}
  }, [copy]);

  return (
    <div
      onClick={doCopy}
      className="btn d-flex align-items-center"
      active={copied ? "true" : "false"}
    >
      {copied && <img src="/copy-email-check.svg" />}
      {copied && <div style={{ width: 10 }} />}
      {copied ? "Email is copied" : "Copy Email"}
    </div>
  );
}
