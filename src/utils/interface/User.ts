export interface User {
    html_url: string;
    blog: string;
    bio: string | undefined;
    id: number,
    login: string,
    avatar_url: string,
    link_to_github?: string,
    name: string,
    company: string,
    location: string,
    email: string,
    linkedin_url?: string,
    public_repos: number,
    followers: number,
}
