import { Children, FC, ReactElement, ReactNode, isValidElement } from "react";

type ElementObjectMap<T> = { [K in keyof T]: ReactElement[] };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function declaringDestructor<T extends Record<string, FC<any>>>(
  children: ReactNode,
  targets: T
): ElementObjectMap<T> {
  const keys = Object.keys(targets) as Array<keyof T>;
  const elementMap = keys.reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as ElementObjectMap<T>);

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const matchedKey = keys.find((key) => child.type === targets[key]);

      if (matchedKey) {
        elementMap[matchedKey].push(child);
      }
    }
  });

  return elementMap;
}
