# IndieCMS API client

IndieCMS API client is a TypeScript library for interacting with the IndieCMS API. It provides a simple and intuitive interface for managing blog posts through the IndieCMS platform.

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
});
```

### `deletePost(id: string)`

Deletes a blog post by its ID.

```typescript
await indieCMS.deletePost("your-post-id");
```

## License

This project is licensed under the MIT License.
