import { useState } from 'react';

const copyToClipboard = async (value) => {
  let success = false;

  try {
    await navigator.clipboard.writeText(value);
    success = true;
  } catch (err) {
    success = false;
  }

  return success;
};

export const useClipboard = (value) => {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () => {
    setHasCopied(copyToClipboard(value));
    setTimeout(() => setHasCopied(false), 1500);
  };

  return { value, onCopy, hasCopied };
};

export default useClipboard;
