import {
  FundOutlined,
  BarChartOutlined,
  DesktopOutlined,
  ScheduleOutlined,
  PartitionOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import React from 'react'

const getNavList = (t: (val: string) => string) => {
  return [
    {
      key: '/',
      icon: <DesktopOutlined />,
      label: t('next'),
      children: [
        {
          key: '/next/csr',
          icon: <BarChartOutlined />,
          label: t('csr')
        },
        {
          key: '/next/ssr',
          icon: <FundOutlined />,
          label: t('ssr')
        },
        {
          key: '/next/ssg',
          icon: <PieChartOutlined />,
          label: t('ssg')
        },
        {
          key: '/next/isr/1',
          icon: <PartitionOutlined />,
          label: t('isr')
        }
      ]
    },
    {
      key: '/order',
      icon: <ScheduleOutlined />,
      label: t('orderList')
    }
  ]
}

export default getNavList
