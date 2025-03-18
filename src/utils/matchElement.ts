import { Children, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";

interface MathElementResult {
  /**
   * Stores nodes that are not in the matching type list
   */
  unmatched: ReactNode[];
  /**
   * Stores nodes that match the matching type list
   */

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  matched: ReactElement<any>[];
  /**
   * Stores the list of matched nodes categorized by type
   */

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  elements: { [type: string]: ReactElement<any>[] };
}

function getNodeType(node: ReactNode) {
  if (!isValidElement(node)) {
    return;
  }

  if (node.type === undefined || typeof node.type === "string") {
    return;
  }

  // @ts-ignore
  return node.type.displayName;
}

export function matchElement(
  children: ReactNode,
  typeDefinitions: string[] = [],
): MathElementResult {
  const result = Children.toArray(children).reduce(
    (result, node) => {
      const nodeType = getNodeType(node);
      if (!isValidElement(node)) {
        result.unmatched.push(node);
        return result;
      }

      if (!typeDefinitions.includes(nodeType)) {
        result.unmatched.push(node);
        return result;
      }

      if (!result.elements[nodeType]) {
        result.elements[nodeType] = [];
      }

      result.matched.push(node);
      result.elements[nodeType].push(node);

      return result;
    },
    { unmatched: [], matched: [], elements: {} } as MathElementResult,
  );

  return result;
}