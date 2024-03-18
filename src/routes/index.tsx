import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '~/components/protected-route';
import { AuthRoutes } from '~/pages/auth';
import { UserRoutes } from '~/pages/user';

export function AppRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
      <Routes>
        {AuthRoutes}
        <Route path="/user" element={<ProtectedRoute />} key="user">
          {UserRoutes}
        </Route>

        <Route
          path="*"
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <>
              <h2 className="text-center text-6xl">Not Found 404</h2>
              <h5 className="text-center">Wait some time</h5>
            </>
          }
        />

        {/*

        in future for not found pages
        <Route path="*" element={<Page404 />} key="404" /> */}
      </Routes>
    </BrowserRouter>
  );
}
