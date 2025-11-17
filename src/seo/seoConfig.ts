/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:SEO 配置与辅助函数
 */
import { ToolMeta } from '../config/tools-meta';

export const getDefaultTitle = () => 'Text Tools Hub - Online Text & Code Utilities';

export const getDefaultDescription = () =>
  'Text Tools Hub is a fast, secure collection of client-side text and code utilities: formatters, converters, regex tools and random generators.';

export const getToolSeo = (tool?: ToolMeta) => {
  if (!tool) {
    return {
      title: getDefaultTitle(),
      description: getDefaultDescription()
    };
  }
  return {
    title: `${tool.name} | Text Tools Hub`,
    description: tool.description
  };
};
