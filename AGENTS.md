# AGENTS.md

**Project:** 修仙设定Wiki (Xiuxian/Cultivation Worldbuilding Wiki)
**Type:** Static content wiki (MDwiki)
**Files:** 692 markdown documents
**Language:** Chinese

## Overview

This is a **worldbuilding knowledge base** for Chinese cultivation/xiuxian (修仙) novels. No code to run, build, or test - purely documentation content organized as a browsable wiki.

Powered by [MDwiki](http://mdwiki.info) - a single-page static wiki that renders markdown files client-side.

## Structure

```
./
├── index.html         # MDwiki entry point
├── MDwiki.min.js      # MDwiki engine
├── mdwiki.css         # Styles
├── index.md           # Main navigation page (primary entry)
├── navigation.md      # Duplicate of index.md
│
├── 界面划分/           # Nine realms/worlds (凡间界/修真界/仙界/魔界/etc.)
├── 功法法术/           # Techniques & spells (tiered 一阶→九阶)
├── 资源物品/           # Items, artifacts, creatures (tiered)
├── 修炼体系/           # Cultivation system (realms, spiritual roots)
├── 世界观/             # Worldbuilding (calendar, history, rules)
├── 特殊设定/           # Special settings (tribulations, divine beasts)
├── 人物体系/           # Character profiles
└── 写作参考/           # Writing guides & templates
```

## Content Organization Patterns

### Tiered Systems (功法法术/资源物品)
Many categories use **9-tier hierarchy** (一阶→九阶), mirroring cultivation realms:
- Directories like `功法法术/功法分类/攻击类功法/一阶/` contain tier-specific content
- Files within each tier describe individual items/techniques

### Realm Structure (界面划分)
Nine realms with parallel substructures:
```
界面划分/{realm}/
├── {realm}总览.md      # Overview
├── 势力/               # Factions
├── 物品/               # Items
├── 灵脉/               # Spirit veins
├── 秘境/               # Secret realms
└── 绝地/               # Forbidden lands
```

## Viewing the Wiki

1. Open `index.html` in a browser, OR
2. Use any markdown viewer on `index.md` as navigation

No server required - MDwiki runs entirely client-side.

## Editing Conventions

- All content is markdown (`.md`)
- Internal links use relative paths: `[Link](界面划分/仙界/仙界总览.md)`
- Files follow naming pattern: `{category}总览.md` for overviews
- Tier directories use Chinese numerals: `一阶/`, `二阶/`, etc.

## Key Files

| Purpose | File |
|---------|------|
| Main navigation | `index.md` |
| Cultivation system overview | `修炼体系/修炼体系总览.md` |
| Realm overview | `界面划分/界面总览.md` |
| Technique system | `功法法术/功法体系.md` |

## Notes

- **No build process** - changes to `.md` files are immediately visible
- **No tests** - this is pure documentation
- **No dependencies** - MDwiki is self-contained
- Content is Chinese; maintain Chinese naming conventions
