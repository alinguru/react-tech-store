import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "vqy039fy6czy",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "Z3XjVpEa3KQAQAT239YIhJR58Rsz85CEH0Vvgjuf6Nk"
});
