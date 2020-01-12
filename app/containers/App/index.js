/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import { Layout } from 'antd';

import GlobalStyle from '../../global-styles';
import SideMenu from '../../components/Menu';

export default function App() {
  return (
    <Layout>
      <Helmet
        titleTemplate="Smart Course Admin"
        defaultTitle="Smart Course Admin"
      >
        <meta name="description" content="Smart Course Management Admin" />
      </Helmet>
      <SideMenu />
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Layout>
      <GlobalStyle />
    </Layout>
  );
}
