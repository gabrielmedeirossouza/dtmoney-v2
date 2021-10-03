import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;

  thead,
  tbody {
    width: 100%;

    tr {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      background-color: ${(props) => props.theme.colors.backgroundLight};

      width: 100%;
      padding: 20px 32px;
      border-radius: 5px;

      th,
      td {
        font-size: 16px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
        text-align: left;
      }
    }
  }

  tbody {
    tr {
      margin-top: 8px;
    }
  }
`;
