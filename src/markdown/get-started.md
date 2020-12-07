# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "flower-ui-1"
```

就可以使用我提供的组件了。

## 组件示例
可点击[Tabs](#/doc/tabs)、[Dialog](#/doc/dialog)、[Button](#/doc/button)、[Switch](#/doc/switch)查看各组件示例。

## 使用示例

Vue 单文件组件中使用：

```
<template>
    <div>
        <Button>按钮</Button>
    </div>
</template>
<script>
    import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "flower-ui-1"
    export default {
        components: {Button}
    }
</script>
    
```