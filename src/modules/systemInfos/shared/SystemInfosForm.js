import React from 'react'
import { Formik } from 'formik'
import { Form, DatePicker, Button, Select } from 'antd'

import './systemInfosForm.css'

const SystemInfosForm = ({
  submitSearch
}) => {

  const formSubmit = ((values, actions) => {
    submitSearch(values)
  })

  return (
    <Formik
      initialValues={{
        param: '',
        dateStart: '',
        dateEnd: '',
      }}
      onSubmit={(values, actions) => formSubmit(values, actions)}
      render={({
        handleSubmit,
        setFieldValue,
      }) => {
        return (
          <Form className="form" onSubmit={handleSubmit}>
            <label>Please select parameter :</label>
            <Select
              name={'param'}
              className="form_select form_element"
              placeholder="Parameters"
              onChange={(value) => setFieldValue('param', value)}
            >
              <Select.Option value="files">files</Select.Option>
              <Select.Option value="inodes">inodes</Select.Option>
              <Select.Option value="usr">CPU Used</Select.Option>
              <Select.Option value="hiq">CPU Hiq</Select.Option>
              <Select.Option value="cach">Memory cach</Select.Option>
              <Select.Option value="buff">Memory buff</Select.Option>
              <Select.Option value="siq">Memory siq</Select.Option>
            </Select>
            <label>Please select date interval :</label>
            <div className="form_datePickerGroup  form_element">
              <DatePicker
                className="form_datePicker"
                onChange={(value) => setFieldValue('dateStart', value)}
                placeholder="Start At"
                style={{ minWidth: '100px' }}
                showTime={true}
                name={'dateStart'}
              />

              <DatePicker
                className="form_datePicker"
                onChange={(value) => setFieldValue('dateEnd', value)}
                placeholder="End At"
                style={{ minWidth: '100px' }}
                showTime={true}
                name={'dateEnd'}
              />
            </div>
            <Button
              type="full"
              htmlType="submit"
              className="form_submitButton"
            >
              Search
            </Button>
          </Form>
        )
      }}
    />
  )

}

export default SystemInfosForm
