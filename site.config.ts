export default {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL &&
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
    "https://wisesa.dev",
  description:
    "Personal website of Anvaqta Tangguh Wisesa. A passionate software engineer that focused on the web platform.",
  panelbear: process.env.NEXT_PUBLIC_PANELBEAR_ID as string,
};
