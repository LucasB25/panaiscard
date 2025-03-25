<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=PanaisCard&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient" />
</p>

<p align="center">
  <a href="version-url"><img src="https://img.shields.io/github/package-json/v/LucasB25/panaiscard?style=for-the-badge" alt="Version" /></a>
  <a href="https://www.npmjs.com/package/panaiscard"><img src="https://img.shields.io/npm/v/panaiscard.svg?maxAge=3600&style=for-the-badge" alt="NPM version" /></a>
  <a href="contributors-url"><img src="https://img.shields.io/github/contributors/LucasB25/panaiscard.svg?style=for-the-badge" alt="Contributors" /></a>
  <a href="forks-url"><img src="https://img.shields.io/github/forks/LucasB25/panaiscard.svg?style=for-the-badge" alt="Forks" /></a>
  <a href="stars-url"><img src="https://img.shields.io/github/stars/LucasB25/panaiscard.svg?style=for-the-badge" alt="Stars" /></a>
  <a href="issues-url"><img src="https://img.shields.io/github/issues/LucasB25/panaiscard.svg?style=for-the-badge" alt="Issues" /></a>
  <a href="support-server"><img src="https://img.shields.io/discord/942117923001098260.svg?style=for-the-badge&logo=discord&colorB=7289DA" alt="Support Server" /></a>
  <a href="license-url"><img src="https://img.shields.io/github/license/LucasB25/panaiscard.svg?style=for-the-badge" alt="License" /></a>
</p>

---

<h1 align="center">🎵 PanaisCard 🎵</h1>

<p align="center">A powerful Node.js package to generate stunning music cards for Discord bots</p>

## 🚀 Installation

```sh
# Using npm
npm install panaiscard

# Using yarn
yarn add panaiscard
```

## 🎨 Features
- Generate beautiful music cards effortlessly
- Multiple themes to choose from
- Fully customizable options (background, colors, text, etc.)
- Ideal for Discord bots and web applications

---

## 📌 Basic Usage

```js
const { Classic } = require('panaiscard');
const fs = require('fs');

Classic({}).then(imageBuffer => {
    fs.writeFileSync('output.png', imageBuffer);
});
```

## 🤖 Discord Bot Integration

```js
const { Classic } = require("panaiscard");
const fs = require("fs");

const panaiscard = await Classic({});

return message.channel.send({
    files: [{ attachment: panaiscard }]
});
```

## 🎭 Custom Background Support

```js
const { Classic } = require('panaiscard');
const fs = require('fs');

Classic({
    thumbnailImage: 'https://example.com/thumbnail.png',
    backgroundImage: 'https://example.com/background.png',
    imageDarkness: 60,
    nameColor: '#DC92FF',
    progressColor: '#DC92FF',
    progressBarColor: '#2B2B2B',
    progress: 50,
}).then(imageBuffer => {
    fs.writeFileSync('output.png', imageBuffer);
});
```

## 🎨 Available Themes

### 🔹 Classic
![classic](images/Classic.png)

```js
const { Classic } = require('panaiscard');
const fs = require('fs');

const panaiscard = await Classic({
    thumbnailImage: 'https://example.com/image.png',
    backgroundColor: '#070707',
    progress: 10,
    progressColor: '#FF7A00',
    name: 'Song Title',
    author: 'Artist Name',
});

fs.writeFileSync('panaiscard.png', panaiscard);
```

### 🔹 Dynamic
![dynamic](https://ik.imagekit.io/LucasB25/Dynamic.svg)

```js
const { Dynamic } = require('panaiscard');
const fs = require('fs');

const panaiscard = await Dynamic({
    thumbnailImage: 'https://example.com/image.png',
    backgroundColor: '#070707',
    progress: 10,
    progressColor: '#FF7A00',
    name: 'Song Title',
    author: 'Artist Name',
});

fs.writeFileSync('panaiscard.png', panaiscard);
```

### 🔹 Mini
![mini](https://ik.imagekit.io/LucasB25/Mini.svg)

```js
const { Mini } = require('panaiscard');
const fs = require('fs');

const panaiscard = await Mini({
    thumbnailImage: 'https://example.com/image.png',
    backgroundColor: '#070707',
    progress: 10,
    menuColor: '#FF7A00',
});

fs.writeFileSync('panaiscard.png', panaiscard);
```

## 🎯 Upcoming Features
Stay tuned for more themes and customization options! 🚀

## 🤝 Contributing
Want to improve PanaisCard? Follow these steps:

1. Fork the repository
2. Create a new feature branch
3. Implement your changes with proper documentation
4. Submit a pull request

## 💖 Contributors

Thanks to these amazing contributors:

<a href="https://github.com/LucasB25/panaiscard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LucasB25/panaiscard" />
</a>

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](license-url) file for details.

## 🌍 Community & Support
Join our Discord server for support and discussions:

[![Support Server](https://img.shields.io/discord/942117923001098260.svg?style=for-the-badge&logo=discord&colorB=7289DA)](https://discord.gg/nvcznzhkTF)


[npm-url]: https://img.shields.io/github/package-json/v/LucasB25/panaiscard?style=for-the-badge
[contributors-url]: https://github.com/LucasB25/panaiscard/graphs/contributors
[forks-url]: https://github.com/LucasB25/panaiscard/network/members
[stars-url]: https://github.com/LucasB25/panaiscard/stargazers
[issues-url]: https://github.com/LucasB25/panaiscard/issues
[license-url]: https://github.com/LucasB25/panaiscard/blob/mains/LICENSE
[support-server]: https://discord.gg/nvcznzhkTF