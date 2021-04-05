# Яндекс ШРИ 2021

## Зависимости

Для проекта выбрала библиотеку React и сборщик Webpack - это привычный мне стек, я его быстро настраиваю и работаю.
```json
{
    "@babel/core": "7.13.13",
    "@babel/preset-env": "7.13.12",
    "@babel/preset-react": "7.13.13",
    "babel-loader": "8.2.2",
    "clean-webpack-plugin": "3.0.0",
    "copy-webpack-plugin": "8.1.0",
    "css-loader": "5.0.2",
    "css-minimizer-webpack-plugin": "1.2.0",
    "file-loader": "6.2.0",
    "html-webpack-plugin": "5.0.0",
    "mini-css-extract-plugin": "1.3.6",
    "webpack": "5.21.2",
    "webpack-cli": "4.5.0",
    "webpack-dev-server": "3.11.2",
    "prop-types": "15.7.2",
    "react": "17.0.2",
    "react-dom": "17.0.2"
}
```

Вспомогательные средства для поддержания кода в порядке
```json
{
    "babel-eslint": "10.1.0",
    "eslint": "7.23.0",
    "eslint-config-prettier": "8.1.0",
    "eslint-plugin-babel": "5.3.1",
    "eslint-plugin-prettier": "3.3.1",
    "eslint-plugin-react": "7.23.1",
    "eslint-plugin-react-hooks": "4.2.0",
    "husky": "4.2.3",
    "lint-staged": "10.5.4",
    "prettier": "2.2.1",
    "stylelint": "13.12.0",
    "stylelint-config-recommended": "4.0.0",
    "stylelint-config-standard": "21.0.0"
}
```

Просто normalize для сброса дефолтных стилей, чтобы вручную не копировать и не хранить в проекте.
```json
{
  "normalize.css": "8.0.1"
}
```

Библиотека, упрощающая работу с классами, которые нужно прокинуть компоненту.

```json
{
  "classnames": "2.2.6"
}
```

В большинстве случаев можно обойтись без неё, однако:
- Для меня код (1) выглядит более понятным и структурированным, чем (2), не сливается в одну строку. Тут просто вкусовщина
```js
// (1)
className={cn(
  'arrow-button',
  `arrow-button__direction_${direction}`,
  className
)}
// (2)
className={`arrow-button arrow-button__direction_${direction} ${className}`}
```
- В ситуациях (3) библиотека упрощает жизнь - не нужно городить велосипед из проверок.
```js
// (3)
className={cn('prize-podium-column', {
  'prize-podium-column_winner': isWinner,
})}
```

Ещё была попытка подключить к сборке `svg-sprite-loader`, чтобы svg изображения для столбцов собирались в спрайт автоматически.
Подружить проект с этим лоадером не удалось, в сборке путь к спрайту заменялся на абсолютный, починить это не успела.
Поэтому промежуточное решение: собрала спрайт, удалила лоадер, спрайт поместила в assets.
