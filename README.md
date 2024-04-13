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


## Disclaimers

### Version Variability

**All packages used in this template are tagged with the *`latest`* flag.** This means the versions installed may vary over time. If a package introduces a breaking change that is not yet accommodated in this template, it may affect functionality. Consider specifying more stable version numbers in your `package.json` to mitigate this risk.

### Operating System Compatibility
**Commands in this template are designed for *`Linux`* environments.** Windows users might encounter issues, particularly with commands like `yarn clean` that use `rm -rf`. To adapt:
- Install `rimraf` using your preffered package manager
- Replace `rm -rf` in the `clean` script with `rimraf`.


# Contributions
Read about how to contribute [here](https://github.com/suparthghimire/Express-API-Typescript-Template/blob/main/CONTRIBUTING.md)

# Frequently Asked Questions (FAQ)

### Why choose `yarn` over `pnpm` or `bun`?
**Yarn vs. Pnpm**: On my system, `pnpm` performs slower—likely due to my HDD setup versus SSD. Yarn provides a faster experience.
**Yarn vs. Bun**: I prefer to use more established tools in production environments. Bun looks promising, but time will tell whether it is stable or not.

### Why use this template instead of NestJS?
**Template vs. Framework**: Unlike NestJS, which is a comprehensive framework, this project serves as a lightweight template. It allows developers to build scalable APIs without the constraints of a full framework, offering more flexibility.

### How do I run tests?
**Testing**: Test integration is in progress and will be available soon. This will allow for robust validation of your application's functionalities.

### Can I use this template without giving credit?
**Licensing**: This template is released under the MIT license. You are free to use it in any of your projects without attribution.

### How to use this template from GitHub?
**Creating Your Project**:
- Click the `Use as Template` button located at the top left of the GitHub repository page.
- Follow the prompts to create a new repository from this template or explore other options like opening in a Codespace.


