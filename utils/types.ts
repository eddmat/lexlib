export type PostData = {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
}

export type PostsData = {
  data: {
    allPosts: PostData[]
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

export type SinglePostData = {
  data: {
    post: {
      id: number
      title: string
      excerpt: string
      date: string
      content: string
    }
  }
}
