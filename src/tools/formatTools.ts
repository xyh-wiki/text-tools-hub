/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:格式化工具逻辑函数
 */
/**
 * 格式化类工具：JSON / XML / SQL 等（此处实现 JSON 完整逻辑，其他可简单占位）
 */

export const formatJson = (input: string, indent: number): { ok: boolean; output: string } => {
  try {
    const parsed = JSON.parse(input);
    return { ok: true, output: JSON.stringify(parsed, null, indent) };
  } catch (e: any) {
    return { ok: false, output: String(e?.message ?? 'Invalid JSON') };
  }
};

export const minifyJson = (input: string): { ok: boolean; output: string } => {
  try {
    const parsed = JSON.parse(input);
    return { ok: true, output: JSON.stringify(parsed) };
  } catch (e: any) {
    return { ok: false, output: String(e?.message ?? 'Invalid JSON') };
  }
};

// TODO: 可以在后续版本补充 XML / SQL 更复杂格式化逻辑
