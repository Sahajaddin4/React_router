import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home,About,Contact,User,Github,GithubInfo} from './components/Handle_Import_Export/HandleFile';
import Layout from './Layout';

function App() {

   const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route 
        loader={GithubInfo}
        path='github'
         element={<Github/>} />
      </Route>
    )
   )
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
