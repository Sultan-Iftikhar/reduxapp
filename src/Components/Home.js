import React from 'react'

function Home() {
    return (
        <>
            <h1>Home Component from Container</h1>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg' alt='cart' />
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" alt='iphone' />
                </div>
                <div className='text-wrapper item'>
                    <span>Device : I Phone</span>
                    <br />
                    <span>Price : $ 10000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" alt='iphone' />
                </div>
                <div className='text-wrapper item'>
                    <span>Device : I Phone-12 Pro Max</span>
                    <br />
                    <span>Price : $ 12000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>

            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" alt='iphone' />
                </div>
                <div className='text-wrapper item'>
                    <span>Device : Samsung</span>
                    <br />
                    <span>Price : $ 5000</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </>

    )
}

export default Home;
