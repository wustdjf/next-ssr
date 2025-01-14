'use client'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function CSRExample() {
  const router = useRouter()

  const [data, setData] = useState<{ value: string; label: string }[]>([])

  const getData = (): Promise<{ value: string; label: string }[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        const list = Array.from({ length: 100 }, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }))
        resolve(list)
      }, 1000)
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData()
      setData(response)
    }

    fetchData()
  }, [])

  return (
    <main style={{ height: '100%', overflow: 'auto' }}>
      <p>数据还未拉取到，界面显示loading效果，等数据返回后，页面内容在客户端进行渲染</p>
      <Button type='primary' onClick={() => router.push('/')}>
        返回首页
      </Button>
      {data.length === 0
        ? 'loading...'
        : data.map((i, j) => <p key={`${j}`}>{`label:${i.label}，value:${i.value}`}</p>)}
    </main>
  )
}
