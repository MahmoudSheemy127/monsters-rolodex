import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'card-list': {
    width: [{ unit: 'vw', value: 85 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }],
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px'
  }
});
