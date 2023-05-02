import { createGlobalStyle } from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.fontPrimary};
  }

  body {
    background-color: ${({ theme }) => theme.colors.main};
  }

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left {
      left: calc(0% + 1px);
    }

    .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right {
      right: calc(0% + 1px);
    }
  `}

  /** */
  ${({ theme }) => theme.mq.greaterThan('sm')`
    .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left {
      left: calc(15% + 1px);
    }

    .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right {
      right: calc(15% + 1px);
    }
  `}
`;
