import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  // As children could, in this case, be anything to render, we can set the prop type to any
  pageProps: PropTypes.any,
  // There's also the possibility below, where the prop type can be one of the two options
  //   children: PropTypes.oneOf([
  //     PropTypes.arrayOf(PropTypes.node),
  //     PropTypes.node,
  //   ]),
};
