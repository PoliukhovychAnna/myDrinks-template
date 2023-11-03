// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const MyDrinksPage = lazy(() => import('../pages/MyDrinksPage'));
import { MyDrinksPage } from 'pages/MyDrinksPage';

export const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="*" element={MyDrinksPage}></Route>
      </Routes> */}
      <MyDrinksPage />
    </>
  );
};
