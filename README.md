# IndieCMS API client

IndieCMS API client is a TypeScript library for interacting with the API of the headless CMS [IndieCMS.io](https://indiecms.io). It provides a simple and intuitive interface for managing blog posts through the IndieCMS platform.

## 🎨 New: Landing Page & Design System

This project now includes a **modern, fully responsive landing page** and a comprehensive **design system**:

- **[View Landing Page](landing/index.html)** - Showcase page with interactive features
- **[Design Guidelines](DESIGN_GUIDELINES.md)** - Complete design system documentation
- **[Design Tokens](design-system/tokens.css)** - Reusable design variables

The landing page features a clean, developer-focused design with:
- Interactive code examples
- Smooth animations
- Mobile-responsive layout
- Accessibility features (WCAG AA compliant)
- Modern color palette (purple/blue gradient theme)

## Installation

You can install the IndieCMS API client using npm:

```bash
bun install @cyberclarence/indie-cms
```

## Usage

To use the IndieCMS API client in your project, you need to import the library and initialize the client with your API key and secret.

```typescript
import IndieCMS from "@cyberclarence/indie-cms";

const indieCMS = new IndieCMS({
  apiKey: "your-api-key",
});
```

## Methods

### `listPosts()`

Retrieves a list of all blog posts for the authenticated project.

```typescript
const posts = await indieCMS.listPosts();
```

### `getPost(slug: string)`

Retrieves a single blog post by its slug.

```typescript
const post = await indieCMS.getPost("your-post-slug");
```

### `createPost(post: Post)`

Creates a new blog post.

```typescript
const newPost = await indieCMS.createPost({
  title: "New Post",
  content: "This is the content of the new post.",
  tags: ["tag1", "tag2"],
  imgUrl: "https://example.com/image.jpg",
  slug: "new-post",
  description: "This is the description of the new post.",
});
```

### `updatePost(id: string, post: Post)`

Updates an existing blog post by its ID.

```typescript
const updatedPost = await indieCMS.updatePost("your-post-id", {
  title: "Updated Post",
  content: "This is the updated content of the post.",
  tags: ["tag1", "tag3"],
  imgUrl: "https://example.com/updated-image.jpg",
  slug: "updated-post",
  description: "This is the updated description of the post.",
});
```

### `deletePost(id: string)`

Deletes a blog post by its ID.

```typescript
await indieCMS.deletePost("your-post-id");
```

## License

This project is licensed under the MIT License.
