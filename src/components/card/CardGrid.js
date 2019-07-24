import React from 'react'
import {Card} from 'antd'


import './cardGrid.css'

const CardGrid = ({data}) => {

  return (
    <div className="CardGrid" style={{backgroundColor: data.color}}>
      <Card title={data.title}>
        {Object.values(data.children).map(
          (elem) => {
            return (
              <Card.Grid className="CardGrid_item" style={{width: elem.style}} >
                <pre>{elem.title}</pre>
                <strong>
                  {elem.data} {(elem.unity !== undefined) ? <small>{elem.unity}</small> : ''}
                </strong>
              </Card.Grid>
            )
          }
        )}
      </Card>
    </div>
  )
}


export default CardGrid
