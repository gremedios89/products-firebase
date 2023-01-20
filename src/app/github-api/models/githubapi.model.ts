import { GithubIssue } from "./githubissue.model";

export interface GithubApi {
    items: GithubIssue[];
    total_count: number;
}