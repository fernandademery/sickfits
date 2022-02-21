import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2> I'm a page</h2>
      {cool && <h3>cool</h3>}
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.bool,
  // As children could, in this case, be anything to render, we can set the prop type to any
  children: PropTypes.any,
  // There's also the possibility below, where the prop type can be one of the two options
  //   children: PropTypes.oneOf([
  //     PropTypes.arrayOf(PropTypes.node),
  //     PropTypes.node,
  //   ]),
};
