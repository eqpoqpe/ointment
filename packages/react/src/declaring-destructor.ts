import { Children, FC, ReactElement, ReactNode, isValidElement } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function declaringDestructor<T extends Record<string, FC<any>>>(
  children: ReactNode,
  targets: T
): { [K in keyof T]: ReactElement[] } {
  const keys = Object.keys(targets) as Array<keyof T>;
  const elementMap: { [K in keyof T]: ReactElement[] } = {} as {
    [K in keyof T]: ReactElement[];
  };

  keys.forEach((key) => {
    elementMap[key] = [];
  });

  Children.map(children, (child) => {
    if (isValidElement(child)) {
      const targetKey = keys.find((key) => child.type === targets[key]);

      if (targetKey) {
        elementMap[targetKey].push(child);
      }
    }
  });

  return elementMap;
}
