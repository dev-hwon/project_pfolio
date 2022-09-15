import './Common.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Main from './pages/Main';
import { useState, useEffect } from 'react';
import EmptyPage from './pages/EmptyPage';

const GLOVAL_ROOT = '/project_pfolio/'

function InitPage() {
  // 브라우저 사이즈체크 
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if(+window.innerWidth < 992) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.addEventListener('resize', handleResize);
    }
  }, [])

  // 카테고리 체크
  const [changeDepth, setChangeDepth] = useState({
    depth1 : "pc",
    depth2 : "promotion"
  })
  function handleDepth(value) {
    setChangeDepth(value)
  }
  
  return (
    <BrowserRouter>
      <div className={`global_warp` + (isMobile ? ' isMobile' : '')}>
        <Header isMobile={isMobile} changeDepth={handleDepth}></Header>
        <Routes>
          <Route path={GLOVAL_ROOT} element={ <Main></Main>} />
          <Route path={`${GLOVAL_ROOT}device/:idevice`} element={<Main></Main>} />
          <Route path={`${GLOVAL_ROOT}device/:idevice/category/:icategory`} element={<Main></Main>} />
          <Route path="*" element={<EmptyPage />} />
          {/* <Route path="/" element={<Mainindex pageNumber={pageNumber} selectedPageNumber={currentPage} />} > </Route>
          <Route path="/newsview/:no" element={<Newsview />} />
          <Route path="/noticelistall/:pageno" element={<Noticelistall />} />
          <Route path="/noticeview/:no" element={<Noticeview />} />
          <Route path="/newsview/*" element={<EmptyPage />} />
          <Route path="/noticeview/*" element={<EmptyPage />} /> */}
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default InitPage;
