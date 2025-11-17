/**
 * @Author:XYH
 * @Date:2025-11-17
 * @Description:Vite 配置文件
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// 中文说明：Vite 基础配置，启用 React-SWC 插件
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
});
