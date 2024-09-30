import { load } from "js-yaml";

type DataProps = {
  lines: string[];
  metaIndices: number[];
};

export type FrontMatterResult<
  T = { [key: string]: string | Date | number | string[] | unknown } | unknown
> = {
  /**
   *  Yaml data form a markdown files
   */
  data: T;
  /**
   * Body content of markdown file
   */
  content: string;
};

/**
 * Class for parsing front matter from a markdown content string.
 * Parses metadata and content from markdown content based on metadata delimiters.
 */
class FrontMatter {
  private mdcontent: string;
  constructor(mdcontent: string) {
    this.mdcontent = mdcontent;
  }
  /**
   * Finds the indices of the lines that contain the metadata delimiter.
   *
   * @param mem - The array to store the indices of the lines that contain the metadata delimiter.
   * @param item - The line to check.
   * @param i - The index of the line.
   * @returns The array with the indices of the lines that contain the metadata delimiter.
   */
  private findMetaIndices(mem: number[], item: string, i: number): number[] {
    // If the line starts with ---, it's a metadata delimiter
    if (/^---/.test(item)) {
      // Add the index of the line to the array of indices
      mem.push(i);
    }

    return mem;
  }
  /**
   * Gets the data from the front matter.
   *
   * @param linesPros - An object with the lines of the markdown content and the indices of the lines that contain the metadata delimiter.
   * @returns The data from the front matter as a parsed YAML object.
   */
  private getData(linesPros: DataProps): FrontMatterResult["data"] {
    const { lines, metaIndices } = linesPros;
    if (metaIndices.length > 0) {
      const dat = lines.slice(metaIndices[0] + 1, metaIndices[1]);
      const data = load(dat.join("\n"));
      return data;
    }
    return {};
  }
  /**
   * Gets the content from the front matter.
   *
   * @param linesPros - An object with the lines of the markdown content and the indices of the lines that contain the metadata delimiter.
   * @returns The content from the front matter as a string.
   */
  private getContent(linesPros: DataProps): string {
    const { lines, metaIndices } = linesPros;
    return metaIndices.length > 0
      ? lines.slice(metaIndices[1] + 1).join("\n")
      : lines.join("\n");
  }
  /**
   * Retrieves the frontmatter data and content from markdown contents.
   *
   * @returns An object containing the frontmatter data and content.
   *   1. data: A record of key-value pairs representing the frontmatter data.
   *   2. content: The content of the file.
   */
  frontmatter<T>(): FrontMatterResult {
    const lines = this.mdcontent.split("\n");
    const metaIndices = lines.reduce(this.findMetaIndices, [] as number[]);
    const data: T = this.getData({ lines, metaIndices }) as T;
    const content: string = this.getContent({ lines, metaIndices });

    return { data, content };
  }
}

export function frontMatter<T>(text: string): FrontMatterResult {
  const ct = new FrontMatter(text).frontmatter();
  const data: T = ct.data as T;
  const content: string = ct.content;
  return {
    data,
    content,
  };
}
