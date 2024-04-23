import { useDeferredValue } from "react";
import Restrorent from "./Restrorent";

function Body() {
  return (
    <div className="body px-1">
      <div className="search p-3">search</div>
      <div className="res-container flex flex-wrap m-1">
        <Restrorent
          restroName="vaishali Cafe"
          cuisine="Dosa, Sounth Indian"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l2zezhs5fbvrhxedsfsv"
        />
        <Restrorent
          restroName=" Maharaja"
          cuisine="Rashmadri ,Somosa"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c5wvwq3fgyqbn8lu9adh"
        />
        <Restrorent
          restroName="Vaishali Sweets"
          cuisine="Cake , Pestry"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f6aea12fb1e13a17be693518620f4dda"
        />
        <Restrorent
          restroName="Shree Ram Sweets"
          cuisine=" chaat, Somose"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/857c2ee1bb3c617a7951210029579a08"
        />
        <Restrorent
          restroName="KFC"
          cuisine="Burger, Fast Food"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/76a05b39545d5a2bf80d6a3e3e46544a"
        />
        <Restrorent
          restroName="Burger King"
          cuisine="Burgers, Chicken fries"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f9ef5296f0fc6736eee76dd13a395659"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ebetl3vele6yo4ke3xbp"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wmev9cayilkwywsberzs"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wcqkdicvgstm6td8o4ry"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c62a97a4450e15f1ae48b38311159160"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tdckled6qf7isgc8y8fk"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zs7vdkt6za7kp13szrtb"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e990b5725edc2ad5c479c618d97ea4d1"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d90c2485b68ccc925d95490e95d1b797"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ad87790940d41a0eed06e515061e1638"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ckb9bzi6ac0zdjdbdhw9"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a08o0jtvexaylmj0jgh8"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gmwdtwjcsuqgtzbdr78v"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1401dfd6e8577f10da411261f59981e6"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pfkejg4jc0hhtcvzggxp"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofqagb0led6cs5hx4ysa"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5de350babe0457b5579729638f447205"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tuk3dthqmeriia1r4z6s"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ebvqchypoqpermiijpd1"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64f447393fbc24ac99734c5767515d12"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rhuocb8rzunngkmdsrzk"
        />
        <Restrorent
          restroName="Biryani Darwar"
          cuisine="Biryani, Rajma Chawal"
          img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qkjdfcr9u1etctp2qnbs"
        />
      </div>
    </div>
  );
}


export default Body