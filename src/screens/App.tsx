// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/navbar';
import Tickets from './Tickets';
import Marketplace from './Marketplace';
import Contactar from './Contactar';

import SignIn from './SignIn';
import NotFound from './NotFound';
import Footer from '../components/footer';
import Header from '../components/header';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[60px_1fr_50px]'>
        <Header />
        <section className='bg-app-background-main'>
          <Routes>
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/contactar' element={<Contactar />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
