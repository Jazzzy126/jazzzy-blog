---
title: 路由
order: 2
---

# Flutter 路由

## 导航到新页面

- `Navigator.push`

```dart [dart]
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => NextScreen()),
);

```

## 返回上一个页面

- `Navigator.pop`

```dart [dart]
Navigator.pop(context);
```

## 通过路由名称导航到新页面

- `Navigator.pushNamed`
- [`🔗命名路由传递参数`](/flutter/router/pushNamed-arguments)

```dart [dart]
Navigator.pushNamed(context, '/new_screen');
```

::: warning 提示
需要在 `MaterialApp` 中定义路由名称
:::

## 替换当前页面并导航到新页面

- `Navigator.pushReplacement`

```dart [dart]
Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (context) => NewScreen()),
);

```
