import './css/index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import { Layout } from './layouts/Layout';
import { HomePage } from './pages/Home/HomePage'
import { NewPage } from './pages/New/NewPage';
import { PostPage } from './pages/Post/PostPage';
import { Page404 } from './pages/404/Page404';
import { EditPage } from './pages/Edit/EditPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Layout}>
        <Route index Component={HomePage} />
        <Route path="/" Component={HomePage} />
        <Route path="/posts/new" Component={NewPage} />
        <Route path="/posts/:id" Component={PostPage} />
        <Route path="/posts/:id/edit" Component={EditPage} />
        <Route path="*" Component={Page404} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
