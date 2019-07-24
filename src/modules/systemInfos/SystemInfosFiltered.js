import React from 'react'

import CardGrid from 'components/card/CardGrid'
import {system, network, memory, cpu, loadAverage, onDisk} from './shared/SystemInfosData'

import './systemInfos.css'

const metricksData = require('datas/metrics.json')

export const SystemInfosFiltered = () => {

  const searchLastData = (data, key) => {
    const dataSourceSort = data.sort(function(a, b) {
      if(a.key !== -1 && b.key !== -1 && a[`${key}`] != null) {
        return a[`${key}`].localeCompare(b[`${key}`])
      }
      return -1;
    })
    const reverseData = dataSourceSort.reverse()
    return reverseData[0]
  }


  const lastData = searchLastData(metricksData, 'time')

  return (
    <>
      <h1>Last info</h1>
      <div className="lastInfo">
        <CardGrid
          data={system(lastData)}
        />

        <CardGrid
          data={cpu(lastData)}
        />
        <CardGrid
          data={memory(lastData)}
        />
        <CardGrid
          data={network(lastData)}
        />

        <CardGrid
          data={loadAverage(lastData)}
        />
        <CardGrid
          data={onDisk(lastData)}
        />
      </div>
    </>
  )
}



export default SystemInfosFiltered
