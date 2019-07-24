export const nbSort = (a, b, data) => {
  if(a.key !== -1 && b.key !== -1) {
    const Adata = (a[`${data}`] !== undefined) ? a[`${data}`] : 0
    const Bdata = (b[`${data}`] !== undefined) ? b[`${data}`] : 0
    return Adata - Bdata
  }
}

export const dateSort = (a, b, data) => {
  if(a.key !== -1 && b.key !== -1 && a[`${data}`] != null) {
    return a[`${data}`].localeCompare(b[`${data}`])
  }
}
