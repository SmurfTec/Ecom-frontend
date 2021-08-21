import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';

import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productAction';
import Paginate from '../components/Paginate.js';
import { ProductCarousel } from '../components/ProductCarousel.js';
import { Link } from 'react-router-dom';


// useDispatch => use to dispatch our calling action
// useSelector => used to select the part of state e.g

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  // console.log('pageNumber', pageNumber);

  const dispatch = useDispatch();

  //  grab data from the state and pull out what we need
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber)); // firing of the action to get the data through the reducer down into the state
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-dark'>
          {' '}
          Go Back
        </Link>
      )}
      <h1> Latest products </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
