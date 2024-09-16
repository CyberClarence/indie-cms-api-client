type BlogPost = {
  title: string;
  content: string;
  tags: string[];
  imgUrl: string;
  slug: string;
};

type InputBlogPost = {
  title: string;
  content: string;
  tags: string[];
  imgUrl: string;
  slug: string;
};

type ResponseBlogPost = {
  id: string;
  title: string;
  content: string;
  tags_json: string;
  img_url: string;
  slug: string;
  created_at: number;
  updated_at: number;
  project_id: string;
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

    const response = await fetch(url, {
      ...options,
      headers,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  async getBlogPost(slug: string): Promise<ResponseBlogPost> {
    return this.fetchWithAuth(`/${slug}`);
  }

  async createBlogPost(blogPost: InputBlogPost): Promise<ResponseBlogPost> {
    return this.fetchWithAuth("/", {
      method: "POST",
      body: JSON.stringify(blogPost),
    });
  }

  async updateBlogPost(
    id: string,
    blogPost: Partial<InputBlogPost>
  ): Promise<ResponseBlogPost> {
    return this.fetchWithAuth(`/${id}`, {
      method: "POST",
      body: JSON.stringify(blogPost),
    });
  }

  async listBlogPosts(): Promise<ResponseBlogPost[]> {
    return this.fetchWithAuth("/list");
  }

  async deleteBlogPost(id: string): Promise<void> {
    await this.fetchWithAuth(`/${id}`, {
      method: "DELETE",
    });
  }
}
