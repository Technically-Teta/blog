import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppHeader from './components/appheader';
import SubscriberList from './components/subscriberlist';
import AddSubscriber from './components/addsubscriber';
import EditSubscriber from './components/editsubscriber';
import ViewSubscriber from './components/viewsubscriber';
import Bible from './components/bible';
import EntriesList from './components/entrieslist';
import AddEntry from './components/addentry';

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
      <Route path='/addentry' element ={<AddEntry/>}></Route>
       <Route path='/' element={<EntriesList/>}></Route>
      <Route path='/subscriberlist' element={<SubscriberList/>}></Route>
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
 

