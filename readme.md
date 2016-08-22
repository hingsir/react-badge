### react-badge 仿QQ未读提醒
> 拖动徽章可消除未读，拖动至初始位置则不消除。

#### 使用方法
```js
import Badge from 'react-badge';

//overflowCount 超过此数字显示+号，默认99
//background 背景色
//color 前景色
//onRemoved 消除后回调
ReactDOM.render((
    <Badge count={100} overflowCount={99} onRemoved={onRemoved}>
    </Badge>
), document.getElementById('container'));
```

**扫一扫看[demo](http://hingsir.com/react-badge/dist/index.html)**

![二维码](example/badge.png)
