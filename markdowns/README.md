# Markdown 文件序列化工具

这是一个用于复制 Markdown 文件并保持空格不变的 Python 工具。

## 功能特性

- ✅ 保持所有空格不变
- ✅ 支持单个文件处理
- ✅ 支持批量处理目录
- ✅ 支持递归处理子目录
- ✅ UTF-8 编码支持

## 安装要求

- Python 3.6+
- 无需额外依赖

## 使用方法

### 1. 序列化单个文件

```bash
# 基本用法
python markdown_serializer.py input.md

# 指定输出文件
python markdown_serializer.py input.md -o output.md
```

### 2. 批量处理目录

```bash
# 处理当前目录的所有markdown文件
python markdown_serializer.py . -d

# 处理指定目录
python markdown_serializer.py /path/to/markdowns -d

# 递归处理目录及其子目录
python markdown_serializer.py /path/to/markdowns -d -r
```

### 3. 查看帮助

```bash
python markdown_serializer.py --help
```

## 示例

假设有一个 `example.md` 文件：

```markdown
# 标题

这是一段文本，前面有 4 个空格：
    这是缩进文本

这是另一段，前面有 2 个空格：
  这也是缩进文本
```

运行序列化后：

```bash
python markdown_serializer.py example.md
```

输出文件 `example_serialized.md` 将保持完全相同的内容。

## 文件结构

```
markdowns/
├── markdown_serializer.py  # 主程序
├── README.md              # 说明文档
└── (处理后的文件会保存在这里)
```

## 注意事项

1. 该工具会创建新的序列化文件，不会修改原始文件
2. 文件名格式：`原文件名_serialized.txt`
3. 支持中文和其他 Unicode 字符
4. 如果输出文件已存在，会被覆盖

## 错误处理

- 文件不存在时会显示错误信息
- 目录不存在时会显示错误信息
- 编码错误时会显示错误信息

## 许可证

MIT License