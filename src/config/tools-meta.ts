/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:工具元数据配置，用于驱动列表、搜索和路由
 */
export type ToolCategory = 'text' | 'formatters' | 'converters' | 'regex' | 'random';

export interface ToolMeta {
  slug: string;
  category: ToolCategory;
  name: string;
  description: string;
}

export const toolsMeta: ToolMeta[] = [
  {
    slug: 'remove-duplicate-lines',
    category: 'text',
    name: 'Remove Duplicate Lines',
    description: 'Clean a list of lines by removing duplicates with optional case sensitivity.'
  },
  {
    slug: 'remove-extra-spaces',
    category: 'text',
    name: 'Remove Extra Spaces',
    description: 'Trim and normalize spaces, remove empty lines from any text.'
  },
  {
    slug: 'case-converter',
    category: 'text',
    name: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case or Sentence case.'
  },
  {
    slug: 'json-formatter',
    category: 'formatters',
    name: 'JSON Formatter',
    description: 'Validate, format and minify JSON strings in your browser.'
  },
  {
    slug: 'xml-formatter',
    category: 'formatters',
    name: 'XML Formatter',
    description: 'Pretty print XML with custom indentation.'
  },
  {
    slug: 'sql-formatter',
    category: 'formatters',
    name: 'SQL Formatter',
    description: 'Format SQL queries and optionally uppercase keywords.'
  },
  {
    slug: 'base64-encode-decode',
    category: 'converters',
    name: 'Base64 Encode / Decode',
    description: 'Encode text to Base64 or decode Base64 back to text.'
  },
  {
    slug: 'email-extractor',
    category: 'regex',
    name: 'Email Extractor',
    description: 'Extract all email addresses from any text and remove duplicates.'
  },
  {
    slug: 'url-extractor',
    category: 'regex',
    name: 'URL Extractor',
    description: 'Extract all URLs from text and normalize them into a list.'
  },
  {
    slug: 'remove-special-characters',
    category: 'regex',
    name: 'Remove Special Characters',
    description: 'Strip unwanted special characters and keep only allowed ones.'
  },
  {
    slug: 'password-generator',
    category: 'random',
    name: 'Random Password Generator',
    description: 'Generate strong random passwords with custom rules.'
  },
  {
    slug: 'uuid-generator',
    category: 'random',
    name: 'UUID Generator',
    description: 'Generate multiple UUID v4 identifiers instantly.'
  }
];

export const toolCategories: { id: ToolCategory; label: string }[] = [
  { id: 'text', label: 'Text Tools' },
  { id: 'formatters', label: 'Formatters' },
  { id: 'converters', label: 'Converters' },
  { id: 'regex', label: 'Regex Tools' },
  { id: 'random', label: 'Random Generators' }
];
