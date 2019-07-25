import React from 'react'
import {Table} from 'antd'
import moment from 'moment'

import CardGrid from 'components/card/CardGrid'
import {system, network, memory, cpu, loadAverage, onDisk} from './shared/SystemInfosData'
import SystemInfosForm from './shared/SystemInfosForm'
import {columnsWithoutParent} from './shared/SystemInfosGrid'

import './systemInfos.css'

const metricksData = require('datas/metrics.json')

class SystemInfosFiltered extends React.Component {
  state = {
    filterTableDisplay: false,
    newColumns: []
  }

  submitSearch = (value) => {
    let newCols = []
    let newDataSource = metricksData.map((data) => {
      const key = data.time
      return {...data, key: key}
    })

    if (value.param === '') {
      return this.setState({
        filterTableDisplay: false,
        newColumns: newCols
      })
    }

    newCols = columnsWithoutParent.filter((data) => data.key === value.param || data.key === 'time')

    if(value.dateStart !== '' && value.dateEnd !== '') {
      const dateStart = moment(value.dateStart, 'DD-MM hh:mm:ss')
      const dateEnd = moment(value.dateEnd, 'DD-MM hh:mm:ss')
      newDataSource = newDataSource.filter((data) => moment(data.time, 'DD-MM hh:mm:ss').isBetween(dateStart, dateEnd) )
    }

    return this.setState({
      filterTableDisplay: true,
      newColumns: newCols,
      dataSource: newDataSource
    })
  }

  searchLastData = (data, key) => {
    const dataSourceSort = data.sort(function(a, b) {
      if(a.key !== -1 && b.key !== -1 && a[`${key}`] != null) {
        return a[`${key}`].localeCompare(b[`${key}`])
      }
      return -1;
    })
    const reverseData = dataSourceSort.reverse()
    return reverseData[0]
  }

  render() {
    console.log('render')

    const lastData = this.searchLastData(metricksData, 'time')

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


        <h2>Filter</h2>
        <SystemInfosForm submitSearch={this.submitSearch} />

        {this.state.filterTableDisplay
          ?
          <Table
            dataSource={this.state.dataSource}
            columns={this.state.newColumns}
            bordered
            pagination={{
              pageSizeOptions: ['10', '20', '100', '200'],
              showSizeChanger: true,
              defaultPageSize: 10,
            }}
          />
          : ''
        }

      </>
    )
  }

}



export default SystemInfosFiltered
