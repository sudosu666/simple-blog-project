import os
import re

# Исходный файл
with open("all_components.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Папка для сохранения компонентов
output_dir = "components/ui"
os.makedirs(output_dir, exist_ok=True)

# Находим все компоненты, начинающиеся с export const или export class
pattern = r"(?:(?:export const|export class|export interface)\s+[A-Z][\w]*)[\s\S]*?(?=(?:export const|export class|export interface|\Z))"

matches = re.findall(pattern, content)

for match in matches:
    # Название компонента
    name_match = re.search(r"(?:export const|export class|export interface)\s+(\w+)", match)
    if not name_match:
        continue
    name = name_match.group(1)

    # Файл для компонента
    filename = os.path.join(output_dir, f"{name[0].lower() + name[1:]}.tsx")

    # Добавляем хедеры, если нужно
    header = "import React from \"react\";\nimport { cn } from \"@/lib/utils\";\n\n"
    if match.startswith("export interface"):
        header = ""

    # Запись
    with open(filename, "w", encoding="utf-8") as f:
        f.write(header + match.strip() + "\n")

    print(f"✅ Saved {filename}")
