import { useEffect } from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products')

        .catch((err) => {
          console.log('Error', err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, []);

  //   console.log('Products: ', products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
