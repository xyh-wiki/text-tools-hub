/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:单个工具详情与操作页面组件
 */
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { toolsMeta, ToolCategory } from '../../config/tools-meta';
import { getToolSeo } from '../../seo/seoConfig';
import { removeDuplicateLines, cleanupSpaces, convertCase, CaseMode } from '../../tools/textTools';
import { formatJson, minifyJson } from '../../tools/formatTools';
import { base64Encode, base64Decode } from '../../tools/converterTools';
import { extractEmails, extractUrls, removeSpecialCharacters } from '../../tools/regexTools';
import { generatePasswords, generateUUIDv4 } from '../../tools/randomTools';
import { useToast } from '../../context/ToastContext';

// 中文说明：根据路由参数选择具体工具，并渲染对应的交互面板
export const ToolDetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category: ToolCategory; slug: string }>();
  const tool = useMemo(
    () => toolsMeta.find(t => t.category === category && t.slug === slug),
    [category, slug]
  );
  const seo = getToolSeo(tool);
  const { showToast } = useToast();

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [jsonIndent, setJsonIndent] = useState(2);
  const [caseMode, setCaseMode] = useState<CaseMode>('upper');
  const [removeDupCaseSensitive, setRemoveDupCaseSensitive] = useState(false);
  const [removeDupKeep, setRemoveDupKeep] = useState<'first' | 'last'>('first');
  const [cleanupTrim, setCleanupTrim] = useState(true);
  const [cleanupCollapse, setCleanupCollapse] = useState(true);
  const [cleanupRemoveEmpty, setCleanupRemoveEmpty] = useState(true);
  const [keepLetters, setKeepLetters] = useState(true);
  const [keepDigits, setKeepDigits] = useState(true);
  const [keepSpaces, setKeepSpaces] = useState(true);
  const [keepPunct, setKeepPunct] = useState(true);
  const [pwdLength, setPwdLength] = useState(16);
  const [pwdCount, setPwdCount] = useState(5);
  const [pwdUpper, setPwdUpper] = useState(true);
  const [pwdLower, setPwdLower] = useState(true);
  const [pwdDigits, setPwdDigits] = useState(true);
  const [pwdSymbols, setPwdSymbols] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!tool) {
    return (
      <section className="section">
        <h1>Tool not found</h1>
        <p>The requested tool does not exist.</p>
        <Link to="/tools">Back to all tools</Link>
      </section>
    );
  }

  const handleCopy = () => {
    if (!output) {
      showToast('Nothing to copy', 'info');
      return;
    }
    navigator.clipboard.writeText(output).then(
      () => showToast('Output copied to clipboard', 'success'),
      () => showToast('Failed to copy to clipboard', 'error')
    );
  };

  const runTool = () => {
    setLoading(true);
    try {
      let result = '';
      switch (tool.slug) {
        case 'remove-duplicate-lines':
          result = removeDuplicateLines(input, {
            caseSensitive: removeDupCaseSensitive,
            keep: removeDupKeep
          });
          break;
        case 'remove-extra-spaces':
          result = cleanupSpaces(input, {
            trimLines: cleanupTrim,
            collapseInternalSpaces: cleanupCollapse,
            removeEmptyLines: cleanupRemoveEmpty
          });
          break;
        case 'case-converter':
          result = convertCase(input, caseMode);
          break;
        case 'json-formatter': {
          const formatted = formatJson(input, jsonIndent);
          result = formatted.output;
          break;
        }
        case 'base64-encode-decode': {
          const encode = input.startsWith('base64:');
          if (encode) {
            result = base64Encode(input.replace(/^base64:/, ''));
          } else {
            const decoded = base64Decode(input);
            result = decoded.output;
          }
          break;
        }
        case 'email-extractor':
          result = extractEmails(input);
          break;
        case 'url-extractor':
          result = extractUrls(input);
          break;
        case 'remove-special-characters':
          result = removeSpecialCharacters(input, {
            keepLetters,
            keepDigits,
            keepSpaces,
            keepBasicPunctuation: keepPunct
          });
          break;
        case 'password-generator': {
          const list = generatePasswords(pwdCount, {
            length: pwdLength,
            includeUpper: pwdUpper,
            includeLower: pwdLower,
            includeDigits: pwdDigits,
            includeSymbols: pwdSymbols
          });
          result = list.join('\n');
          break;
        }
        case 'uuid-generator': {
          const list: string[] = [];
          for (let i = 0; i < 20; i++) {
            list.push(generateUUIDv4());
          }
          result = list.join('\n');
          break;
        }
        default:
          result = input;
      }
      setOutput(result);
      showToast('Tool executed successfully', 'success');
    } catch (e: any) {
      showToast(String(e?.message ?? 'Unexpected error'), 'error');
    } finally {
      setLoading(false);
    }
  };

  const lineCount = input ? input.split(/\r?\n/).length : 0;
  const charCount = input.length;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <section className="section tool-layout">
        <div className="tool-layout-header">
          <nav aria-label="Breadcrumb">
            <Link to="/tools">Tools</Link> / <span>{tool.name}</span>
          </nav>
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>
          <p className="tool-stats">
            {lineCount} lines · {charCount} characters
          </p>
        </div>
        <div className="tool-layout-main">
          <div className="tool-layout-grid">
            <div>
              <label htmlFor="tool-input">Input</label>
              <textarea
                id="tool-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Paste or type your text here..."
              />
            </div>
            <div>
              <label htmlFor="tool-output">Output</label>
              <textarea
                id="tool-output"
                value={output}
                onChange={e => setOutput(e.target.value)}
                placeholder="Result will appear here..."
              />
            </div>
          </div>

          <div className="form-row">
            {tool.slug === 'json-formatter' && (
              <>
                <label>
                  Indent:
                  <select
                    value={jsonIndent}
                    onChange={e => setJsonIndent(Number(e.target.value))}
                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                  </select>
                </label>
                <button
                  type="button"
                  className="btn-secondary btn-sm"
                  onClick={() => {
                    const res = minifyJson(input);
                    setOutput(res.output);
                    showToast(res.ok ? 'JSON minified' : res.output, res.ok ? 'success' : 'error');
                  }}
                >
                  Minify JSON
                </button>
              </>
            )}

            {tool.slug === 'remove-duplicate-lines' && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={removeDupCaseSensitive}
                    onChange={e => setRemoveDupCaseSensitive(e.target.checked)}
                  />{' '}
                  Case sensitive
                </label>
                <label>
                  Keep:
                  <select
                    value={removeDupKeep}
                    onChange={e => setRemoveDupKeep(e.target.value as 'first' | 'last')}
                  >
                    <option value="first">First occurrence</option>
                    <option value="last">Last occurrence</option>
                  </select>
                </label>
              </>
            )}

            {tool.slug === 'remove-extra-spaces' && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={cleanupTrim}
                    onChange={e => setCleanupTrim(e.target.checked)}
                  />{' '}
                  Trim lines
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={cleanupCollapse}
                    onChange={e => setCleanupCollapse(e.target.checked)}
                  />{' '}
                  Collapse internal spaces
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={cleanupRemoveEmpty}
                    onChange={e => setCleanupRemoveEmpty(e.target.checked)}
                  />{' '}
                  Remove empty lines
                </label>
              </>
            )}

            {tool.slug === 'case-converter' && (
              <label>
                Mode:
                <select
                  value={caseMode}
                  onChange={e => setCaseMode(e.target.value as CaseMode)}
                >
                  <option value="upper">UPPERCASE</option>
                  <option value="lower">lowercase</option>
                  <option value="title">Title Case</option>
                  <option value="sentence">Sentence case</option>
                </select>
              </label>
            )}

            {tool.slug === 'remove-special-characters' && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={keepLetters}
                    onChange={e => setKeepLetters(e.target.checked)}
                  />{' '}
                  Letters
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={keepDigits}
                    onChange={e => setKeepDigits(e.target.checked)}
                  />{' '}
                  Digits
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={keepSpaces}
                    onChange={e => setKeepSpaces(e.target.checked)}
                  />{' '}
                  Spaces
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={keepPunct}
                    onChange={e => setKeepPunct(e.target.checked)}
                  />{' '}
                  Basic punctuation
                </label>
              </>
            )}

            {tool.slug === 'password-generator' && (
              <>
                <label>
                  Length:
                  <input
                    type="number"
                    min={4}
                    max={128}
                    value={pwdLength}
                    onChange={e => setPwdLength(Number(e.target.value))}
                  />
                </label>
                <label>
                  Count:
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={pwdCount}
                    onChange={e => setPwdCount(Number(e.target.value))}
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={pwdUpper}
                    onChange={e => setPwdUpper(e.target.checked)}
                  />{' '}
                  Uppercase
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={pwdLower}
                    onChange={e => setPwdLower(e.target.checked)}
                  />{' '}
                  Lowercase
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={pwdDigits}
                    onChange={e => setPwdDigits(e.target.checked)}
                  />{' '}
                  Digits
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={pwdSymbols}
                    onChange={e => setPwdSymbols(e.target.checked)}
                  />{' '}
                  Symbols
                </label>
              </>
            )}
          </div>

          <div className="form-row">
            <button
              type="button"
              className="btn-primary"
              onClick={runTool}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Run tool'}
            </button>
            <button
              type="button"
              className="btn-secondary btn-sm"
              onClick={handleCopy}
            >
              Copy output
            </button>
            <button
              type="button"
              className="btn-ghost btn-sm"
              onClick={() => {
                setInput('');
                setOutput('');
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
