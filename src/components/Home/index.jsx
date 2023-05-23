import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Spin } from 'antd'
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
export const Home = () => {
    const[photos,setPhotos] = useState([])
    const[loading,setLoading] = useState(true)
    useEffect(()=>{
        // setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/photos?_page=1&limit=10')
      .then(response => response.json())
      .then(json => {
        setPhotos(json)
        setLoading(false)
      }) 
    },)
    return(
        <div>
            {
                loading && <Spin/>
            }
          {
            photos.map((el,id)=>{
                return  <Card style={{width:300}}>
                <Avatar size={50} src={el.thumbnailUrl}/>
                <p>{el.title}</p>
                </Card>
            })
          }
           
        </div>
    )
}