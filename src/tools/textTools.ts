/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:文本类工具逻辑函数
 */
/**
 * 文本工具集合：去重、空格处理、大小写转换等
 */

export interface RemoveDuplicateLinesOptions {
  caseSensitive: boolean;
  keep: 'first' | 'last';
}

export const removeDuplicateLines = (input: string, options: RemoveDuplicateLinesOptions): string => {
  const lines = input.split(/\r?\n/);
  const seen = new Map<string, number>();
  const key = (s: string) => (options.caseSensitive ? s : s.toLowerCase());

  lines.forEach((line, index) => {
    const k = key(line);
    if (!seen.has(k) || options.keep === 'last') {
      seen.set(k, index);
    }
  });

  const result: string[] = [];
  lines.forEach((line, index) => {
    const k = key(line);
    const keepIndex = seen.get(k);
    if (keepIndex === index) {
      result.push(line);
    }
  });
  return result.join('\n');
};

export interface SpaceCleanupOptions {
  trimLines: boolean;
  collapseInternalSpaces: boolean;
  removeEmptyLines: boolean;
}

export const cleanupSpaces = (input: string, options: SpaceCleanupOptions): string => {
  const lines = input.split(/\r?\n/).map(line => {
    let result = line;
    if (options.trimLines) {
      result = result.trim();
    }
    if (options.collapseInternalSpaces) {
      result = result.replace(/\s+/g, ' ');
    }
    return result;
  });

  const processed = options.removeEmptyLines ? lines.filter(l => l.length > 0) : lines;
  return processed.join('\n');
};

export type CaseMode = 'upper' | 'lower' | 'title' | 'sentence';

export const convertCase = (input: string, mode: CaseMode): string => {
  switch (mode) {
    case 'upper':
      return input.toUpperCase();
    case 'lower':
      return input.toLowerCase();
    case 'title':
      return input
        .toLowerCase()
        .split(/(\s+)/)
        .map(part => {
          if (/^\s+$/.test(part)) return part;
          return part.charAt(0).toUpperCase() + part.slice(1);
        })
        .join('');
    case 'sentence':
      return input
        .toLowerCase()
        .replace(/(^\s*[a-zA-Z])|([.!?]\s*[a-zA-Z])/g, match => match.toUpperCase());
    default:
      return input;
  }
};
