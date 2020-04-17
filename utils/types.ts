export type PostData = {
  id: number
  title: string
  excerpt: string
  date: string
  slug?: string
  content?: string
}

export type PostsData = {
  data: {
    allPosts: PostData[]
  }
}

export type SinglePostData = {
  data: {
    post: PostData
  }
}

export type AboutData = {
  data: {
    post: {
      id: number
      content: string
    }
  }
}

export type ApolloData = {
  Component: any
  pageProps: any
  apollo: any
}
