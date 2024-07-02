import styled, { css } from 'styled-components';

export const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  height: 30px;
  min-height: 30px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  text-align: center;
  ${({ type }) =>
    type === 'error' &&
    css`
      background-color: #ba000d;
    `}
`;


