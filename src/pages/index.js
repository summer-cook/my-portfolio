import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || "Hi! I'm Summer Cook & I'm a Web Developer in San Diego, CA"}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Check out my portfolio here! 🌻'} />
      </Helmet>
      <App />
    </>
  );
};
