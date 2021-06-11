const config = {
  baseUrl:
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL &&
      `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
    "https://wisesa.dev/",
};
export default config;
