# API Server Template with Express and Typescript

This project is a template for creating an API Server with Express and Typescript. You can use it as a template directly from github by clicking on green button on top left that says "Use as template", or simply fork it, clone it and play with it!

# Packages Out of the box
- 💻 Runtime: Node JS
- 💬 Language: Typescript 
- 🏭 Compiler: SWC
- 🧹 Linting and formatting: Biome
- ⚡ HMR: NodemonA
- 📝 Logging: Morgan
- 📦 Package Manager: yarn

# Run

1. **Install packages**
```bash
yarn
```

2. **Add .env**

```bash
cp .env.example .env
```

3. **Build**
```bash
yarn build
```

4. **Start Server**
```bash
yarn start
```

5. **Start HMR**

```bash
yarn dev
```


> Disclaimar 1 : All packages used here are marked with `latest` flag, meaning the versions installed in your system at the time being might vary. This can mean if any breaking change has been introduced in these packages which hasn't been addressed in this template, might cause the template to not function properly.

> Disclaimer 2: Commands below are setup for linux. If you are using this template in other OSs, you might need some changes. For example: `yarn clean` in windows will crash as `rm -rf` doesnt work on it. You might need to first install `rmraf` from npm and replace the existing yarn clean command.

# Contributions
Read about how to contribute [here](#)


# Bugs
If you find any bugs/issues, please file an issue in [issues](https://github.com/suparthghimire/Express-API-Typescript-Template/issues/new) tab
 

# FAQ
1. **Why use `yarn` and not `pnpm` or `bun`?**
- `pnpm` on my PC has always been slow (probably because my code resides in HDD instead of SSD). `yarn` has always worked and is faster on my PC, thus `yarn`. You can replace `yarn` with `pnpm` easily if you want. For `bun`, I think it needs more time to be a little bit more mature.

2. **Why use this instead of NestJs?**
- This is not a replacement for Nest. Nest is a framework. This is just a template to write scalable apis without adhering to a framework

3. **How do i test?**
- Tests are comming soon 😅

4. **Can I use it without credit?**
- Yes. This is a template with MIT license. Use it however you want. No credits required.

5. **How do I use this as a template?**
- In github you will see `Use as Template` button on top left. Click on it and choose the option that you want i.e. Either create new repository or open in codespace.



