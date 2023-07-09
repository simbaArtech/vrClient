import styled from 'styled-components';

export const Container = styled.div(() => ({
    width: '20rem',
    height: '100vh',
    borderLeft: '1px solid #ebebf1',
    position: 'fixed',
    top: '0',
    right: '0',
}));

export const Route = styled.div((props) => ({
    width: '60%',
    height: '3rem',
    backgroundColor: props.selected ? '#d7d7f0' : null,
    marginLeft: 'auto',
    borderTopLeftRadius: '8rem',
    borderBottomLeftRadius: '8rem',
    marginTop: '2rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    paddingRight: '20%',
    gap: '.5rem',
    cursor: 'pointer',
    color: props.selected ? '#1e25f6' : '#868a93',
    fontWeight: 'bolder'
}));