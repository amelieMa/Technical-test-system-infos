import {nbSort, dateSort} from 'components/table/functionSort'

const bytesFormat = (color, data) => {
  if(color === null) {
    return {children: `${data} bytes`}
  }

  return {
    props: {
      style: { background: (data === undefined) ? 'red' : color },
    },
    children: (data === undefined) ? '' : `${data} bytes`
  }
}

const percentFormat = (color, data) => {
  if(color === null) {
    return {children: `${data}%`}
  }
  return {
    props: {
      style: { background: (data === undefined) ? 'red' : color },
    },
    children: (data === undefined) ? '' : `${data}%`
  }
}


export const columns = [
  {
    title: 'System Time',
    dataIndex: 'time',
    key: 'time',
    defaultSortOrder: 'descend',
    sorter: (a, b) => {
      return dateSort(a, b, 'time')
    }
  },
  {
    title: 'Number of files',
    dataIndex: 'files',
    key: 'files',
    sorter: (a, b) => {
      return nbSort(a, b, 'files')
    }
  },
  {
    title: 'Number of inodes',
    dataIndex: 'inodes',
    key: 'inodes',
    sorter: (a, b) => {
      return nbSort(a, b, 'inodes')
    }
  },
  {
    key: 'network',
    title: 'Network',
    children: [
      {
        title: 'Received',
        dataIndex: 'recv',
        key: 'recv',
        sorter: (a, b) => {
          return nbSort(a, b, 'recv')
        },
        render: (data) => bytesFormat('#9dc9e0', data)
      },
      {
        title: 'Sended',
        dataIndex: 'send',
        key: 'send',
        sorter: (a, b) => {
          return nbSort(a, b, 'send')
        },
        render: (data) => bytesFormat('#9dc9e0', data)
      }
    ]
  },
  {
    key: 'memory',
    title: 'Memory',
    children: [
      {
        title: 'Used',
        dataIndex: 'used',
        key: 'used',
        sorter: (a, b) => {
          return nbSort(a, b, 'used')
        },
        render: (data) => bytesFormat('#faf0e6', data)
      },
      {
        title: 'Buff',
        dataIndex: 'buff',
        key: 'buff',
        sorter: (a, b) => {
          return nbSort(a, b, 'buff')
        },
        render: (data) => bytesFormat('#faf0e6', data)
      },
      {
        title: 'Cach',
        dataIndex: 'cach',
        key: 'cach',
        sorter: (a, b) => {
          return nbSort(a, b, 'cach')
        },
        render: (data) => bytesFormat('#faf0e6', data)
      },
      {
        title: 'Free',
        dataIndex: 'free',
        key: 'free',
        sorter: (a, b) => {
          return nbSort(a, b, 'free')
        },
        render: (data) => bytesFormat('#faf0e6', data)
      }
    ]
  },
  {
    key: 'cpu',
    title: 'CPU',
    children: [
      {
        title: 'Used',
        dataIndex: 'usr',
        key: 'usr',
        sorter: (a, b) => {
          return nbSort(a, b, 'usr')
        },
        render: (data) => percentFormat('#a5d152', data)
      },
      {
        title: 'Sys',
        dataIndex: 'sys',
        key: 'sys',
        sorter: (a, b) => {
          return nbSort(a, b, 'sys')
        },
        render: (data) => percentFormat('#a5d152', data)
      },
      {
        title: 'Idl',
        dataIndex: 'idl',
        key: 'idl',
        sorter: (a, b) => {
          return nbSort(a, b, 'idl')
        },
        render: (data) => percentFormat('#a5d152', data)
      },
      {
        title: 'Wai',
        dataIndex: 'wai',
        key: 'wai',
        sorter: (a, b) => {
          return nbSort(a, b, 'wai')
        },
        render: (data) => percentFormat('#a5d152', data)
      },
      {
        title: 'Hiq',
        dataIndex: 'hiq',
        key: 'hiq',
        sorter: (a, b) => {
          return nbSort(a, b, 'hiq')
        },
        render: (data) => percentFormat('#a5d152', data)
      },
      {
        title: 'Siq',
        dataIndex: 'siq',
        key: 'siq',
        sorter: (a, b) => {
          return nbSort(a, b, 'siq')
        },
        render: (data) => percentFormat('#a5d152', data)
      }
    ]
  },
  {
    key: 'load',
    title: 'Load average',
    children: [
      {
        title: 'last minute',
        dataIndex: '1m',
        key: '1m',
        sorter: (a, b) => {
          return nbSort(a, b, '1m')
        },
        render: (data) => percentFormat('#ff9a8f', data)
      },
      {
        title: 'last 5 minutes',
        dataIndex: '5m',
        key: '5m',
        sorter: (a, b) => {
          return nbSort(a, b, '5m')
        },
        render: (data) => percentFormat('#ff9a8f', data)
      },
      {
        title: 'last 15 minutes',
        dataIndex: '15m',
        key: '15m',
        sorter: (a, b) => {
          return nbSort(a, b, '15m')
        },
        render: (data) => percentFormat('#ff9a8f', data)
      },
    ]
  },
  {
    title: 'Read bytes on disk',
    dataIndex: 'read',
    key: 'read',
  },
  {
    title: 'Write bytes on disk',
    dataIndex: 'writ',
    key: 'writ',
  },
]
