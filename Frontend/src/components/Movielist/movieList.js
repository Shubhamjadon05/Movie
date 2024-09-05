// src/components/MovieList.js
import React from 'react';
import { Card, Col, Row ,ArrowLeftOutlined } from 'antd';

const movies = [
  { id: 1, title: 'Inception', description: 'A mind-bending thriller', img: "https://edgroom-blogs.s3.ap-south-1.amazonaws.com/202310071805064792540_38983_u23h.jpg" },
  { id: 2, title: 'Interstellar', description: 'A journey through space', img: "https://m.media-amazon.com/images/I/919mVr6ikcL._AC_UF894,1000_QL80_.jpg" },
  { id: 3, title: 'Deadpool & Wolverine', description: 'A sci-fi classic', img: "https://phantom-marca.unidadeditorial.es/a9d4a421c349a07ff6cdba8e7d28e137/crop/0x0/2044x1363/resize/828/f/jpg/assets/multimedia/imagenes/2024/07/25/17219104175059.jpg" },
];

function MovieList() {
  return (
    
    <div style={{ padding: '20px' }}>
      
      <h2>Available Movies</h2>
      
      <Row gutter={16}>
        {movies.map(movie => (
          <Col span={8} key={movie.id}>
            <Card title={movie.title} bordered={false}>
              <img src={movie.img} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
              <p>{movie.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieList;
