import { NextIntlClientProvider, useMessages } from 'next-intl'
import { use } from 'react'

type Params = Promise<{ locale: string }>

type Props = {
  children: React.ReactNode
  params: Params
}

export default function LocaleLayout({ children, params }: Props) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages()
  const param = use(params)
  const locale = param.locale

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
