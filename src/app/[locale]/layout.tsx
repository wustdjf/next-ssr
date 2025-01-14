import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import { use } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { CommonLayout } from '@/components'
import dayjs from 'dayjs'
import { getTranslations } from 'next-intl/server'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import 'dayjs/locale/zh-cn'
import '@ant-design/v5-patch-for-react-19'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'
import './globals.css'

dayjs.locale('zh-cn')

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

type Params = Promise<{ locale: string }>
type Props = {
  children: React.ReactNode
  params: Params
}

const themeToken = {
  token: {
    colorPrimary: '#1677ff',
    colorTextBase: '#232426',
    colorLink: '#1677ff'
  }
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'index' })

  return {
    title: t('title'),
    description: t('desc')
  }
}

export default function RootLayout({ children, params }: Readonly<Props>) {
  const messages = useMessages()
  const param = use(params)
  const locale = param.locale

  return (
    <ConfigProvider locale={zhCN} theme={themeToken}>
      <html lang='en'>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <CommonLayout curActive='/'>
              <AntdRegistry>{children}</AntdRegistry>
            </CommonLayout>
          </NextIntlClientProvider>
        </body>
      </html>
    </ConfigProvider>
  )
}
