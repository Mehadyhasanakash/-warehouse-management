// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const Helmat = ({title}) => {
//     return (
//         <div>
//             <Helmet>
//                 <title> {title} -Book Warehouse</title>
//             </Helmet>
//         </div>
//     );
// };

// export default Helmat;
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Helmat = ({title}) => {
    return (
        <>
        
        <Helmet>
            <title>{title}- Book Warehouse</title>
        </Helmet>
        
        </>
    );
};

export default Helmat;