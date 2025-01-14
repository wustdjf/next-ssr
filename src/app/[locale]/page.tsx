'use client'
import { Button } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className={styles.page}>
        <Button type='primary' onClick={() => router.push('/next/csr')}>
          CSR例子
        </Button>
        <Button type='primary' style={{ marginLeft: 10 }} onClick={() => router.push('/next/ssr')}>
          SSR例子
        </Button>
        <Button type='primary' style={{ marginLeft: 10 }} onClick={() => router.push('/next/ssg')}>
          SSG例子
        </Button>
        <Button type='primary' style={{ marginLeft: 10 }} onClick={() => router.push('/next/isr')}>
          ISR例子
        </Button>
      </div>
      <ul>
        <li>
          <Link href='/next/isr/1'>ID: 1</Link>
        </li>
        <li>
          <Link href='/next/isr/2'>ID: 2</Link>
        </li>
        <li>
          <Link href='/next/isr/3'>ID: 3</Link>
        </li>
      </ul>
    </>
  )
}
