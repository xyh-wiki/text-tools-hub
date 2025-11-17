/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:随机工具逻辑函数
 */
/**
 * 随机工具：密码与 UUID 生成
 */

export interface PasswordOptions {
  length: number;
  includeUpper: boolean;
  includeLower: boolean;
  includeDigits: boolean;
  includeSymbols: boolean;
}

export const generatePasswords = (count: number, options: PasswordOptions): string[] => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%^&*()-_=+[]{};:,.<>?';

  let pool = '';
  if (options.includeUpper) pool += upper;
  if (options.includeLower) pool += lower;
  if (options.includeDigits) pool += digits;
  if (options.includeSymbols) pool += symbols;

  if (!pool) pool = lower;

  const results: string[] = [];
  for (let i = 0; i < count; i++) {
    let pwd = '';
    for (let j = 0; j < options.length; j++) {
      const idx = Math.floor(Math.random() * pool.length);
      pwd += pool[idx];
    }
    results.push(pwd);
  }
  return results;
};

// 简单 UUID v4 生成（非密码学严格实现，但足够用于工具演示）
export const generateUUIDv4 = (): string => {
  // 来自常见实现方案：xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
