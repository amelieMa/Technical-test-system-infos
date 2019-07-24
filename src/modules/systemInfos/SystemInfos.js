import React from 'react'
import {Table} from 'antd'

import {columns} from './shared/SystemInfosGrid'

import './systemInfos.css'


const metricksData = require('datas/metrics.json')

export const SystemInfos = () => {

  const dataSource = metricksData.map((data) => {
    const key = data.time
    return {...data, key: key}
  })

  return (
    <>
      'coucou system'
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



//export default (withTranslation('productOffer')(ProductOfferPricePeriodPageList)
export default SystemInfos
