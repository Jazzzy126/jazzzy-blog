---
title: 命名路由传递参数
order: 3
---

# 命名路由传递参数

## 定义需要传递的参数

首先，定义需要传递给新路由的参数。在这个示例中我们传递了两个数据：页面的标题 title 和内容 message。

To pass both pieces of data, create a class that stores this information. 创建包含 title 和 message 字段的实体类来同时传递这两个数据。

```dart [dart]
//您可以将任何对象传递给arguments参数。
//在这个例子中，创建一个同时包含以下内容的类
//可定制的标题和消息。
class ScreenArguments {
  final String title;
  final String message;

  ScreenArguments(this.title, this.message);
}
```

## 创建组件来获取参数

接着，创建组件，从 ScreenArguments 提取 title 和 message 参数并展示。为了访问 ScreenArguments，可以使用 ModalRoute.of()
方法。这个方法返回的是当前路由及其携带的参数。

```dart [dart]
//一个从中提取必要参数的小部件
class ExtractArgumentsScreen extends StatelessWidget {
  const ExtractArgumentsScreen({super.key});

  static const routeName = '/extractArguments';

  @override
  Widget build(BuildContext context) {
    //从当前ModalRoute中提取参数
    //设置并将其转换为ScreenArguments。
    final args = ModalRoute.of(context)!.settings.arguments as ScreenArguments;

    return Scaffold(
      appBar: AppBar(
        title: Text(args.title),
      ),
      body: Center(
        child: Text(args.message),
      ),
    );
  }
}
```

## 把组件注册到路由表中
然后，在 MaterialApp 的路由表 routes 中增加一个入口，路由表 routes 会根据路由的名称来决定需要创建哪个路由。
```dart [dart]
MaterialApp(
  routes: {
    ExtractArgumentsScreen.routeName: (context) =>
        const ExtractArgumentsScreen(),
  },
)
```
## 导航到组件
最后，在用户点击按钮后导航到 ExtractArgumentsScreen。在 Navigator.pushNamed() 方法的 arguments 属性里提供需要传递的参数。随后，ExtractArgumentsScreen 就可以从参数中提取 title 和 message。

```dart [dart]
//导航到指定路线的按钮。
//指定的路由提取参数
ElevatedButton(
  onPressed: () {
    //当用户点击按钮时，
    //导航到指定路线，然后
    //将参数作为可选参数提供
    //参数。
    Navigator.pushNamed(
      context,
      ExtractArgumentsScreen.routeName,
      arguments: ScreenArguments(
        'Extract Arguments Screen',
        'This message is extracted in the build method.',
      ),
    );
  },
  child: const Text('Navigate to screen that extracts arguments'),
),
```
