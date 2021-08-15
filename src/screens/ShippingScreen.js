import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { register } from '../actions/userAction';
import FormContainer from '../components/FormContainer';

const ShippingScreen = () => {
  return <div>shipping</div>;
};

export default ShippingScreen;
