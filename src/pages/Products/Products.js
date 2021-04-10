import React from 'react';
import { InfoSection } from '../../components';
import { InfoColumn } from '../../components/InfoSection/InfoSection.elements';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Products() {
    return ( <
        >
        <
        InfoSection {...homeObjOne }
        /> <
        InfoSection {...homeObjTwo }
        /> <
        InfoSection {...homeObjThree }
        /> < /
        >
    );
}

export default Products;