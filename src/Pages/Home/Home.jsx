

const Home = () => {
    return (
        <div>
            <div className="mx-2 md:mx-10 lg:mx-36">
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/prkzn7F/20240201-170052-0000.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>

                <h3 className="text-2xl font-bold text-center  mt-6">বিস্তারিত জানতে </h3>
            <div className="flex justify-center my-2">

            <a className="btn btn-outline btn-ghost btn-sm mx-1 text-xs shadow-md" target="_blank" href="https://www.facebook.com/friendsfear">Facebook Page</a>
            <a className="btn btn-outline btn-ghost btn-sm text-xs  mx-1 shadow-md" target="_blank" href="https://www.facebook.com/groups/1046023565958338">Facebook Group</a>
            </div>
            
            </div>
            
        </div>
    );
};

export default Home;