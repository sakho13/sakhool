/**
 * 対象が RGB にマッチしている（Aは無視）
 * @param rgbText
 */
export function checkRGB(rgbText: string): boolean {
  if (rgbText.length === 6) {
    // const pattern = RegExp("^2[1-9a-f]")
    const r = rgbText.slice(0, 2)
    const g = rgbText.slice(2, 2)
    const b = rgbText.slice(4, 2)
  }
  return false
}
