import React, { lazy, Suspense } from 'react';

const Other = lazy(() => import('./other'));
// export default Other;
const loading = (<div>loading...</div>);
// export default class LazyOther extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <Suspense fallback={loading}>
//         <Other />
//       </Suspense>
//     )
//   }
// }
export default function other(props) {
  return (
    <Suspense fallback={loading}>
      <Other history={props.history} />
    </Suspense>
  )
}
