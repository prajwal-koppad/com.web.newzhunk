export interface INewsModel {
    articles: IArticles[],
    totalArticles: number
}

export interface IArticles {
    image: string,
    description: string,
    content: string,
    publishedAt: Date,
    title: string,
    url: string,
    source: ISource
}

export interface ISource {
    name: string,
    url: string
}