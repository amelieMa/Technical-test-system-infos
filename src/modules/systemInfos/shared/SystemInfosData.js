export const system = (lastData) => ({
  title: "System",
  color: "#F0F0F0",
  children: [
    {
      title: 'System Time',
      data: lastData.time,
      style: '100%'
    },
    {
      title: 'Number of files',
      data: lastData.files,
      style: '50%'
    },
    {
      title: 'Number of inodes',
      data: lastData.inodes,
      style: '50%'
    }
  ]
})

export const memory = (lastData) => ({
  title: "MEMORY",
  color: "#faf0e6",
  children: [
    {
      title: 'Used',
      data: lastData.used,
      unity: 'bytes'
    },
    {
      title: 'Buff',
      data: lastData.buff,
      unity: 'bytes'
    },
    {
      title: 'Cach',
      data: lastData.cach,
      unity: 'bytes'
    },
    {
      title: 'Free',
      data: lastData.free,
      unity: 'bytes',
      style: '100%'
    }
  ]
})

export const cpu = (lastData) => ({
  title: "CPU",
  color: "#a5d152",
  children: [
    {
      title: 'Used',
      data: `${lastData.usr}%`,
    },
    {
      title: 'Sys',
      data: `${lastData.sys}%`,
    },
    {
      title: 'Idl',
      data: `${lastData.idl}%`,
    },
    {
      title: 'Wai',
      data: `${lastData.wai}%`,
    },
    {
      title: 'Hiq',
      data: `${lastData.hiq}%`,
    },
    {
      title: 'Siq',
      data: `${lastData.siq}%`,
    },
  ]
})

export const network = (lastData) => ({
  title: "NETWORD",
  color: "#9dc9e0",
  children: [
    {
      title: 'Received',
      data: `${lastData['recv']}%`,
      style: '50%'
    },
    {
      title: 'Sended',
      data: `${lastData['send']}%`,
      style: '50%'
    }
  ]
})

export const loadAverage = (lastData) => ({
  title: "LOAD AVERAGE",
  color: "#ff9a8f",
  children: [
    {
      title: 'Last minute',
      data: `${lastData['1m']}%`,
    },
    {
      title: 'last 5 minutes',
      data: `${lastData['5m']}%`,
    },
    {
      title: 'last 15 minutes',
      data: `${lastData['15m']}%`,
    }
  ]
})

export const onDisk = (lastData) => ({
  title: "On disk",
  color: "#ffffff",
  children: [
    {
      title: 'Read',
      data: `${lastData['read']}%`,
      style: '50%'
    },
    {
      title: 'Write',
      data: `${lastData['writ']}%`,
      style: '50%'
    }
  ]
})
