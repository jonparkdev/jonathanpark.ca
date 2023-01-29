// Create slug from filename
export const getSlug = path => {
   return path
    .replace(/^.*[\\\/]/, "")
    .split(".")
    .slice(0, -1)
    .join(".");
}
