import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Summer Cook</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content="Web Developer in San Diego, CA. Check out my portfolio here! 🌻"
        />
      </Helmet>
      <App />
    </>
  );
};
