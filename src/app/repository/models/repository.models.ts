export class RepositoryModels {

  constructor(
    public id: number,
    public name: string,
    public full_name: string,
    public description: string,
    public clone_url: string,
    public created_at: string,
    public updated_at: string,
    public pushed_at: string,
    public owner: RepositoryOwner,
    public forks_count: number
  ) {}
}


export class RepositoryOwner {

  constructor(
    public login: string,
    public id: string,
    public avatar_url: string,
    public url: string,
    public followers_url: string,
    public following_url: string,
    public gists_url: string,
  ) {}
}
