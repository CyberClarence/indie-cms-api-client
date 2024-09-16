import { expect, test, describe, beforeAll, afterAll } from "bun:test";
import { IndieCMSClient } from "./index";

const API_KEY = "icms_key_c563d2ae-be39-443a-9014-8581888b53c4";
const client = new IndieCMSClient({ apiKey: API_KEY });

let createdPostId: string;
const newPost = {
  title: "Test Post",
  content: "This is a test post content.",
  tags: ["test", "bun"],
  imgUrl: "https://example.com/test-image.jpg",
  slug: "test-post-" + Date.now(),
};

describe("IndieCMSClient", () => {
  test("should create a new blog post", async () => {
    const response = await client.createBlogPost(newPost);
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.title).toBe(newPost.title);
    expect(response.content).toBe(newPost.content);
    expect(JSON.parse(response.tags_json)).toEqual(newPost.tags);
    expect(response.img_url).toBe(newPost.imgUrl);
    expect(response.slug).toBe(newPost.slug);

    createdPostId = response.id;
  });

  test("should get a blog post by slug", async () => {
    const post = await client.getBlogPost(newPost.slug);
    expect(post).toBeDefined();
    expect(post.id).toBe(createdPostId);
    expect(post.title).toBe(newPost.title);
  });

  test("should list all blog posts", async () => {
    const posts = await client.listBlogPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
    expect(posts.some((post) => post.id === createdPostId)).toBe(true);
  });

  test("should update a blog post", async () => {
    const updatedPost = {
      title: "Updated Test Post",
      content: "This is an updated test post content.",
      tags: ["test", "bun", "updated"],
      imgUrl: "https://example.com/updated-test-image.jpg",
      slug: "updated-test-post-" + Date.now(),
    };

    const response = await client.updateBlogPost(createdPostId, updatedPost);
    expect(response).toBeDefined();
    expect(response.id).toBe(createdPostId);
    expect(response.title).toBe(updatedPost.title);
    expect(response.content).toBe(updatedPost.content);
    expect(JSON.parse(response.tags_json)).toEqual(updatedPost.tags);
    expect(response.img_url).toBe(updatedPost.imgUrl);
    expect(response.slug).toBe(updatedPost.slug);
  });

  test("should delete a blog post", async () => {
    await client.deleteBlogPost(createdPostId);

    // Verify that the post is deleted
    try {
      await client.getBlogPost(createdPostId);
      throw new Error("Post should have been deleted");
    } catch (error: any) {
      expect(error.message).toContain("HTTP error! status: 404");
    }
  });

  test("should handle errors gracefully", async () => {
    try {
      await client.getBlogPost("non-existent-slug");
      throw new Error("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("HTTP error! status: 404");
    }
  });
});
