import styled, {
    keyframes,
    css,
    injectGlobal,
    StyledComponent,
    ThemeProvider
} from 'styled-components';

import margin from '../components/_helper/styled-margin';
import domElements from './_helper/dom-elements';

/*
  create a thin replacement for styled
  styledWithHelpers(c) = styled(c)
*/
let styledWithHelpers = styledComponent => {
    return styled(styledComponent)
}

/* create functions for all the elements supported in styled */
domElements.forEach(domElements => {
    styledWithHelpers[domElements] = (styles, ...interpolations) => {
        interpolations.push(margin);
        return styled(domElement)(styles, ...interpolations);
    }

    /* attach inbuilt styled-components helpers back */
  styledWithHelpers[domElement].withConfig = styled[domElement].withConfig
  styledWithHelpers[domElement].attrs = styled[domElement].attrs
});

export default styledWithHelpers;
export { keyframes, css, injectGlobal, StyledComponent, ThemeProvider };
