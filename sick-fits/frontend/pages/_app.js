import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};
export default withData(MyApp);

MyApp.propTypes = {
  Component: PropTypes.any,
  // As children could, in this case, be anything to render, we can set the prop type to any
  pageProps: PropTypes.any,
  // There's also the possibility below, where the prop type can be one of the two options
  //   children: PropTypes.oneOf([
  //     PropTypes.arrayOf(PropTypes.node),
  //     PropTypes.node,
  //   ]),
  apollo: PropTypes.any,
};
