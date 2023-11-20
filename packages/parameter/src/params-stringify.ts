type ParamsConstraint = { [key: string]: string | number | boolean };

function paramsStringify<T extends ParamsConstraint>(
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

export { type ParamsConstraint, paramsStringify };
