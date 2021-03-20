import htmlMinifier from "rollup-plugin-html-minifier";

export function build({ plugins }) {
  plugins.push(
    htmlMinifier({
      // any options here
    })
  );
}
