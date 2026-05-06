export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React in 2025",
    excerpt:
      "Learn the fundamentals of React and build your first component-driven UI with hooks, state, and JSX.",
    content: `React has transformed the way developers build user interfaces. By breaking the UI into reusable components, React makes code easier to reason about, test, and maintain.

## Why React?

React's declarative approach means you describe *what* you want the UI to look like, and React figures out *how* to update the DOM efficiently using its virtual DOM diffing algorithm.

## Core Concepts

**Components** are the building blocks of React apps. A component is just a function that returns JSX — a syntax extension that looks like HTML but is actually JavaScript.

**State** allows components to remember information between renders. The \`useState\` hook gives you a state variable and a setter function:

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

**Props** let you pass data down from parent to child components, keeping your data flow predictable and easy to trace.

## Getting Started

Use Vite to scaffold a new React + TypeScript project in seconds, then start building components. The ecosystem around React — including React Router, Zustand, and TanStack Query — covers virtually every use case you'll encounter.

The best way to learn React is to build something real. Start small, iterate fast, and enjoy the process.`,
    author: "Alex Morgan",
    date: "May 1, 2025",
    category: "React",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: 2,
    slug: "typescript-tips-for-beginners",
    title: "TypeScript Tips Every Beginner Should Know",
    excerpt:
      "Supercharge your JavaScript with TypeScript's type system. Here are the most practical tips to get you productive fast.",
    content: `TypeScript adds a static type layer on top of JavaScript, catching bugs before your code ever runs in the browser. Here are the tips that will make you productive immediately.

## Use Type Inference

You don't need to annotate everything. TypeScript is smart enough to infer types from context:

\`\`\`ts
const name = "Alice"; // TypeScript knows this is a string
const nums = [1, 2, 3]; // TypeScript knows this is number[]
\`\`\`

Only add explicit annotations where inference falls short.

## Interfaces vs Types

Both \`interface\` and \`type\` can describe object shapes. Prefer \`interface\` for public API shapes (it's extensible via declaration merging), and \`type\` for unions, intersections, or complex mapped types.

## Avoid \`any\`

Using \`any\` defeats the purpose of TypeScript. If you're unsure about a type, use \`unknown\` instead — it forces you to narrow the type before using it.

## Utility Types

TypeScript ships with powerful built-in utility types:

- \`Partial<T>\` — makes all properties optional
- \`Required<T>\` — makes all properties required
- \`Pick<T, K>\` — selects a subset of properties
- \`Omit<T, K>\` — excludes properties

These save you from writing repetitive type definitions.

## Embrace Strict Mode

Always enable \`"strict": true\` in your \`tsconfig.json\`. The extra checks feel annoying at first but prevent an entire class of runtime bugs.`,
    author: "Jordan Lee",
    date: "April 22, 2025",
    category: "TypeScript",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
  },
  {
    id: 3,
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "Both Grid and Flexbox are powerful layout tools. Understanding their differences will make you a much more effective CSS developer.",
    content: `CSS Grid and Flexbox are both layout systems, but they solve different problems. Knowing when to reach for each one is a core CSS skill.

## Flexbox: One Dimension

Flexbox is designed for **one-dimensional** layouts — either a row or a column. Use it when you need to align items along a single axis:

- Navigation bars
- Button groups
- Centering a single element
- Distributing items evenly in a row

\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Grid: Two Dimensions

Grid is designed for **two-dimensional** layouts — rows *and* columns simultaneously. Use it for:

- Page-level layouts (header, sidebar, main, footer)
- Card grids
- Any layout where you need items to align in both axes

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}
\`\`\`

## The Simple Rule

> Use Flexbox for components. Use Grid for page layout.

In practice they complement each other perfectly — a Grid handles the overall page structure, while Flexbox handles the internals of each component within that grid.

## They Work Together

You can nest Flexbox inside Grid and vice versa. A grid cell can be a flex container, and a flex item can be a grid container. There's no conflict.`,
    author: "Sam Rivera",
    date: "April 10, 2025",
    category: "CSS",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
  },
  {
    id: 4,
    slug: "vite-vs-webpack",
    title: "Vite vs Webpack: The Modern Build Tool Battle",
    excerpt:
      "Vite has rapidly become the go-to build tool for modern web projects. Here's why it's winning and when Webpack still makes sense.",
    content: `Build tools have a massive impact on developer experience. Vite has shaken up the landscape, but Webpack remains the battle-tested giant. Let's compare them honestly.

## The Core Difference

Webpack bundles everything up front — it processes your entire dependency graph before the dev server is ready. Vite takes a fundamentally different approach: it serves source files directly over native ES modules during development, only transforming files on demand.

## Dev Server Speed

This architectural difference makes Vite's dev server near-instant to start, regardless of project size. Webpack's startup time grows with your bundle, which becomes painful in large codebases.

Hot Module Replacement (HMR) is also much faster in Vite because it only updates the changed module, not the entire bundle.

## Production Builds

For production, Vite uses Rollup under the hood, producing highly optimized, tree-shaken bundles. Webpack is more configurable here, with a mature plugin ecosystem covering every edge case.

## When to Use Vite

- New projects
- Standard React, Vue, or Svelte apps
- Teams that value fast feedback loops

## When Webpack Still Wins

- Legacy projects already on Webpack with heavy customization
- Micro-frontend architectures with Module Federation
- Edge cases requiring Webpack-specific plugins

For most new projects today, Vite is the clear choice.`,
    author: "Alex Morgan",
    date: "March 28, 2025",
    category: "Tooling",
    readTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
];
