import React from 'react';
import Helmat from '../Helmat/Helmat';

const Blog = () => {
  return (
    <div className="container overflow-hidden">
      <Helmat title="blogs"></Helmat>
      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <h1>javaScript</h1>
            <p>1. জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ভাষা যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয়।</p>
            <p>2. জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যেতে পারে।</p>
            <p>3. এটি মূলত ক্লায়েন্ট-সাইডে ব্যবহৃত হয়।</p>
            <p>4. জাভাস্ক্রিপ্ট এইচটিএমএল যোগ করতে এবং DOM এর সাথে খেলতে যথেষ্ট সক্ষম।</p>
            <p>5. জাভাস্ক্রিপ্ট যেকোন ব্রাউজার ইঞ্জিনে চলতে পারে যেমন সাফারিতে জেএস কোর এবং ফায়ারফক্সে স্পাইডারমনকি।</p>
            <p>6. জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।</p>
          </div>



        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <h1>NodeJS</h1>
            <p>1.নোডজেএস একটি জাভাস্ক্রিপ্ট রানটাইম পরিবেশ।</p>
            <p>2.আমরা NodeJS এর ​​সাহায্যে ব্রাউজারের বাইরে Javascript চালাতে পারি।</p>
            <p>3.এটি বেশিরভাগই সার্ভার-সাইডে ব্যবহৃত হয়।</p>
            <p>4.Nodejs এর HTML ট্যাগ যোগ করার ক্ষমতা নেই।</p>
            <p>5.V8 হল node.js এর ভিতরে জাভাস্ক্রিপ্ট ইঞ্জিন যা জাভাস্ক্রিপ্ট পার্স করে এবং চালায়।</p>
            <p>6.Nodejs সার্ভার-সাইড উন্নয়ন ব্যবহার করা হয়.</p>


          </div>
        </div>
      </div>



      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <h1>when should use mongodb</h1>
            MongoDB বিদেশী কী দ্বারা সম্পর্কিত টেবিলের পরিবর্তে নথির সংগ্রহ হিসাবে ডেটা উপস্থাপন করে। এটি নোড ব্যবহার করে ইন্টারনেটে বিভিন্ন ধরণের ডেটা শালীনভাবে সংরক্ষণ করা এবং ওয়েব অ্যাপ্লিকেশনগুলিতে অ্যাক্সেস করা সম্ভব করে তোলে। জেএস

          </div>



        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <h1> when should use NodeJS</h1>
            নোড। js প্রাথমিকভাবে নন-ব্লকিং, ইভেন্ট-চালিত সার্ভারগুলির জন্য ব্যবহৃত হয়, এর একক-থ্রেড প্রকৃতির কারণে। এটি প্রথাগত ওয়েব সাইট এবং ব্যাক-এন্ড API পরিষেবাগুলির জন্য ব্যবহৃত হয়, তবে বাস্তব-সময়, পুশ-ভিত্তিক আর্কিটেকচারের কথা মাথায় রেখে ডিজাইন করা হয়েছিল।



          </div>
        </div>
      </div>


      <div className="row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <h1>Differences between sql and nosql databases.</h1>
            <p>এসকিউএল ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য, যখন নোএসকিউএল ডেটাবেসগুলি অনুভূমিকভাবে স্কেলযোগ্য। এসকিউএল ডাটাবেসগুলি টেবিল-ভিত্তিক, যখন নোএসকিউএল ডাটাবেসগুলি নথি, কী-মান, গ্রাফ, বা প্রশস্ত-কলাম স্টোর। এসকিউএল ডাটাবেসগুলি বহু-সারি লেনদেনের জন্য ভাল, যখন নথি বা JSON এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
            </p>

          </div>



        </div>
        <div className="col">
          <div className="p-3 border bg-light">
            <h1> What is the purpose of jwt and how does it work</h1>
            <p>JWT, বা JSON ওয়েব টোকেন, একটি উন্মুক্ত মান যা দুটি পক্ষের মধ্যে নিরাপত্তা তথ্য ভাগ করার জন্য ব্যবহৃত হয় - একটি ক্লায়েন্ট এবং একটি সার্ভার। প্রতিটি JWT-এ এনকোড করা JSON অবজেক্ট রয়েছে, যার মধ্যে দাবির সেট রয়েছে। টোকেন ইস্যু করার পরে দাবিগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWTs স্বাক্ষরিত হয়।</p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;