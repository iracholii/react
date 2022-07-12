import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

// Version 1

// const withDataLoader = url => {
//   const HOC = Component => {
//     return class EnhancedComponent extends React.Component {
//       state = {
//         data: null,
//         spinner: true,
//         component: false,
//       };

//       componentDidMount() {
//         fetch(url)
//           .then(response => response.json())
//           .then(data =>
//             this.setState({
//               data,
//               spinner: false,
//               component: true,
//             }),
//           );
//       }

//       render() {
//         const { data, spinner, component } = this.state;

//         return (
//           <>
//             {spinner && <Spinner />}
//             {component && <Component data={data} />}
//           </>
//         );
//       }
//     };
//   };

//   return HOC;
// };

// Version 2

const withDataLoader = url => Component => {
  const EnhancedComponent = () => {
    const [state, setState] = useState({
      data: null,
      spinner: true,
      component: false,
    });

    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data =>
          setState({
            data,
            spinner: false,
            component: true,
          }),
        );
    }, []);

    const { data, spinner, component } = state;

    return (
      <>
        {spinner && <Spinner />}
        {component && <Component data={data} />}
      </>
    );
  };

  return EnhancedComponent;
};

export default withDataLoader;
