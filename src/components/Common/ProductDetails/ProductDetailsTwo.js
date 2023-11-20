import ProductInfo from './ProductInfo'
import RelatedProduct from './RelatedProduct'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from "react"
import { useSelector, useDispatch }  from "react-redux";
import { getProductByID } from "../../../app/Actions/Index";
import { useParams } from 'react-router-dom';
import { RatingStar } from "rating-star";

const ProductDetailsTwo = () => {
    let dispatch = useDispatch();
    const productId = useParams();
    const product_id = productId.id;

    useEffect(() => {
        console.log("UEEEEEFFFF");
        dispatch(getProductByID(product_id));
    }, []);

    let product = useSelector((state) => state.products.single);
    console.log("MY PRODUCT: ", product);
    
    /*dispatch({ type: "products/getProductById", payload: { productId } });
    let product = useSelector((state) => state.products.single);*/

    // Add to cart
    const addToCart = async (id) => {
        dispatch({ type: "products/AddToCart", payload: { productId } })
    }

    // Add to Favorite
    const addToFav = async (id) => {
        dispatch({ type: "products/addToFavorites", payload: { productId } })
    }

 
    // Quenty Inc Dec
    const [count, setCount] = useState(1)
    const incNum = () => {
        setCount(count + 1)
    }

    const decNum = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Stokta Yok!")
            setCount(0)
        }
    }

    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>{product
            ?
            <section id="product_single_two" className="ptb-100">
                <div className="container">
                    <div className="row area_boxed">
                        <div className="col-lg-4">
                            <div className="product_single_two_img slider-for">
                                <Slider {...settings}>
                                    <div className="product_img_two_slider">
                                        <img src={product.imageUrl} alt="img" />
                                    </div>
                                    <div className="product_img_two_slider">
                                        <img src={product.imageUrl} alt="img" />
                                    </div>
                                    
                                </Slider>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="product_details_right_one">
                                <div className="modal_product_content_one">
                                    <h3>{product.title}</h3>
                                    <div className="reviews_rating">
                                        <RatingStar maxScore={5} rating={5} id="rating-star-common-2" />
                                        <span>({123} Müşteri Yorumları)</span>
                                    </div>
                                    <h4>{product.price}.00 TL <del>{parseInt(product.price) + 20}.00 TL</del> </h4>
                                    <p>{product.description}</p>
                                   
                                    
                                    <form id="product_count_form_two">
                                        <div className="product_count_one">
                                            <div className="plus-minus-input">
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={decNum}>
                                                        <i className="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <input className="form-control" type="number" value={count} readOnly />
                                                <div className="input-group-button">
                                                    <button type="button" className="button" onClick={incNum}>
                                                        <i className="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="links_Product_areas">
                                        <ul>
                                            <li>
                                                <a href="#!" className="action wishlist" title="Wishlist" onClick={() => addToFav(product.productId)}><i
                                                    className="fa fa-heart"></i>Favorilere Ekle</a>
                                            </li>
                                         
                                        </ul>
                                        <a href="#!" className="theme-btn-one btn-black-overlay btn_sm"
                                         onClick={() => addToCart(product.productId)}>Sepete Ekle</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductInfo />
                </div>
            </section>
            :
            <div className="container ptb-100">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                        <div className="empaty_cart_area">
                            <img src={product.imageUrl} alt="img" />
                            <h2>Ürün Bulunamadı</h2>
                            <Link to="/shop" className="btn btn-black-overlay btn_sm">Alışverişe Devam</Link>
                        </div>
                    </div>
                </div>
            </div>
        }
            <RelatedProduct />
        </>
    )
}

export default ProductDetailsTwo