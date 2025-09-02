import { ArrowRight, Key, Copy, Download } from "lucide-react";
import { useState } from "react";
import BaseButton from "./base-button";
import publicKey from "../../data/tianpai-public-key.asc?raw";

export default function PgpKeyButton() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const downloadKey = () => {
    const blob = new Blob([publicKey], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tianpai-public-key.asc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const dropdownContent = (
    <div className="p-4 min-w-64">
      <p className="text-sm opacity-70 mb-3 text-center">
        Secure communication via encrypted messages
      </p>
      <div className="flex gap-2">
        <button
          onClick={copyToClipboard}
          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
        >
          <Copy size={16} />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
        <button
          onClick={downloadKey}
          className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-2 border border-neutral-600 hover:border-neutral-500 rounded transition-colors"
        >
          <Download size={16} />
          <span>Download</span>
        </button>
      </div>
    </div>
  );

  return (
    <BaseButton
      icon={<Key size={20} />}
      endIcon={<ArrowRight size={16} />}
      dropdown={dropdownContent}
    >
      PGP Key
    </BaseButton>
  );
}