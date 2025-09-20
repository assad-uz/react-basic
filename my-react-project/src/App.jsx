import React from 'react';
import BStable from './BStable';
import BSform from './BSform';
import Internalcss from './Internalcss';

const App = () => {
  const a = "Shaon";
  return (
    <div style={{margin: "35px"}}>
      <div>
        <h1 style={{margin: "35px 0px", textAlign:"center"}}>Hi, I'm Assaduzzaman {a}!</h1>
      </div>
      <div>
        <h2 style={{backgroundColor:"GrayText", color:"white", textAlign:"center", padding:"10px"}}>About Myself</h2>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque quaerat numquam quae odio enim fuga quasi vitae tempora ad blanditiis eveniet, repellat at. Qui impedit consectetur magnam nulla beatae distinctio doloribus corporis ea temporibus illo officiis vel esse veniam culpa iste, ipsa similique nihil officia fuga itaque et voluptates debitis repellendus. Totam odit, facilis laboriosam ullam nesciunt id ad laudantium atque. Possimus magni voluptate, quam, quo minus accusantium eveniet id veniam vero temporibus facere ex velit perspiciatis debitis doloribus assumenda molestiae molestias consequuntur voluptatibus suscipit autem. Sequi doloribus nobis dolore ratione fugit, amet, maiores ab exercitationem magnam placeat distinctio? Ad doloremque nesciunt illo impedit amet quam natus ut, culpa soluta sit dignissimos? Magnam voluptatem eos amet possimus consectetur magni hic nihil accusamus ratione vel suscipit doloremque perferendis iusto delectus nemo, perspiciatis nam id consequuntur reprehenderit maiores minus ipsum aut consequatur? Quae repudiandae nulla assumenda odio quasi beatae minima officia aliquam suscipit distinctio, ea harum odit natus neque non alias obcaecati ipsum et exercitationem! Dicta voluptatibus vero provident veniam ratione porro qui tenetur fugit tempora deserunt explicabo iste delectus, quam eaque sit consequuntur sint eveniet quos, temporibus hic praesentium totam. Reprehenderit, sequi odio! Qui possimus, aut eveniet tenetur non nam</p>
      </div>
      <div>
        <BStable/>
      </div>
      <div>
        <BSform/>
      </div>
      <div>
        <Internalcss/>
      </div>
    </div>
  );
};

export default App;
