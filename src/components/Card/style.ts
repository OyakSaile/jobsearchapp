import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--backgroundCard);
  width: max-content;
  margin: 0 auto;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1rem;
  display: grid;
  grid-template-columns: 6rem 1fr 6rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  margin-top: 2rem;
  transition: all .5s;

  :hover {
    background-color: var(--primary);
    div {
      color: white;

      span {
        color: white;
      }

       p {
         color: white;
       }

       h2 {
          color: white;
       }

       h1 {
         color: white;
       }

       svg {
         color: white;
       }
    }
  }
`;

export const CardLogoJob = styled.div`
  flex: 1;
`;

export const CardInformationJob = styled.div`
  h1 {
    font-size: 1.5rem;
    color: var(--primary);
  }

  h2 {
    font-size: 1rem;
    margin-top: 0.5rem;
    font-weight: 400;
    color: var(--text-grey-02);
    width: 80%;
  }

  .time {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }

  span {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    gap: 0.3rem;
    svg {
      color: var(--primary);
    }
  }
`;
export const CardInformationSallary = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1rem;
    color: var(--text-grey-02);
    font-weight: 400;
  }

  p {
    color: var(--text-grey-02);
    font-size: 1rem;
  }

  span {
    color: var(--primary);
    font-size: 1.5rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    font-weight: bold;
  }
`;
