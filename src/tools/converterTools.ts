/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:转换工具逻辑函数
 */
/**
 * 转换类工具：Base64 编解码等
 */

export const base64Encode = (input: string): string => {
  if (typeof window === 'undefined') {
    return Buffer.from(input, 'utf-8').toString('base64');
  }
  return btoa(unescape(encodeURIComponent(input)));
};

export const base64Decode = (input: string): { ok: boolean; output: string } => {
  try {
    if (typeof window === 'undefined') {
      return { ok: true, output: Buffer.from(input, 'base64').toString('utf-8') };
    }
    const decoded = decodeURIComponent(escape(atob(input)));
    return { ok: true, output: decoded };
  } catch (e: any) {
    return { ok: false, output: String(e?.message ?? 'Invalid Base64 string') };
  }
};
