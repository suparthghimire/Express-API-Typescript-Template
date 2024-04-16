# API Server Template with Express and Typescript

This project is a template for creating an API Server with Express and Typescript. You can use it as a template directly from github by clicking on green button on top left that says "Use as template", or simply fork it, clone it and play with it!

# Packages Out of the box
- 💻 Runtime: `Node JS`
- 💬 Language: `Typescript` 
- 🏭 Compiler: `SWC`
- 🧹 Linting and formatting: `Biome`
- ⚡ HMR: `Nodemon`
- 📝 Logging: `Morgan`
- 📦 Package Manager: `yarn`
- 🏁 Testing Library: `vitest`
- ✅ Validation Library: `zod`

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


## Testing

**Vitest as the Testing Framework**: This template utilizes Vitest for running tests, leveraging its fast and efficient testing capabilities to ensure your application's reliability and stability. Vitest has been chosen for its performance benefits and modern features tailored for JavaScript and TypeScript environments.

**Test Organization**: Tests are organized modularly within the project to simplify testing as the codebase grows. For reference, examples of test suites can be found in the following locations:
- **Express Tests**: Located in the `@/src/express/__tests__` directory, these tests focus on the functionality of the Express server aspects of the application.
- **Module Tests**: Located in the `@/src/modules/template/__tests__` directory, these tests are geared towards verifying the individual modules' functionalities.

**Running Tests**: To run the test suites, use the following command:
```bash
yarn test
```

## Environment Variables

**Strict Environment Validation**: This template uses a strict validation schema for environment variables defined in `src/config/env/index.ts`, implemented using the `zod` library. If your `.env` file does not conform to the expected schema, the application will **crash on startup**. This validation ensures that all necessary environment variables are correctly set before the application begins running, thereby preventing runtime errors related to misconfiguration.

**Consistent Environment Setup**: It is critical for developers to adhere to the schema, particularly when transitioning from development to production environments. This consistency helps prevent environment-related errors in production and maintains uniformity across various setups.

**Flexible Validation**: While `zod` is the default tool for validation in this template, you can substitute it with any validation library that suits your project needs. Should you choose to do so, remember to update the validation logic in `src/config/env/index.ts`. 


**Safe Access to Environment Variables**: To maintain type safety and avoid direct usage of `process.env`, always access environment variables through the validated `env` object as shown below:
```ts
import { env } from "@/config/env";

function SomeFunction() {
    // your code
    console.log(env.someKey); // Access environment variables safely
}
```
> For more reference, see `@/src/index.ts` file

**Disable env check on build**: If environment variable validation is not desired, you can remove the `check-env` script from the `package.json`.


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


### Can I use this template without giving credit?
**Licensing**: This template is released under the MIT license. You are free to use it in any of your projects without attribution.

### How to use this template from GitHub?
**Creating Your Project**:
- Click the `Use as Template` button located at the top left of the GitHub repository page.
- Follow the prompts to create a new repository from this template or explore other options like opening in a Codespace.


