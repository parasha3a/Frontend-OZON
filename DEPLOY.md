# Деплой на GitHub Pages

## 🚀 Автоматический деплой через GitHub Actions

### Настройка репозитория

1. **Перейдите в настройки репозитория:**
   ```
   https://github.com/parasha3a/Frontend-OZON/settings/pages
   ```

2. **Выберите источник:**
   - Source: `GitHub Actions`
   - Рекомендуется использовать автоматический деплой через Actions

3. **Настройки безопасности:**
   - В разделе `Actions` → `General`
   - Разрешите `Read and write permissions`
   - Разрешите `Allow GitHub Actions to create and approve pull requests`

### Процесс деплоя

При каждом push в ветку `main`:

1. **Автоматически запускается workflow** `.github/workflows/deploy.yml`
2. **Установка зависимостей:** `npm ci`
3. **Сборка проекта:** `npm run build`
4. **Деплой на GitHub Pages**

### Результат

После успешного деплоя сайт будет доступен по адресу:
```
https://parasha3a.github.io/Frontend-OZON/
```

## 📁 Структура деплоя

```
Frontend-OZON-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   └── .nojekyll              # Отключение Jekyll
├── dist/                      # Собранные файлы (автоматически)
├── vite.config.ts             # Настроен base: '/Frontend-OZON/'
└── package.json               # Добавлены deploy скрипты
```

## ⚙️ Конфигурация

### Vite настройки

```typescript
// vite.config.ts
export default defineConfig({
  base: '/Frontend-OZON/',  // Базовый путь для GitHub Pages
  // ... остальные настройки
})
```

### Package.json скрипты

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist",
    "predeploy": "npm run build"
  },
  "homepage": "https://parasha3a.github.io/Frontend-OZON"
}
```

## 🔧 Ручной деплой (опционально)

Если нужно задеплоить вручную:

```bash
# 1. Установка зависимостей
npm install

# 2. Сборка
npm run build

# 3. Деплой (требует установленного gh-pages)
npm run deploy
```

## 📊 Статус деплоя

Проверить статус деплоя можно в разделе:
```
https://github.com/parasha3a/Frontend-OZON/actions
```

## 🛠️ Устранение проблем

### Ошибка 404

Если сайт показывает 404:
1. Проверьте настройки Pages в репозитории
2. Убедитесь что base path в vite.config.ts соответствует имени репозитория
3. Проверьте что `.nojekyll` файл присутствует

### Проблемы с ресурсами

Если не загружаются CSS/JS файлы:
1. Проверьте base path в vite.config.ts
2. Убедитесь что homepage в package.json корректный
3. Проверьте консоль браузера на ошибки 404

### Права доступа

Если Actions не запускается:
1. Зайдите в Settings → Actions → General
2. Выберите "Allow all actions and reusable workflows"
3. В "Workflow permissions" выберите "Read and write permissions"

## ✅ Проверка работы

После деплоя проверьте:

1. **Главная страница загружается:** https://parasha3a.github.io/Frontend-OZON/
2. **Навигация работает** (все секции доступны)
3. **Анимации запускаются** при скролле
4. **Адаптивность** на мобильных устройствах
5. **Нет ошибок** в консоли браузера

## 🔄 Обновление сайта

Для обновления сайта:

1. Внесите изменения в код
2. Сделайте commit и push в ветку main
3. GitHub Actions автоматически пересоберет и задеплоит сайт
4. Изменения появятся на сайте через 2-5 минут

---

**Сайт будет доступен по адресу:** https://parasha3a.github.io/Frontend-OZON/
