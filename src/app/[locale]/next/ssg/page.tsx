'use client'
// import { useTranslations} from 'next-intl';
import { Empty, Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Order() {
  const router = useRouter()
  return (
    <main style={{ minHeight: 'calc(100vh - 260px)' }}>
      <Empty image='/landing.svg' style={{ height: 410, paddingTop: 160 }} description={'正在建设中......'}>
        <Button type='primary' onClick={() => router.push('/')}>
          返回首页
        </Button>
      </Empty>
    </main>
  )
}
