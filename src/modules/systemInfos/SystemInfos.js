import React from 'react'
import {Table} from 'antd'

import {columns} from './shared/SystemInfosGrid'

const metricksData = require('datas/metrics.json')

export const SystemInfos = () => {
  console.log(metricksData)
  const dataSource = metricksData.map((data) => {
    const key = data.time
    return {...data, key: key}
  })

  console.log(dataSource)
  return (
    <>
      'coucou system'
      <Table dataSource={dataSource} columns={columns} bordered/>
    </>
  )
}



//export default (withTranslation('productOffer')(ProductOfferPricePeriodPageList)
export default SystemInfos
