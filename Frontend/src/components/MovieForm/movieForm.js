// src/components/BookingForm.js
import React from 'react';
import { Form, Input, Button, DatePicker, Select, message } from 'antd';
import { useState } from 'react';

const { Option } = Select;

function BookingForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log('Form values:', values);
    message.success('Booking successful!');
    form.resetFields();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book a Ticket</h2>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item name="movie" label="Movie" rules={[{ required: true, message: 'Please select a movie!' }]}>
          <Select placeholder="Select a movie">
            <Option value="1">Inception</Option>
            <Option value="2">Interstellar</Option>
            <Option value="3">The Matrix</Option>
          </Select>
        </Form.Item>
        <Form.Item name="name" label="Your Name" rules={[{ required: true, message: 'Please enter your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Your Email" rules={[{ required: true, message: 'Please enter your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select a date!' }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Book Now</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default BookingForm;
