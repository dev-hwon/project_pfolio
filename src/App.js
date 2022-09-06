import './Common.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { useState, useEffect } from 'react';
import EmptyPage from './pages/EmptyPage';

function InitPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [cateName, setCateName] = useState("promotion");
  
  
  function changeCateName(value) {
    setCateName(value);
  }

  const handleResize = () => {
    if(+window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  // console.log('width :'+ +window.innerWidth + '/ boolean : '+ isMobile);
  
  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.addEventListener('resize', handleResize);
      }
  }, [])

  return (
    <BrowserRouter>
    
      <div className={`global_warp` + (isMobile ? ' isMobile' : '')}>
        <Header isMobile={isMobile} cateName={changeCateName} ></Header>
        <Routes>
            <Route path="/" element={ <Main cateName={cateName}></Main>} />
            <Route path="/category/:id" element={<Main cateName={cateName}></Main>} />
            <Route path="*" element={<EmptyPage />} />
            {/* <Route path="/" element={<Mainindex pageNumber={pageNumber} selectedPageNumber={currentPage} />} > </Route>
            <Route path="/newsview/:no" element={<Newsview />} />
            <Route path="/noticelistall/:pageno" element={<Noticelistall />} />
            <Route path="/noticeview/:no" element={<Noticeview />} />
            <Route path="/newsview/*" element={<EmptyPage />} />
            <Route path="/noticeview/*" element={<EmptyPage />} />
             */}
          </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default InitPage;
