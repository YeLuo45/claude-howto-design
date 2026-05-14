# 功能概览

本文档详细介绍 Claude How To 项目的核心功能特性。

## 1. 核心功能数据

| 功能类别 | 数量 | 说明 |
|----------|------|------|
| Slash Commands | 60+ | 内置命令集 |
| Subagents | 6 | 子代理任务处理 |
| Skills | 5 | 技能系统 |
| Hook Events | 28 | 钩子事件机制 |
| 模板 | 47 | 配置、CLAUDE.md、Hook、MCP 配置 |
| 插件 | 3 | DevOps、PR Review、Documentation |

## 2. 10 大教程模块

### 2.1 模块列表

| 编号 | 模块名称 | 难度 | 核心内容 |
|------|----------|------|----------|
| 01 | 基础入门 | ⭐ | 环境搭建、基本配置 |
| 02 | Slash Commands | ⭐⭐ | 命令系统详解 |
| 03 | Subagents | ⭐⭐ | 子代理使用 |
| 04 | Skills | ⭐⭐ | 技能开发 |
| 05 | Hooks | ⭐⭐⭐ | 钩子事件 |
| 06 | 模板系统 | ⭐⭐ | 模板使用 |
| 07 | MCP 配置 | ⭐⭐ | 模型上下文协议 |
| 08 | 插件开发 | ⭐⭐⭐ | 插件体系 |
| 09 | 最佳实践 | ⭐⭐⭐ | 实战经验 |
| 10 | 高级主题 | ⭐⭐⭐⭐ | 深度优化 |

### 2.2 学习路径

```
入门 → 基础命令 → 子代理 → 技能 → 钩子 → 模板 → MCP → 插件 → 实践 → 高级
```

## 3. 内置命令详解

### 3.1 Slash Commands (60+)

| 类别 | 命令数量 | 代表命令 |
|------|----------|----------|
| 项目初始化 | 8 | `setup`, `init`, `config` |
| 代码审查 | 10 | `pr-review`, `lint`, `format` |
| 文档生成 | 7 | `docs`, `readme`, `changelog` |
| 部署运维 | 12 | `deploy`, `rollback`, `monitor` |
| 测试验证 | 9 | `test`, `coverage`, `benchmark` |
| 自动化 | 15+ | `automation`, `batch`, `schedule` |

### 3.2 Subagents (6)

| 名称 | 功能 | 使用场景 |
|------|------|----------|
| code-review | 代码审查 | PR 审核、代码质量检查 |
| documentation | 文档生成 | API 文档、README 更新 |
| testing | 测试执行 | 单元测试、集成测试 |
| deployment | 部署执行 | 一键部署、回滚操作 |
| analysis | 分析报告 | 代码分析、性能报告 |
| automation | 自动化任务 | 批量处理、任务编排 |

### 3.3 Skills (5)

| 技能 | 能力描述 | 集成方式 |
|------|----------|----------|
| code | 代码编写与优化 | 自动触发 |
| review | 代码审查与质量 | PR 事件 |
| deploy | 部署与运维 | 手动触发 |
| docs | 文档生成 | 命令触发 |
| test | 测试执行 | CI/CD 集成 |

### 3.4 Hook Events (28)

| 阶段 | 事件数量 | 触发时机 |
|------|----------|----------|
| pre | 8 | 提交前、推送前、部署前 |
| post | 8 | 提交后、推送后、部署后 |
| on | 12 | 文件变更、错误发生、定时任务 |

## 4. 模板系统 (47 个模板)

### 4.1 模板分类

| 类别 | 数量 | 用途 |
|------|------|------|
| configs | 15 | 配置文件模板 |
| claude-md | 12 | CLAUDE.md 文档模板 |
| hooks | 10 | Hook 脚本模板 |
| mcp | 10 | MCP 配置模板 |

### 4.2 模板预览

#### 配置文件模板
```json
{
  "name": "project-config",
  "version": "1.0.0",
  "settings": { ... }
}
```

#### CLAUDE.md 模板
```markdown
# Project Name
## Overview
## Getting Started
## Commands
```

#### Hook 脚本模板
```bash
#!/bin/bash
# Pre-commit hook
echo "Running checks..."
```

#### MCP 配置模板
```json
{
  "mcpServers": { ... }
}
```

## 5. 插件体系

### 5.1 三大生产级插件

| 插件名称 | 功能定位 | 核心能力 |
|----------|----------|----------|
| DevOps Automation | 自动化运维 | CI/CD 集成、部署编排、环境管理 |
| PR Review | 代码审查 | 自动审查、规范检查、反馈生成 |
| Documentation | 文档生成 | API 文档、README 更新、结构化输出 |

