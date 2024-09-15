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

### `indieCMS.getPosts()`

Retrieves a list of all blog posts from the IndieCMS API.

```typescript
const posts = await indieCMS.getPosts();
console.log(posts);
```

### `indieCMS.createPost(post: Post)`

Creates a new blog post using the IndieCMS API.

```typescript
const newPost = await indieCMS.createPost({
  title: "New Post",
  content: "This is the content of the new post.",
});
console.log(newPost);
```

### `indieCMS.updatePost(postId: string, post: Post)`

Updates an existing blog post using the IndieCMS API.

```typescript
const updatedPost = await indieCMS.updatePost("post-id", {
  title: "Updated Post",
  content: "This is the updated content of the post.",
});
console.log(updatedPost);
```

### `indieCMS.deletePost(postId: string)`

Deletes a blog post using the IndieCMS API.

```typescript
await indieCMS.deletePost("post-id");
```

## License

This project is licensed under the MIT License.
