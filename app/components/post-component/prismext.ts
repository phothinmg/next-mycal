import Showdown from "showdown";
import type { ShowdownExtension } from "showdown";
import Prism from "prismjs";
import Module from "node:module";
import pkg from "he";
const { decode } = pkg;

const require = Module.createRequire(import.meta.url);
const loadLanguages = require("prismjs/components/");
const lang = (text: string): string => {
  const m = text.match(/class="([^" ]+)/);
  return m ? m[1] : "";
};
const showdownPrism = (): ShowdownExtension | ShowdownExtension[] => {
  const langs: string[] = ["ts"];
  loadLanguages(langs);
  const params = {
    left: "<pre><code\\b[^>]*>",
    right: "</code></pre>",
    flags: "g",
  };
  const replacement = (
    wholematch: string,
    match: string,
    left: string,
    right: string
  ) => {
    match = decode(match);
    const lan = lang(left);
    if (lan !== "") {
      left = `<pre class="language-${lan}"><code class="language-${lan}">`;
      right = `</code></pre>`;
      const highlighted = Prism.highlight(match, Prism.languages[lan], lan);
      return left + highlighted + right;
    } else {
      return wholematch;
    }
  };

  return [
    {
      type: "output",

      /**
       * A function that filters the given text using the Showdown helper's replaceRecursiveRegExp method.
       *
       */
      filter: (
        text: string,
        converter: Showdown.Converter,
        options: any
      ): string => {
        return Showdown.helper.replaceRecursiveRegExp(
          text,
          replacement,
          params.left,
          params.right,
          params.flags
        );
      },
    },
  ];
};

Showdown.extension("showdownPrism", showdownPrism());

export default showdownPrism;
