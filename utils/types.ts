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

export type SiteData = {
  data: {
    _site: {
      globalSeo: {
        siteName: string
        fallbackSeo: {
          description: string
          image: {
            url: string
          }
          twitterAccount: string
        }
      }
    }
  }
}

export type DateData = {
  dateTime: string
}
