/* eslint-disable arrow-body-style */
import React from 'react';
import Spinner from './Spinner';

const withDataLoader = url => {
  const func = Component => {
    return class HOC extends React.Component {
      state = {
        data: null,
        spinner: true,
        component: false,
      };

      componentDidMount() {
        fetch(url)
          .then(response => response.json())
          .then(data =>
            this.setState({
              data,
              spinner: false,
              component: true,
            }),
          );
      }

      render() {
        return (
          <>
            {this.state.spinner && <Spinner />}
            {this.state.component && <Component data={this.state.data} />}
          </>
        );
      }
    };
  };
  return func;
};

export default withDataLoader;
