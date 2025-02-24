---
title: "Deploying Astro to GitHub Pages"
description: ""
tags: ["astro"]
---

<!--- # Deploying Astro to GitHub Pages --->

Are you looking to host your [Astro](https://docs.astro.build/en/concepts/why-astro/) website on GitHub Pages? This guide will walk you through the process.

One of my favorite concepts in software development is Inversion. It has solved a lot of problems for me over the years. In fact you can [extend the concept](https://www.mayooshin.com/inversion-charlie-munger-billionaire-thinking) outside of software engineering also.

Astro is a modern web development framework that allows developers to create static websites with dynamic features. Developed by the team at [Vercel](https://vercel.com/), Astro uses an innovative concept called "[Islands](https://jasonformat.com/islands-architecture/)" to allow developers to mix and match different web technologies to build performant and flexible websites. Nice, elegant inversion of a basic web concept.

In this article, we will explore how to deploy an Astro static site with GitHub Pages. Astro [documents well how to use GitHub Actions](https://docs.astro.build/en/guides/deploy/github/) to deploy to GitHub Pages. But if that is a bit overkill for your simple static site, building locally and pushing to your repo works just as well with a few tweaks.

### Step 1: Prepare Your Astro Project

Before deploying your Astro project to GitHub Pages, you need to make a few changes to [Astro’s configuration](https://docs.astro.build/en/reference/configuration-reference/). Here are the steps to follow:

- Create an `.nojekyll` file at the root of your project. This file tells GitHub Pages not to process your files with Jekyll.
- Set the `output` property in your `astro.config.mjs` file to `static`.
- Set the `outDir` property in your `astro.config.mjs` file to `docs`. This is where your static files will be generated and served by GitHub Pages. `docs` is an hard GH convention.
- Remove the `_` prefix from the `build:assets` script in your `package.json` file. GitHub Pages build process won’t process any directory or file prefixed with an underscore.

```jsx
// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    tailwind(),
  ],
  site: `https://www.cmsoftdev.com`,
  output: "static",
  outDir: "./docs",
  build: {
    assets: "astro",
  },
});
```

- Add a `/public/.nojekyll` and `/public/astro/.nojekyll` to the Public directory. The [Public](https://docs.astro.build/en/core-concepts/project-structure/#public) directory allows you to transfer files to the output directory without processing.

### Step 2: Build Your Astro Project

After making the necessary changes to your Astro project, use the following command to build it:

```bash
npm run build
```

Verify the correct functioning output in `/docs`.

### Step 3: Deploy Your Astro Project to GitHub Pages

Once your Astro project is built, you can deploy it to GitHub Pages using the following steps:

- Create a new `<username>.github.io` repository on GitHub.
- Initialize a Git repository in your Astro project directory and add your GitHub repository as a remote.
- Commit and push your changes to the `main` branch of your GitHub repository.
- In your GitHub repository settings, navigate to the "[Pages](https://docs.github.com/en/pages/quickstart)" section and set the source to the `main` branch and `/docs` folder.
  - Alternatively, if you want to keep your main branch clean, you can deploy to a `gh-pages` branch (GH convention).
  - This git command will just push your docs output directory: `git subtree push --prefix docs origin gh-pages`
- Click "Save" and wait a few minutes for your site to be available at `https://<username>.github.io`.

And that's it! You've successfully deployed your Astro project to GitHub Pages. Now you can share your site with the world.
