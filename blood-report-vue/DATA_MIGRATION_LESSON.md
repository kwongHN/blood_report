# 数据迁移教训

## 核心规则
**迁移数据时，必须严格对照原始代码中的实际使用方式来设计数据结构。**

## 为什么
在 Vue 重构 blood-report-vue 项目时，把 Cart 数据设计成了嵌套结构 `{ records: { tPct: { values: [] } } }`，但代码中实际使用的是扁平结构 `cartData.tPct`（直接取数组）。这导致 Cart 细胞图表和表格全部显示错误。

## 具体表现
| 位置 | 原 HTML | 错误设计 |
|------|---------|----------|
| cart 数据 | `cartData.tPct` → 数组 | `cartData.tPct.values` → 对象 |

## 迁移检查清单
1. 读取原始代码（HTML/JS）中数据的实际使用方式
2. 设计 JSON 结构时严格保持一致，不要"优化"
3. 迁移完成后**立即在浏览器验证**，检查 Console 无报错
4. 关键检查点：
   - 对象 key 名称是否一致
   - 数组 vs 对象的层级是否一致
   - 数据类型是否一致

## 如何避免
- 用原始数据文件和目标代码做交叉验证
- 不要在迁移时做结构"优化"
- 先验证数据流再继续开发

---

## 第二次同样错误

**问题：** 在 App.vue 中写成了：
```js
const cartData = computed(() => reportData.cart.records)  // ❌
```

但 report.json 中 cart 没有 `records` 层，是扁平的：
```json
"cart": { "dates": [...], "tPct": [...], ... }  // 直接是 tPct，不是 records.tPct
```

**正确写法：**
```js
const cartData = computed(() => reportData.cart)  // ✅
```

**教训：** 同样问题犯了两次。根因是：没有在实际运行时（浏览器）验证数据是否正确传递。
