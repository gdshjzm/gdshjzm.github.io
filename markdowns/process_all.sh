#!/bin/bash

# Markdown文件批量序列化脚本
# 自动处理当前目录下的所有markdown文件

echo "开始批量处理markdown文件..."
echo "当前目录: $(pwd)"
echo ""

# 检查Python是否可用
if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
    echo "错误: 未找到Python，请安装Python 3.6+"
    exit 1
fi

# 使用python3（如果可用）或python
PYTHON_CMD="python3"
if ! command -v python3 &> /dev/null; then
    PYTHON_CMD="python"
fi

# 检查序列化工具是否存在
if [ ! -f "markdown_serializer.py" ]; then
    echo "错误: 未找到 markdown_serializer.py"
    exit 1
fi

# 处理当前目录的所有markdown文件
echo "找到以下markdown文件:"
find . -maxdepth 1 -name "*.md" -not -name "*_serialized.md" | while read -r file; do
    echo "  - $file"
done

echo ""
echo "开始序列化..."

# 执行序列化
$PYTHON_CMD markdown_serializer.py . -d

echo ""
echo "批量处理完成!"
echo "序列化后的文件带有 '_serialized' 后缀"