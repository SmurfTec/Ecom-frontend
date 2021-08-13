import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';

import Message  from '../components/Message.js';
import Loader from '../components/Loader.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
// useDispatch => use to dispatch our calling action
// useSelector => used to select the part of state e.g

const HomeScreen = () => {
  const dispatch = useDispatch();

  //  grab data from the state and pull out what we need
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts()); // firing of the action to get the data through the reducer down into the state
  }, [dispatch]);

  return (
    <>
      <h1> Latest products </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
