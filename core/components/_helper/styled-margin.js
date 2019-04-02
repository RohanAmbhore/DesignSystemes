import { spacing } from '../../tokens/spacing';
const direction = ['top', 'bottom', 'left', 'right'];

const margin = props => {
    const margin = props.margin || [];

    if (!props.margin) return '';
    
    let styles = '';
    direction.map(direction => {
        if (typeof margin[direction] !== 'undefined') {
            let rawValue = margin[direction];
            let value;
            if (typeof rawValue === 'string') {
                if (spacing[rawValue]) value = spacing[rawValue];
                else value = rawValue;
            } else {
                value = rawValue + 'px';
            }

            styles += `margin-${direction}: ${value} !important;`;
        }
    });
    return styles;
}

export default margin;