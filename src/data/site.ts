export const BRAND = "Shree RamKrishna Dryfruits";
export const BRAND_SHORT = "Shree RamKrishna";
export const BRAND_SUBTITLE = "DRYFRUITS";
export const BRAND_FULL = "Shree RamKrishna Dryfruits";
export const STORE_NAME = "Shree RamKrishna Dryfruits";

export const STORE_ADDRESS = {
  line1: "132, Sindhi Commercial Market",
  line2: "Chokha Bazaar, Kalupur",
  area: "Kalupur",
  city: "Ahmedabad",
  state: "Gujarat",
  pincode: "380002",
  full: "132, Sindhi Commercial Market, Chokha Bazaar, Kalupur, Ahmedabad, Gujarat 380002",
};

export const STORE_RATING = "4.6 ★";

export const WHATSAPP_DISPLAY = "+91 9313236081";
export const WHATSAPP_E164 = "919313236081";

export const GOOGLE_MAPS_URL =
  "https://share.google/mOS7428TP2UBmTfnk";

export const MAX_QTY_PER_PRODUCT = 10;
export const MAX_QTY_MESSAGE = "Maximum quantity reached (10 per product).";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
