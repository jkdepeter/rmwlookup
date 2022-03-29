import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid,List } from 'semantic-ui-react';

import Layout from './Layout';
import Features from './Features';
import Sidebars from './SideBar'
//import Profile from './Profile';


// https://api-rmwlookup.soul2urfeet.com.pg/products

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
     axios.get('https://api-rmwlookup.soul2urfeet.com.pg/products', {
      params: {p:0,
        s: 100
      }
    })
    .then(function (response) {
      setProduct(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });  
  })
  
 products.forEach(element => {
   
 });
  return (
    <Layout>
      <Grid stackable columns={3} divided>
        <Grid.Row>
        <Grid.Column>
          <Sidebars/>
        </Grid.Column>
        <Grid.Column>
          <Features/>
          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;

// {products.map((item, idx) => (
//   <List.Item key={idx}>
//     <List.Icon name="checkmark" />
//     <List.Content>
//       <span dangerouslySetInnerHTML={{ __html: item[idx] }} />
//     </List.Content>
//   </List.Item>
// ))}

{/* <List>
{products.map((item) => (
  item.map((items, idx) => (
    <List.Item key={idx}>
      <List.Icon name="checkmark" />
      <List.Content>
        <span dangerouslySetInnerHTML={{ __html: items }} />
      </List.Content>
    </List.Item>
  ))
))}
</List> */}
