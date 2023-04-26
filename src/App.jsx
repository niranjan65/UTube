
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import SearchContainer from './components/SearchContainer'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "search",
      element: <SearchContainer/>
    }
  ]
}])
function App() {

  return (
    <div >
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
