import React from 'react'
import {Table} from 'antd'
import moment from 'moment'
import {
  AreaChart, XAxis, YAxis, Area,
} from 'recharts'

import CardGrid from 'components/card/CardGrid'
import {system, network, memory, cpu, loadAverage, onDisk} from './shared/SystemInfosData'
import SystemInfosForm from './shared/SystemInfosForm'
import {columnsWithoutParent} from './shared/SystemInfosGrid'

import './systemInfos.css'

const metricksData = require('datas/metrics.json')

class SystemInfosFiltered extends React.Component {
  state = {
    filterTableDisplay: false,
    newColumns: [],
    dataSource: [],
    average: 0,
    dataGraph: [],
}

  submitSearch = (value) => {
    let newCols = []
    let dataGraph = []
    let average = 0
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

    if(newDataSource.length > 0 ) {
      average = (newDataSource.map(obj => obj[`${value.param}`]).reduce((acc, current) => acc + current)/newDataSource.length)
    }

    for(const row of newDataSource) {
      dataGraph.push({
        date: moment(row.time, 'DD-MM hh:mm:ss').valueOf(),
        dateFormat: row.time,
        parameter: row[`${value.param}`],
      })
    }

    return this.setState({
      filterTableDisplay: true,
      newColumns: newCols,
      dataSource: newDataSource,
      average: Math.round(average),
      dataGraph: dataGraph
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
          <>
            <div className="importantDatas">
              <p>Average: <strong>{this.state.average}</strong></p>
            </div>
            <AreaChart
                width={window.innerWidth-100}
                height={400}
                margin={{
                  top: 10, right: 30, left: 0, bottom: 0,
                }}
                data={this.state.dataGraph}
              >
                <XAxis
                  dataKey="date"
                  domain = {['auto', 'auto']}
                  scale="time" type="number"
                  tickFormatter={(tick) => moment(tick).format('DD-MM HH:mm:ss')}
                />
                <YAxis />
                <Area dot={{ color: 'white', stroke: 'black', strokeWidth: 1}} dataKey="parameter" />
            </AreaChart>
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
          </>
          : ''
        }
      </>
    )
  }
}

export default SystemInfosFiltered
