// lib/utils.ts

// Проверка: пустой ли объект
export const isEmptyObject = (obj: object): boolean =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

// Заглавная первая буква строки
export const capitalize = (str: string): string =>
  str ? str[0].toUpperCase() + str.slice(1) : "";

// Форматирование даты: "22 мая 2025"
export const formatDate = (date: string | Date): string =>
  new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Случайное число от min до max включительно
export const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Задержка (sleep) на ms миллисекунд
export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

// Классы с поддержкой Tailwind Merge
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Универсальный merge классов с поддержкой конфликтов tailwind
export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}

