import Radium from 'radium'
import color from 'color'

const styles = {
  PostCreateStyles: {
    PostButton: {
      textAlign: 'center',
    }
  },

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
      width: '80%',
      display: 'inline-block',
    },

    Delete: {
      float: 'right',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#AA0000',
      fontFamily: 'sans-serif',
      
      marginTop: '1rem',
      marginRight: '0.75rem',
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