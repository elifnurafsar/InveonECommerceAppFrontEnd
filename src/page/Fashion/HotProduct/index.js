import Heading from "../Heading"
import React, { useEffect } from "react"
import { useSelector, useDispatch }  from "react-redux";
import { getAllProducts } from "../../../app/Actions/Index";
import ProductCard from "../../../components/Common/Product/ProductCard"; 

const HotProduct = () => {

    const dispatch = useDispatch();
    // Dispatch the action to fetch products when the component mounts
    useEffect(() => {
        console.log("useeefect icindeyin")
        dispatch(getAllProducts());
    }, []);

   // dispatch(getAllProducts());

    const TumUrunler = useSelector((state) => state.products.products);

    /*
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log("Product Fetch Bitti")
            state.isLoading = false
            state.isError = false
            state.products = action.payload.data.result;
            console.log(action.payload.data.result)
        })
        let diyetUrunler = [];
        let snacks = [];
        let italian = [];
        let seasonal = [];
    */
    return(
        <>
        <section id="hot-Product_area" className="ptb-100">
             <div className="container">
                <Heading baslik="Mutfağın Popülerleri" 
                 altBaslik="Burası Sizin Sofranız" />
                 <div className="row">
                  <div className="col-lg-12">
                    <div className="tabs_center_button">
                        <ul className="nav nav-tabs">
                            <li><a data-toggle="tab" href="#new_arrival" className="active">Tam Mevsimi</a></li>
                            <li><a data-toggle="tab" href="#trending">Snack Shop</a></li>
                            <li><a data-toggle="tab" href="#best_sellers">Dt. Beyza Çulha'nın Tarifleri</a></li>
                            <li><a data-toggle="tab" href="#featured">İtalyan Şef Lorenzo Mossi</a></li>
                            <li><a data-toggle="tab" href="#on_sall">Şimdi Mutfakta</a></li>
                        </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="tabs_el_wrapper">
                        <div className="tab-content">
                            <div id="new_arrival" className="tab-pane fade show in active">
                                <div className="row">
                               {TumUrunler.slice(5,9).map((urun,index)=> (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={urun} />
                                    </div>
                               ))}
                               </div>
                            </div>
                            <div id="trending" className="tab-pane fade">
                            <div className="row">
                               {TumUrunler.slice(9,12).map((urun, index)=> (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={urun} />
                                    </div>
                               ))}
                               </div>
                            </div>
                            <div id="best_sellers" className="tab-pane fade">
                            <div className="row">
                               {TumUrunler.slice(5,10).map((urun,index)=> (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={urun} />
                                    </div>
                               ))}
                               </div>
                            </div>
                            <div id="featured" className="tab-pane fade">
                            <div className="row">
                               {TumUrunler.slice(12,15).map((urun,index)=> (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={urun} />
                                    </div>
                               ))}
                               </div>
                            </div>
                            <div id="on_sall" className="tab-pane fade">
                            <div className="row">
                               {TumUrunler.slice(7,13).map((urun,index)=> (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <ProductCard data={urun} />
                                    </div>
                               ))}
                               </div>
                            </div>
                        </div>
                    </div>
                  </div>
                 </div>
             </div>
        </section>
        </>
    )
}

export default HotProduct