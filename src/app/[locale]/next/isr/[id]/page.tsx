// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

const getIdList = (): Promise<{ id: string }[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const list = Array.from({ length: 3 }, (_, i) => ({ id: `${i + 1}` }))
      resolve(list)
    }, 1000)
  })
}

const getDataById = (id: string): Promise<{ title: string; content: string }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (id === '1') {
        resolve({ title: '一号文章', content: '一号文章的内容' })
      }
      if (id === '2') {
        resolve({ title: '二号文章', content: '二号文章的内容' })
      }
      if (id === '3') {
        resolve({ title: '三号文章', content: '三号文章的内容' })
      }
    }, 1000)
  })
}

export async function generateStaticParams() {
  const posts: { id: string }[] = await getIdList()
  console.log('generateStaticParams', posts)
  return posts
}

export default async function ISRPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const post: { title: string; content: string } = await getDataById(id)
  console.log('ISRPage', id, post)
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
