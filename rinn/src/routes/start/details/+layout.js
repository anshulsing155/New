
// export const ssr = false;
export const prerender = true;
export const load = (async () => {
  const auth = await import("../../../firebase/auth");

  return {
    auth,
  };
});
