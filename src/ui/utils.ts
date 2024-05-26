type ClsxArg = string | { [key: string]: boolean } | undefined | null;

/**
 * A simple utility function to merge class names together.
 * You can also pass an object with keys as class names and values as boolean to conditionally include them.
 * Every false value or empty object will be ignored.
 * @param args - The class names to merge.
 * @returns The merged class names.
 */
export const clsx = (...args: Array<ClsxArg>): string => {
  return args
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim();
};
