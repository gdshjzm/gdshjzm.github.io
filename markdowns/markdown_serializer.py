#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Markdown文件序列化工具
将markdown文件中的空格转换为制表符(\t)
"""

import os
import sys
import argparse
import json
from pathlib import Path

def serialize_markdown(input_file, output_file=None):
    """
    序列化markdown文件，保留空格不变，并自动添加到posts.json
    
    Args:
        input_file: 输入markdown文件路径
        output_file: 输出文件路径（可选，默认为输入文件+_serialized）
    """
    try:
        # 读取输入文件
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 保留所有空格不变
        serialized_content = content
        
        # 确定输出文件路径
        if output_file is None:
            input_path = Path(input_file)
            output_file = input_path.parent / f"{input_path.stem}_serialized.txt"
        
        # 写入输出文件
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(serialized_content)
        
        # 自动添加到posts.json
        add_to_posts_json(input_file, serialized_content)
        
        print(f"✓ 文件已成功序列化: {input_file}")
        print(f"✓ 输出文件: {output_file}")
        return True
        
    except FileNotFoundError:
        print(f"✗ 错误: 文件不存在 {input_file}")
        return False
    except Exception as e:
        print(f"✗ 错误: {e}")
        return False

def add_to_posts_json(input_file, content):
    """
    将markdown内容添加到posts.json文件中
    
    Args:
        input_file: 输入markdown文件路径
        content: markdown文件内容
    """
    try:
        posts_file = "../posts.json"
        
        # 读取现有的posts.json
        if os.path.exists(posts_file):
            with open(posts_file, 'r', encoding='utf-8') as f:
                posts_data = json.load(f)
        else:
            posts_data = []
        
        # 获取文件名作为标题
        input_path = Path(input_file)
        title = input_path.stem
        
        # 创建新的post条目
        new_post = {
            "id": len(posts_data),
            "title": title,
            "date": "",
            "author": "",
            "content": content
        }
        
        # 添加到posts数据
        posts_data.append(new_post)
        
        # 写回posts.json
        with open(posts_file, 'w', encoding='utf-8') as f:
            json.dump(posts_data, f, ensure_ascii=False, indent=4)
        
        print(f"✓ 已添加到posts.json: {title}")
        
    except Exception as e:
        print(f"✗ 添加posts.json时出错: {e}")


def process_directory(directory_path, recursive=False):
    """
    处理目录中的所有markdown文件
    
    Args:
        directory_path: 目录路径
        recursive: 是否递归处理子目录
    """
    try:
        path = Path(directory_path)
        
        if not path.exists():
            print(f"✗ 错误: 目录不存在 {directory_path}")
            return False
        
        # 获取所有markdown文件
        pattern = "**/*.md" if recursive else "*.md"
        md_files = list(path.glob(pattern))
        
        if not md_files:
            print(f"ℹ️  目录中没有找到markdown文件: {directory_path}")
            return True
        
        print(f"找到 {len(md_files)} 个markdown文件")
        
        success_count = 0
        for md_file in md_files:
            if serialize_markdown(md_file):
                success_count += 1
        
        print(f"\n✓ 完成: 成功处理 {success_count}/{len(md_files)} 个文件")
        return True
        
    except Exception as e:
        print(f"✗ 错误: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(
        description="Markdown文件序列化工具 - 将空格转换为制表符",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
使用示例:
  # 序列化单个文件
  python markdown_serializer.py input.md
  
  # 序列化单个文件并指定输出
  python markdown_serializer.py input.md -o output.md
  
  # 处理目录中的所有markdown文件
  python markdown_serializer.py /path/to/markdowns -d
  
  # 递归处理目录及其子目录
  python markdown_serializer.py /path/to/markdowns -d -r
"""
    )
    
    parser.add_argument('input', nargs='?', help='输入文件或目录路径')
    parser.add_argument('-o', '--output', help='输出文件路径（仅用于单个文件）')
    parser.add_argument('-d', '--directory', action='store_true', 
                       help='处理目录而不是单个文件')
    parser.add_argument('-r', '--recursive', action='store_true',
                       help='递归处理子目录（仅用于目录模式）')
    
    args = parser.parse_args()
    
    if not args.input:
        parser.print_help()
        return
    
    if args.directory:
        # 目录模式
        process_directory(args.input, args.recursive)
    else:
        # 文件模式
        if args.output and os.path.isdir(args.input):
            print("✗ 错误: 当输入是目录时，请使用 -d 选项")
            return
        serialize_markdown(args.input, args.output)

if __name__ == "__main__":
    main()