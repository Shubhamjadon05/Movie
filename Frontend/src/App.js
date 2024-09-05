// src/App.js
import React from 'react';
import 'antd/dist/reset.css'; 
import { Layout, Menu, Breadcrumb } from 'antd';
import MovieList from '../src/components/Movielist/movieList';
import BookingForm from '../src/components/MovieForm/movieForm'

const { Header, Content, Footer } = Layout;

function layOut() {
  return (
    <Layout className="layout">
      <Header>
        
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Movies</Menu.Item>
          <Menu.Item key="3">Bookings</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Movie Booking</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <MovieList />
          <BookingForm />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Movie Booking App ©2024 Created by Shubham</Footer>
    </Layout>
  );
}

export default layOut;
