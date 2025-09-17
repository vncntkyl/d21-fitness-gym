export const formatText = (
  text: string,
  separator: string = "_",
  capitalize: boolean = false
): string => {
  if (!text) return "";

  const words = text.split(separator).map((word) => word.trim());

  const formatted = capitalize
    ? words.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    : words;

  return formatted.join(" ");
};

export const formatNumber = (
  number: number,
  options?: Intl.NumberFormatOptions
) => {
  return Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    ...options,
  }).format(number);
};
// Encode (hash)
export function encodeForUrl(input: string): string {
  return (
    "_" +
    btoa(input) // base64 encode
      .replace(/\+/g, "-") // make URL-safe
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  ); // remove padding
}

// Decode (dehash)
export function decodeFromUrl(encoded: string): string {
  if (!encoded.startsWith("_")) return encoded;
  let base64 = encoded.slice(1).replace(/-/g, "+").replace(/_/g, "/");

  // Pad string length to multiple of 4
  while (base64.length % 4) {
    base64 += "=";
  }

  return atob(base64); // base64 decode
}
