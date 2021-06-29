const config = {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL &&
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
    "https://wisesa.dev",
  description:
    "Personal website of Anvaqta Tangguh Wisesa. A computer science student and a software engineer focused on the web platforms.",
};
export default config;
