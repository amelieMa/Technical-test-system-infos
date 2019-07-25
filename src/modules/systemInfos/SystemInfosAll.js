import React from 'react'
import {Table} from 'antd'

import {columns} from './shared/SystemInfosGrid'

import './systemInfos.css'

const metricksData = require('datas/metrics.json')

export const SystemInfosAll = () => {
  const dataSource = metricksData.map((data) => {
    const key = data.time
    return {...data, key: key}
  })

  return (
    <>
      <h1>All data</h1>
      <Table
        scroll={{ x: 2200 }}
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={{
          pageSizeOptions: ['10', '20', '100', '200'],
          showSizeChanger: true,
          defaultPageSize: 10,
        }}
      />
    </>
  )
}

export default SystemInfosAll
