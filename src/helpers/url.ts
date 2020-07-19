export function formatParam(value: string | number, param: string, isValid = true): string {
  return !!value && isValid
    ? `&${ param }=${ value }`
    : ''
}

export function formatMultiParam(items: any[], param: string): string {
  return !!items && !!items.length
    ? `&${ param }=${ items.map(x => x.id).join(',') }`
    : ''
}
