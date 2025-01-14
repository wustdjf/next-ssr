const getData = (): Promise<{ value: string; label: string }[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const list = Array.from({ length: 100 }, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }))
      resolve(list)
    }, 10000)
  })
}

export default async function SSRExample() {
  const data = await getData()

  return (
    <main style={{ height: '100%', overflow: 'auto' }}>
      <p>
        服务端渲染；页面渲染工作主要在服务端执行。服务端将完整的静态 HTML
        页面发送到客户端之前会预先生成它们，从而加快内容渲染速度。因此，呈现页面所需的 JS
        不会被发送到客户端，这样也可以避免额外的网络请求来获取呈现页面的内容。
      </p>

      {data.length === 0
        ? 'loading...'
        : data.map((i, j) => <p key={`${j}`}>{`label:${i.label}，value:${i.value}`}</p>)}
    </main>
  )
}
