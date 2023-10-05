import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './components/appheader';
import Home from './components/Home';
import SubscriberList from './components/subscriberlist';
import AddSubscriber from './components/addsubscriber';
import EditSubscriber from './components/editsubscriber';
import ViewSubscriber from './components/viewsubscriber';
import Bible from './components/bible';


function App() {
  



  return (
    <div className="App">
     <div className='blog-head'> 
      <h1>The Bloggers Blog </h1>
      </div>
    <AppHeader/>
       <div className='biblebox'>
         <Bible/>
       </div>
    <BrowserRouter>   
      
 
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/subscriberlist/:coid' element={<SubscriberList/>}></Route>
      <Route path='/editsubscriber/:coid' element={<EditSubscriber/>}></Route>
      <Route path='/viewsubscriber' element={<ViewSubscriber/>}></Route>
      <Route path='/addsubscriber' element={<AddSubscriber/>}></Route>
      <Route path='/subscriberlist' element={<SubscriberList/>}></Route>
      <Route path='/bible' element={<Bible/>}></Route>
``


    </Routes>


  </BrowserRouter>
  </div>

  )
  
}

export default App
 

