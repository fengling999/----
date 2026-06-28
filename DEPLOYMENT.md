# 部署说明

## 1. 本地启动方式

```bash
npm install
npm run dev
```

浏览器访问：

```text
http://localhost:3000
```

## 2. 本地构建方式

```bash
npm run lint
npm run build
```

构建通过后，可以用以下命令预览生产构建：

```bash
npm run start
```

## 3. Vercel 部署步骤

1. 将项目代码推送到 GitHub、GitLab 或 Bitbucket 仓库。
2. 登录 Vercel，选择 `Add New Project`。
3. 导入该仓库。
4. Framework Preset 选择 `Next.js`。
5. Build Command 使用默认值 `next build`。
6. Install Command 使用默认值 `npm install`。
7. 点击 Deploy。

## 4. 环境变量说明

当前项目不需要必填环境变量。

可选项：

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

如果设置该变量，`sitemap.xml` 和 `robots.txt` 会使用你的正式域名。未设置时，本地开发会使用 `http://localhost:3000` 作为默认值。

## 5. 常见问题

### 部署后 sitemap 仍显示 localhost

在 Vercel 的 Project Settings 中添加：

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

然后重新部署。

### 页面空白或样式异常

先在本地运行：

```bash
npm run build
```

如果本地构建失败，先修复错误再部署。如果本地通过但线上异常，检查 Vercel 的 Build Logs。

### 今日觉察记录没有同步到其他设备

这是当前设计。今日觉察记录仅保存在当前浏览器的 `localStorage` 中，不上传服务器，也不会跨设备同步。

## 6. 部署适配性

- 技术栈：Next.js App Router、TypeScript、Tailwind CSS。
- 无数据库、无登录、无支付、无服务端业务依赖。
- 适合直接部署到 Vercel。
