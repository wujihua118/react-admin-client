import * as React from 'react'
import { Button, Form, FormInstance, Input, Space } from 'antd'
import * as Icon from '@ant-design/icons'
import AwesomeUpload from '@/components/Upload'

type Prop = {
  form: FormInstance<any>
  value: string
  setValue: (value: string) => void
  onSubmit?: () => void
  onCancel?: () => void
  onDelete?: (id: string) => void
}

const EditForm: React.FC<Prop> = (props) => {
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 24 }
  }
  const handleSubmit = () => {
    props.form.validateFields().then(props.onSubmit)
  }

  const handleDelete = () => {
    const id = props.form.getFieldValue('id')
    id && props.onDelete && props.onDelete(id)
  }

  return (
    <Form {...layout} form={props.form}>
      <Form.Item name="name" label="名称" rules={[{ required: true, message: '请输入标签名称' }]}>
        <Input placeholder="标签名称" autoComplete="off" />
      </Form.Item>
      <Form.Item name="slug" label="别名" rules={[{ required: true, message: '请输入标签别名' }]}>
        <Input placeholder="标签别名" autoComplete="off" />
      </Form.Item>
      <Form.Item name="color" label="颜色">
        <Input placeholder="标签颜色" autoComplete="off" />
      </Form.Item>
      <Form.Item name="icon" label="图标">
        <Input placeholder="标签图标" autoComplete="off" />
      </Form.Item>
      <Form.Item label="背景图">
        <AwesomeUpload value={props.value} setValue={props.setValue} />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={handleSubmit} icon={<Icon.CheckOutlined />}>
            确认
          </Button>
          <Button onClick={props.onCancel} icon={<Icon.RedoOutlined />}>
            取消
          </Button>
          <Button danger onClick={handleDelete} icon={<Icon.DeleteOutlined />}>
            删除
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default EditForm
