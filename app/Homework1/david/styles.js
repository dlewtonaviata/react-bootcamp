import Radium from 'radium'
import color from 'color'

const styles = {
  PostBlockStyles: {
    Block: {
      backgroundColor: '#A0A0A0',
      border: '0.25rem solid #770000',
      borderRadius: '1rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      padding: '0rem 0.5rem',
      fontVariant: 'small-caps',
    },

    Header: {
      textDecoration: 'underline',
      textTransform: 'capitalize',
      fontStyle: 'italic',
      color: '#000077',
    },

    Body: {
      fontSize: '1.5rem',
    },

    Footer: {
      textAlign: 'right',
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
  },
};

export default styles;