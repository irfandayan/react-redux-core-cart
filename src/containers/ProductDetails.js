import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  removeSelectedProduct,
  fetchProduct,
} from '../redux/actions/productActions';

const ProductDetails = () => {
  // get product id from url parametes
  const { productId } = useParams();
  // use dispatch to store selected item details
  const dispatch = useDispatch();
  // use selector to get product detail from redux store
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));

    // Note: useEffect cleanup function
    // https://designcode.io/react-hooks-handbook-useeffect-hook
    // https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/

    // As stated previously, the useEffect cleanup function helps developers clean effects that prevent unwanted behaviors and optimizes application performance.
    // However, it is pertinent to note that the useEffect cleanup function does not only run when our component wants to unmount, it also runs right before the execution of the next scheduled effect.

    // return function is the cleanup function, or when the user leaves the page and the component will unmount.
    return () => {
      // Cleanup function
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="#" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
