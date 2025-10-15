// src/assets/index.js
const modules = import.meta.glob("./technologies/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const techImages = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => {
    const fileName = path.split("/").pop().split(".")[0]; // e.g. "html"
    return [fileName, module.default];
  })
);

export default techImages;
