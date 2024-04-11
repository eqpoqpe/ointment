export type ParamsConstraint = Record<string, string | number | boolean>;

export function paramsStringify<T extends ParamsConstraint>(
  paramsObj: T,
  prefix?: string
) {
  const paramsObjKeys = Object.keys(paramsObj);
  const paramsObjLen = paramsObjKeys.length;

  return paramsObjKeys.reduce(
    (ps, key, index) =>
      ps +
      `${key}=${paramsObj[key].toString()}` +
      (index < paramsObjLen - 1 ? "&" : ""),
    prefix ?? ""
  );
}
