import { useState } from "react";

const copyToClipboard = async value => {
  let success = true;
  try {
    await navigator.clipboard.writeText(value);
  }
  catch (err) {
    success = false
  }
  finally {
    return success;
  }
};

const useClipboard = value => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    setHasCopied(copyToClipboard(value));
    setTimeout(() => setHasCopied(false), 1500);
  };

  return { value, onCopy, hasCopied };
};

export default useClipboard;