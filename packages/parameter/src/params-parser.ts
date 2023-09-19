type ParamsObj = { [key: string]: string | number | boolean };

function paramsParser<T extends ParamsObj>(paramsObj: T, prefix?: string) {
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

export { paramsParser, type ParamsObj };
