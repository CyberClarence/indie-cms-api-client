type BlogPost = {
  title: string;
  content: string;
  tags: string[];
  imgUrl: string;
  slug: string;
};

export class IndieCMSClient {
  private apiKey: string;
  private baseUrl: string;
  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.indiecms.io";
  }

  private async fetchWithAuth(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "Indie-API-Key": this.apiKey,
      ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async getBlogPost(slug: string): Promise<BlogPost> {
    return this.fetchWithAuth(`/${slug}`);
  }

  async createBlogPost(blogPost: BlogPost): Promise<BlogPost> {
    return this.fetchWithAuth("/", {
      method: "POST",
      body: JSON.stringify(blogPost),
    });
  }

  async updateBlogPost(
    id: string,
    blogPost: Partial<BlogPost>
  ): Promise<BlogPost> {
    return this.fetchWithAuth(`/${id}`, {
      method: "POST",
      body: JSON.stringify(blogPost),
    });
  }

  async listBlogPosts(): Promise<BlogPost[]> {
    return this.fetchWithAuth("/list");
  }
}
