/* esLint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['2023 패션 트랜드','서울 이자카야 best10','서울 포케 맛집 best5']);
  let [따봉, 따봉변경] = useState(0);

  function 글제목바꾸기() {
    let newArray=[];
    newArray = 글제목.map( e=>{
      return e.replace('서울','경기');
    } )
    console.log(newArray);
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 글제목바꾸기 }>버튼</button>
      <div className='list'>
        <h3>{글제목[0]}</h3>
        <p>5월 13일 발행</p>
      </div>
      <hr/>
      <div className='list'>
        <h3>{글제목[1]}<span onClick={()=>{
          따봉변경(따봉+1);
         }}>👍🏻</span> {따봉}</h3>
        <p>5월 13일 발행</p>
      </div>
      <hr/>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>5월 13일 발행</p>
      </div>
      <hr/>
      <Modal>
         
      </Modal>
    </div>
  );
}

function Modal(){
  return (
    <div></div>
  );
}

export default App;
