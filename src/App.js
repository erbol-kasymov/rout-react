import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css'
import './App.css';
import { data } from './data';
// import { About } from './components/About';
// import { Home } from './components/Home';
// import { Contacts } from './components/Contacts';
import { Layout } from 'antd';
import { Nav } from './components/Nav';

const { Header, Footer, Content, Sider } = Layout;
export const App =()=> {
  return (
      <Router>
        <Layout>
          <Sider>
            <Nav/>
          </Sider>
          <Routes className="App">
            {
              data.map((obj, id) => {
                return(
                  <Route key={id} path={obj.route} element={<obj.component/>}/>
                )
              })
            }
            {/* <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/> */}
          </Routes>
        </Layout>
      </Router>
  );
}

