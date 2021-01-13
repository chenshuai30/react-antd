import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./home'));
const loading = (<div>loading...</div>);
// export default Home;
// export default class LazyHome extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <Suspense fallback={loading}>
//         <Home />
//       </Suspense>
//     )
//   }
// }

export default function home(props) {
  return (
    <Suspense fallback={loading}>
      <Home history={props.history} />
    </Suspense>
  )
}