### 5.2 DevOps Automation 插件

**功能特性：**
- 自动化构建流程
- 多环境配置管理
- 部署编排与回滚
- 日志监控与告警
- 资源扩缩容

**配置示例：**
```yaml
devops:
  build:
    steps:
      - checkout
      - install
      - build
      - test
  deploy:
    target: production
    strategy: rolling
```

### 5.3 PR Review 插件

**功能特性：**
- 自动代码审查
- 风格规范检查
- 安全隐患检测
- 性能问题识别
- 审查报告生成

**配置示例：**
```yaml
pr-review:
  rules:
    - id: style
      enabled: true
    - id: security
      enabled: true
    - id: performance
      enabled: true
```

### 5.4 Documentation 插件

**功能特性：**
- 自动文档生成
- API 文档化
- README 智能更新
- Changelog 管理
- 多语言支持

## 6. 多语言支持

### 6.1 支持的语言

| 语言 | 代码 | 完成度 | 状态 |
|------|------|--------|------|
| 英文 | en | 100% | ✅ |
| 越南文 | vi | 100% | ✅ |
| 中文 | zh | 100% | ✅ |
| 乌克兰文 | uk | 100% | ✅ |
| 日文 | ja | 100% | ✅ |

### 6.2 国际化架构

```
docs-site/
├── en/
│   ├── guide/
│   └── reference/
├── vi/
│   ├── guide/
│   └── reference/
├── zh/
│   ├── guide/
│   └── reference/
├── uk/
│   ├── guide/
│   └── reference/
└── ja/
    ├── guide/
    └── reference/
```

## 7. 配置系统

### 7.1 clauderc 结构

```
.claude/
├── commands/          # Slash Commands
│   ├── setup/
│   ├── pr-review/
│   └── ...
├── subagents/         # Subagent 定义
│   ├── code-review/
│   └── ...
├── skills/           # Skills 定义
│   ├── code/
│   └── ...
└── hooks/            # Hook 事件
    ├── pre-commit/
    └── ...
```

### 7.2 配置示例

```json
{
  "version": "1.0.0",
  "commands": {
    "prefix": "/",
    "autoSuggest": true
  },
  "subagents": {
    "maxConcurrent": 3,
    "timeout": 300
  },
  "hooks": {
    "enabled": true,
    "verbose": false
  }
}
```

## 8. 使用场景

### 8.1 日常开发

| 场景 | 使用功能 |
|------|----------|
| 新项目初始化 | `setup` command + 模板 |
| 代码编写 | Skills (code) |
| 代码审查 | `pr-review` + PR Review 插件 |
| 文档更新 | `docs` command + Documentation 插件 |

### 8.2 自动化流程

| 场景 | 使用功能 |
|------|----------|
| CI/CD | DevOps Automation 插件 |
| 定时任务 | Hook Events |
| 批量处理 | Subagent (automation) |
| 部署发布 | `deploy` command + DevOps 插件 |

### 8.3 团队协作

| 场景 | 使用功能 |
|------|----------|
| 代码规范 | Hook Events (pre-commit) |
| PR 审查 | PR Review 插件 |
| 知识共享 | CLAUDE.md 模板 |
| 文档同步 | Documentation 插件 |

## 9. 快速开始

### 9.1 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/luongnv89/claude-howto.git

# 2. 安装依赖
npm install

# 3. 运行设置
npm run setup

# 4. 启动开发服务器
npm run dev
```

### 9.2 基本配置

```bash
# 初始化 Claude Code 配置
/claude-setup

# 选择语言
/config language zh

# 导入模板
/template import all
```

## 10. 扩展能力

### 10.1 自定义命令

```javascript
// commands/custom/index.js
module.exports = {
  name: 'custom',
  description: '自定义命令',
  run: async (args) => {
    // 自定义逻辑
  }
};
```

### 10.2 自定义技能

```javascript
// skills/custom/index.js
module.exports = {
  name: 'custom',
  capabilities: ['analyze', 'generate'],
  execute: async (task) => {
    // 技能实现
  }
};
```

### 10.3 插件开发

```javascript
// plugins/custom/index.js
module.exports = {
  name: 'custom-plugin',
  version: '1.0.0',
  hooks: {
    onDeploy: async () => { /* ... */ }
  }
};
```

---

*更多详情请参考 [系统架构](./architecture.md) 文档。*
