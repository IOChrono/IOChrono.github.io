// 如果项目根目录下尚不存在 `pages` 目录，请先创建：
// 方法一：命令行
//   cd /path/to/project-root
//   mkdir pages
// 方法二：VSCode
//   在项目根目录空白处右键→新建文件夹→命名为 `pages`

// 确保 project-root 目录结构示例：
// project-root/
// ├── package.json
// ├── next.config.js      // 可选
// ├── pages/              // 若不存在则创建
// ├── public/
// ├── styles/
// └── node_modules/

// 接下来，在 `pages` 下创建 `inpora` 子目录，并在其中创建 `index.js`：
// 方法一：命令行
//   cd /path/to/project-root/pages
//   mkdir inpora
//   touch inpora/index.js
// 方法二：VSCode
//   在 `pages` 文件夹上右键→新建文件→输入 `inpora/index.js`

// 目录完成后，pages 下的结构如下：
// project-root/
// └── pages/
//     ├── index.js        // 主站首页
//     ├── about.js        // 其他页面
//     └── inpora/         // Inpora 子路由目录
//         └── index.js    // Inpora 页面组件

// =======================
// pages/inpora/index.js 内容：
import Head from 'next/head';

export default function InporaPage() {
  return (
    <>
      <Head>
        <title>Inpora | IOChrono 子产品</title>
        <meta name="description" content="Inpora - 自由的输入，自由的表达 - IOChrono 生态" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">欢迎来到 Inpora</h1>
        <p className="text-lg text-gray-700 mb-6">
          这是 IOChrono 生态下的输入法产品 Inpora，
          通过 <code>/inpora</code> 路径访问，无需在主站导航中展示。
        </p>
        <a
          href="https://apps.apple.com/app/inpora/idYOUR_APP_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700"
        >
          在 App Store 下载 Inpora
        </a>
      </main>
    </>
  );
}

// =======================
// 本地测试：
// npm install
// npm run dev
// 浏览器访问：http://localhost:3000/inpora

// 隐藏主导航：
// 不要在导航组件中添加指向 /inpora 的链接，只通过直链访问。

// App Router (Next.js 13+) 对应：
// project-root/app/inpora/page.js → 导出 async function Page() { ... }

// 至此，`/inpora` 即可直达 Inpora 子页面，且不在主站菜单中出现。
