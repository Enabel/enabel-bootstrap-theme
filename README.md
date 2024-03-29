# Enabel Bootstrap Theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/651787fc-956d-4f54-819d-8e08adcccea0/deploy-status)](https://app.netlify.com/sites/enabel-bootstrap-theme/deploys)

A Bootstrap version 5 Enabel look-and-feel featuring:

- Compatibility with pure Bootstrap markup
- A few custom element:
  - `btn-enabel` button with Enabel logo (extends .btn & .btn-primary)
  - `btn-outline-enabel` button with Enabel logo (extends .btn & .btn-outline-primary)
- Source SCSS files are included in the distribution, allowing local customizations
- Supports NPM, Yarn and Bower package manager integration
- Includes sample HTML pages and common components like navbar and cards for quick setup

## Documentation

[Demonstrations of this theme](https://enabel-bootstrap-theme.netlify.app/)

## Theme Developers

If you find yourself wanting to enhance or fix the theme you'll be interested reading this
section on how to setup this source on your local device.

First, we do accept pull requests and will promptly merge fixes or enhancements if they
make sense for the rest of the relying applications. Note, you should probably check out
our issues and/or raise an issue before doing the pull request.

### Tools Setup

You'll need the following tools installed on your device to begin working on the theme:

- [NodeJS 16.x](https://nodejs.org/en/) or greater with NPM or greater to build

### First Install

After your tools are in place, you should clone and install some packages:

```bash
git clone git@github.com:enabl/enabel-bootstrap-theme.git
cd enabel-bootstrap-theme
yarn install
```

### Building Dist

This project has been created using webpack-cli. To build the styles, Javascript and other assets, use:

```bash
yarn build
```

This will create a directory named dist. Webpack will generate minified js and css code as well as bring over all assets and sass code.

### Preview

This project also contains a [astro](https://astro.build) project to preview the theme:

```bash
yarn dev
```

### Deploying Dist

To package up dist for deployment you can use the following command at the root level of the project:

```bash
yarn pack
```

### About

Originally designed by [Damien Lagae][1]. If you have any questions, please contact [Damien Lagae][1].

[1]: mailto:damien.lagae@enabel.be
