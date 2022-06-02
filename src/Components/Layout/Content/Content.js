import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../../pages/HomePage/HomePage';
import JobInfo from '../../../pages/JobInfo/JobInfo';

const nav = [
  {
    name: 'HomePage',
    element: <HomePage />,
    path: '/',
  },
  {
    name: 'JobInfoPage',
    element: <JobInfo />,
    path: '/:id',
  },
];

const Content = () => {
  return (
    <Routes>
      {nav?.map(({ name, ...props }) => (
        <Route key={name} {...props} />
      ))}
    </Routes>
  );
};

export default Content;
