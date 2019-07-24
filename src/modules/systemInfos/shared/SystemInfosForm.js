import React from 'react'
import { Formik } from 'formik'
import { Form, DatePicker, Button, Select } from 'antd'


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
            <label>Sélectionner un paramètre :</label>
            <Select
              name={'param'}
              className="form_select"
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
            <label>Sélectionner une plage horaire :</label>
            <div className="form_datePickerGroup">
              <DatePicker
                className="form_datePicker"
                onChange={(value) => setFieldValue('dateStart', value)}
                placeholder="Date de début"
                style={{ minWidth: '100px' }}
                showTime={true}
                name={'dateStart'}
              />

              <DatePicker
                className="form_datePicker"
                onChange={(value) => setFieldValue('dateEnd', value)}
                placeholder="Date de fin"
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
              Rechercher
            </Button>
          </Form>
        )
      }}
    />
  )

}

export default SystemInfosForm
