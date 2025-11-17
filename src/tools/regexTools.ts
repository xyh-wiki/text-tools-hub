/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:正则工具逻辑函数
 */
/**
 * 正则类工具：邮箱提取、URL 提取、特殊字符移除等
 */

export const extractEmails = (input: string): string => {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = input.match(regex) ?? [];
  const unique = Array.from(new Set(matches));
  return unique.join('\n');
};

export const extractUrls = (input: string): string => {
  const regex = /https?:\/\/[\w.-]+(?:\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?/g;
  const matches = input.match(regex) ?? [];
  const unique = Array.from(new Set(matches));
  return unique.join('\n');
};

export interface RemoveSpecialCharactersOptions {
  keepLetters: boolean;
  keepDigits: boolean;
  keepSpaces: boolean;
  keepBasicPunctuation: boolean;
}

export const removeSpecialCharacters = (
  input: string,
  options: RemoveSpecialCharactersOptions
): string => {
  const allowed: string[] = [];
  if (options.keepLetters) allowed.push('a-zA-Z');
  if (options.keepDigits) allowed.push('0-9');
  if (options.keepSpaces) allowed.push(' \t');
  if (options.keepBasicPunctuation) {
    allowed.push(",\.;:'\-!\?\(\)\[\]");
  }
  const pattern = allowed.length ? `[^${allowed.join('')}]` : '[^]';
  const regex = new RegExp(pattern, 'g');
  return input.replace(regex, '');
};
