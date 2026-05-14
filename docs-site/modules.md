# 10 大模块详解

本文档详细介绍 [Claude How To](https://github.com/luongnv89/claude-howto) 开源教程项目的十大核心模块，涵盖从基础入门到高级定制的完整学习路径。

## 模块概览

| 模块编号 | 模块名称 | 难度等级 | 核心内容 |
|----------|----------|----------|----------|
| M01 | 基础入门 | ⭐ 入门 | 环境配置、首次使用、核心概念 |
| M02 | Slash Commands | ⭐⭐ 进阶 | 60+ 内置命令、系统命令、自定义命令 |
| M03 | Subagents | ⭐⭐⭐ 高级 | 6 大子代理、任务分解、并行处理 |
| M04 | Skills 系统 | ⭐⭐⭐ 高级 | 5 大技能、技能组合、自定义技能 |
| M05 | Hooks 机制 | ⭐⭐ 进阶 | 28 个钩子事件、自动化触发、工作流集成 |
| M06 | 模板系统 | ⭐⭐ 入门 | 47 个模板、CLAUDE.md、配置文件 |
| M07 | MCP 配置 | ⭐⭐⭐ 高级 | Model Context Protocol、外部工具集成 |
| M08 | 插件开发 | ⭐⭐⭐⭐ 专家 | DevOps、PR Review、Documentation 插件 |
| M09 | 工作流优化 | ⭐⭐⭐ 高级 | 效率提升、最佳实践、团队协作 |
| M10 | 定制与扩展 | ⭐⭐⭐⭐ 专家 | 深度定制、性能优化、生态集成 |

---

## M01 - 基础入门

### 1.1 模块简介

基础入门模块帮助用户快速上手 Claude Code，涵盖安装配置、首次启动、核心概念理解等内容。

### 1.2 学习内容

| 编号 | 主题 | 说明 |
|------|------|------|
| 1.1 | 安装 Claude Code | 在不同操作系统上安装 Claude Code |
| 1.2 | 身份验证配置 | 设置 API 密钥、认证机制 |
| 1.3 | 首次启动 | 创建初始配置、选择偏好设置 |
| 1.4 | 核心概念 | 理解 Agent、Session、Context 之间的关系 |
| 1.5 | 基本交互 | 学会与 Claude 进行日常对话和任务下达 |

### 1.3 快速入门命令

```bash
# 检查 Claude Code 版本
claude --version

# 初始化新项目
claude init

# 查看帮助信息
claude help
```

### 1.4 初始配置文件示例

```json
{
  "version": "1.0",
  "model": "claude-sonnet-4-20250514",
  "preferences": {
    "theme": "dark",
    "language": "zh-CN"
  }
}
```

---

## M02 - Slash Commands

### 2.1 模块简介

Slash Commands 是 Claude Code 的核心功能之一，提供 60+ 内置命令，覆盖代码编写、文件操作、项目管理等多个领域。

### 2.2 内置命令分类

#### 文件操作类

| 命令 | 功能 | 使用场景 |
|------|------|----------|
| `/read` | 读取文件内容 | 查看代码、配置 |
| `/write` | 写入文件内容 | 创建新文件、编辑 |
| `/edit` | 编辑文件 | 修改现有代码 |
| `/delete` | 删除文件 | 清理废弃文件 |
| `/search` | 搜索文件内容 | 代码定位 |

#### 项目管理类

| 命令 | 功能 | 使用场景 |
|------|------|----------|
| `/setup` | 环境初始化 | 新项目搭建 |
| `/test` | 运行测试 | 验证代码功能 |
| `/build` | 项目构建 | 编译打包 |
| `/deploy` | 部署发布 | 应用上线 |

#### 代码处理类

| 命令 | 功能 | 使用场景 |
|------|------|----------|
| `/review` | 代码审查 | PR 审查、代码质量 |
| `/refactor` | 重构代码 | 优化代码结构 |
| `/docs` | 生成文档 | 自动生成 README |
| `/fix` | 修复问题 | BUG 修复 |

### 2.3 自定义命令创建

```javascript
// clauderc/.claude/commands/custom-example.js
export default {
  name: 'custom-cmd',
  description: '自定义命令示例',
  run: async (args, context) => {
    // 命令执行逻辑
    return { success: true, result: '执行结果' };
  }
};
```

### 2.4 命令执行流程

```
用户输入 /command arg
        ↓
    命令解析
        ↓
    权限检查
        ↓
    参数验证
        ↓
    执行处理
        ↓
    结果输出
```

---

## M03 - Subagents

### 3.1 模块简介

Subagents（子代理）是 Claude Code 的高级特性，允许将复杂任务分解为多个并行的子任务，由不同的代理分别处理。

### 3.2 内置 Subagents

| 编号 | 子代理名称 | 职责 | 并行能力 |
|------|------------|------|----------|
| 01 | `code-review` | 代码审查 | ✅ 支持 |
| 02 | `documentation` | 文档生成 | ✅ 支持 |
| 03 | `testing` | 测试执行 | ✅ 支持 |
| 04 | `deployment` | 部署执行 | ✅ 支持 |
| 05 | `analysis` | 分析报告 | ✅ 支持 |
| 06 | `automation` | 自动化任务 | ✅ 支持 |

### 3.3 Subagent 通信机制

```
主代理 (Main Agent)
      ↓ 任务分解
 ┌────┼────┬────┬────┐
 ↓    ↓    ↓    ↓    ↓
Sub1 Sub2 Sub3 Sub4 Sub5
      ↓    ↓    ↓    ↓
      └────┼────┘
           ↓
      结果聚合
           ↓
      主代理输出
```

### 3.4 使用示例

```bash
# 启动代码审查子代理
/subagent code-review --path ./src

# 启动文档生成子代理
/subagent documentation --format md

# 启动并行任务
/subagent parallel --tasks review,test,docs
```

### 3.5 子代理配置文件

```yaml
# .claude/subagents.yaml
subagents:
  code-review:
    enabled: true
    timeout: 300
    rules:
      - no-console-log
      - prefer-const
    exclude:
      - "*.test.js"
  
  documentation:
    enabled: true
    template: "default"
    output: "./docs"
```

---

## M04 - Skills 系统

### 4.1 模块简介

Skills（技能）是 Claude Code 的能力扩展单元，提供 5 大核心技能，支持自定义技能开发和技能组合。

### 4.2 内置 Skills

| 技能名称 | 能力描述 | 适用场景 |
|----------|----------|----------|
| `code` | 代码编写与优化 | 日常开发、代码生成 |
| `review` | 代码审查与质量 | PR 审查、代码检查 |
| `deploy` | 部署与运维 | 应用发布、环境管理 |
| `docs` | 文档生成 | README、API 文档 |
| `test` | 测试执行 | 单元测试、集成测试 |

### 4.3 Skill 结构

```
skill-name/
├── skill.json       # 技能元数据
├── prompts/         # 提示词模板
├── scripts/         # 执行脚本
└── config.yaml      # 技能配置
```

### 4.4 自定义技能开发

```javascript
// skills/my-skill/skill.json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "我的自定义技能",
  "triggers": ["custom:action"],
  "capabilities": {
    "files": true,
    "terminal": true,
    "network": false
  }
}
```

### 4.5 技能组合

```yaml
# 技能组合配置示例
combo:
  name: "full-stack"
  skills:
    - code
    - test
    - deploy
  workflow:
    - skill: code
      input: "feature implementation"
    - skill: test
      input: "test coverage > 80%"
    - skill: deploy
      input: "staging environment"
```

---

## M05 - Hooks 机制

### 5.1 模块简介

Hooks（钩子）机制提供 28 个事件触发点，支持在关键操作前后执行自定义逻辑，实现工作流自动化。

### 5.2 钩子事件分类

#### 提交相关钩子

| 事件 | 触发时机 | 用途 |
|------|----------|------|
| `pre-commit` | 提交前 | 格式校验、代码检查 |
| `post-commit` | 提交后 | 通知、记录 |
| `pre-push` | 推送前 | 构建验证、测试 |
| `post-push` | 推送后 | 部署触发、CI/CD |

#### 文件操作钩子

| 事件 | 触发时机 | 用途 |
|------|----------|------|
| `pre-file-write` | 写入前 | 内容验证 |
| `post-file-write` | 写入后 | 依赖更新 |
| `pre-file-delete` | 删除前 | 备份检查 |
| `post-file-delete` | 删除后 | 清理工作 |

#### 任务执行钩子

| 事件 | 触发时机 | 用途 |
|------|----------|------|
| `pre-task` | 任务前 | 准备检查 |
| `post-task` | 任务后 | 结果记录 |
| `on-error` | 错误时 | 错误处理 |

### 5.3 钩子配置示例

```javascript
// clauderc/.claude/hooks/pre-commit.js
export default {
  event: 'pre-commit',
  async run(context) {
    const { files, commitMessage } = context;
    
    // 检查清单
    const checks = [
      { name: 'format', pass: await checkFormat(files) },
      { name: 'lint', pass: await checkLint(files) },
      { name: 'test', pass: await checkTest(files) }
    ];
    
    const failed = checks.filter(c => !c.pass);
    if (failed.length > 0) {
      return { 
        allowed: false, 
        reason: `检查失败: ${failed.map(c => c.name).join(', ')}` 
      };
    }
    
    return { allowed: true };
  }
};
```

### 5.4 工作流集成

```yaml
# GitHub Actions 集成示例
name: Claude Hooks
on: [push, pull_request]
jobs:
  pre-commit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run Pre-Commit Hooks
        run: |
          claude hooks run pre-commit --files ${{ github.changed_files }}
```

---

## M06 - 模板系统

### 6.1 模块简介

模板系统提供 47 个开箱即用的模板，覆盖配置、CLAUDE.md、Hook 脚本、MCP 配置等多种场景。

### 6.2 模板分类

#### 配置文件模板 (configs/)

| 模板名称 | 用途 | 文件类型 |
|----------|------|----------|
| `eslint-config` | ESLint 配置 | .eslintrc.json |
| `prettier-config` | Prettier 配置 | .prettierrc |
| `tsconfig` | TypeScript 配置 | tsconfig.json |
| `jest-config` | Jest 测试配置 | jest.config.js |
| `webpack-config` | Webpack 构建配置 | webpack.config.js |

#### CLAUDE.md 模板 (claude-md/)

| 模板名称 | 适用场景 |
|----------|----------|
| `project-startup` | 新项目启动规范 |
| `api-development` | API 开发规范 |
| `frontend-dev` | 前端开发规范 |
| `backend-dev` | 后端开发规范 |
| `data-science` | 数据科学项目 |

#### Hook 脚本模板 (hooks/)

| 模板名称 | 触发事件 |
|----------|----------|
| `validate-branch` | pre-commit |
| `auto-format` | pre-commit |
| `deploy-notify` | post-push |
| `test-runner` | pre-push |

#### MCP 配置模板 (mcp/)

| 模板名称 | 服务 |
|----------|------|
| `github-mcp` | GitHub API |
| `filesystem-mcp` | 文件系统 |
| `database-mcp` | 数据库 |
| `api-mcp` | 外部 API |

### 6.3 模板使用

```bash
# 列出所有可用模板
claude template list

# 使用模板创建文件
claude template use eslint-config --output .eslintrc.json

# 自定义模板
claude template create my-template --base existing-template
```

### 6.4 模板变量

```markdown
<!-- CLAUDE.md 模板示例 -->
# {{project_name}}

## 项目描述
{{description}}

## 技术栈
{{tech_stack}}

## 开发规范
{{coding_standards}}

## 快速开始
{{quick_start}}
```

---

## M07 - MCP 配置

### 7.1 模块简介

MCP（Model Context Protocol）配置用于连接外部工具和服务，扩展 Claude Code 的能力边界。

### 7.2 MCP 服务器类型

| 类型 | 示例 | 能力 |
|------|------|------|
| `filesystem` | 本地文件操作 | 读取、写入、搜索 |
| `github` | GitHub API | PR、Issue、Repo |
| `database` | 数据库连接 | 查询、写入 |
| `api` | 外部 API | HTTP 请求 |
| `custom` | 自定义服务 | 业务定制 |

### 7.3 MCP 配置示例

```javascript
// clauderc/.claude/mcp/servers.js
export const servers = {
  filesystem: {
    enabled: true,
    permissions: ['read', 'write', 'search'],
    exclude: ['node_modules', '.git']
  },
  
  github: {
    enabled: true,
    auth: {
      type: 'token',
      token: process.env.GITHUB_TOKEN
    },
    permissions: ['repo', 'read:user']
  },
  
  database: {
    enabled: false,
    type: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
```

### 7.4 工具调用流程

```
Claude Code
    ↓
MCP Client
    ↓
MCP Server (e.g., GitHub)
    ↓
External Service
    ↓
结果返回
```

---

## M08 - 插件开发

### 8.1 模块简介

插件体系提供三大生产级插件，支持 DevOps 自动化、PR 审查、文档生成等企业级功能。

### 8.2 内置插件

#### 8.2.1 DevOps Automation

| 功能 | 说明 |
|------|------|
| 自动化构建 | 支持 CI/CD 流程 |
| 环境管理 | 多环境配置切换 |
| 部署编排 | 一键部署到多平台 |

#### 8.2.2 PR Review

| 功能 | 说明 |
|------|------|
| 代码审查 | 自动检查代码质量 |
| 规范检查 | 验证编码规范 |
| 反馈生成 | 生成审查报告 |

#### 8.2.3 Documentation

| 功能 | 说明 |
|------|------|
| 文档生成 | 自动生成 README |
| API 文档化 | OpenAPI/Swagger |
| CHANGELOG | 自动更新日志 |

### 8.3 插件开发结构

```
plugins/
└── my-plugin/
    ├── plugin.json       # 插件元数据
    ├── src/
    │   ├── index.js      # 入口文件
    │   ├── commands/     # 命令
    │   ├── hooks/        # 钩子
    │   └── templates/    # 模板
    └── package.json
```

### 8.4 插件配置

```javascript
// plugin.json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "我的插件",
  "author": "Developer",
  "entry": "src/index.js",
  "permissions": {
    "files": true,
    "network": true,
    "terminal": true
  },
  "dependencies": {}
}
```

---

## M09 - 工作流优化

### 9.1 模块简介

工作流优化模块提供效率提升策略、最佳实践和团队协作指南，帮助最大化 Claude Code 的使用价值。

### 9.2 效率优化策略

| 策略 | 实施方法 | 预期效果 |
|------|----------|----------|
| 上下文精简 | 移除冗余信息 | 响应速度 +30% |
| 任务分解 | 大任务拆小任务 | 准确率 +40% |
| 模板复用 | 标准化模板 | 效率 +50% |
| 缓存利用 | 避免重复计算 | 速度 +60% |

### 9.3 最佳实践

#### 9.3.1 提示词优化

```markdown
# ❌ 不推荐
写一个函数

# ✅ 推荐
用 TypeScript 写一个函数，计算数组平均值：
- 输入：number[]
- 输出：number
- 包含类型注解
- 添加 JSDoc 注释
```

#### 9.3.2 任务分解

```
复杂任务 → 子任务1 + 子任务2 + 子任务3
              ↓           ↓           ↓
           并行执行    并行执行    并行执行
              ↓           ↓           ↓
           结果1       结果2       结果3
              ↓           ↓           ↓
              └───────────┴───────────┘
                         ↓
                    结果聚合
```

### 9.4 团队协作

| 场景 | 工具 | 配置 |
|------|------|------|
| 代码审查 | PR Review 插件 | team-review.claude |
| 文档同步 | Documentation 插件 | shared-docs/ |
| 规范统一 | CLAUDE.md 模板 | .claude/project.md |

---

## M10 - 定制与扩展

### 10.1 模块简介

定制与扩展模块涵盖深度定制、性能优化和生态系统集成，帮助高级用户打造专属的 Claude Code 体验。

### 10.2 深度定制

#### 10.2.1 自定义主题

```javascript
// .claude/theme/custom.js
export const theme = {
  colors: {
    primary: '#007ACC',
    secondary: '#6C757D',
    background: '#FFFFFF',
    text: '#333333'
  },
  font: {
    family: 'Inter, sans-serif',
    size: '14px'
  }
};
```

#### 10.2.2 自定义工作流

```yaml
# .claude/workflows/custom.yml
workflows:
  my-workflow:
    name: "自定义工作流"
    steps:
      - action: "setup"
        config: "dev"
      - action: "test"
        coverage: true
      - action: "build"
        target: "production"
      - action: "deploy"
        environment: "production"
```

### 10.3 性能优化

| 优化项 | 方法 | 效果 |
|----------|------|------|
| 启动速度 | 懒加载插件 | 启动 -50% |
| 响应延迟 | 上下文压缩 | 延迟 -40% |
| 内存占用 | 资源释放 | 内存 -30% |
| 并行处理 | 任务队列 | 吞吐 +100% |

### 10.4 生态系统集成

#### 10.4.1 IDE 集成

| IDE | 插件 | 功能 |
|-----|------|------|
| VS Code | Claude Extension | 内联辅助 |
| JetBrains | Claude Plugin | 智能补全 |
| Vim/Neovim | Claude.vim | 命令行集成 |

#### 10.4.2 CI/CD 集成

```yaml
# .github/workflows/claude.yml
name: Claude Integration
on: [push, pull_request]
jobs:
  claude-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Claude Code Review
        uses: claudecode/review-action@v1
        with:
          api-key: ${{ secrets.CLAUDE_API_KEY }}
```

---

## 学习路径建议

### 初学者路径

```
M01 基础入门 → M02 Slash Commands → M06 模板系统 → M05 Hooks
```

### 进阶路径

```
M02 Slash Commands → M04 Skills → M03 Subagents → M07 MCP
```

### 专家路径

```
M08 插件开发 → M09 工作流优化 → M10 定制与扩展
```

---

## 相关资源

- [系统架构文档](./architecture.md)
- [设计理念](./design.md)
- [概览](./overview.md)

---

*本文档由 Claude Code 自动生成，基于 luongnv89/claude-howto 源码分析。*
