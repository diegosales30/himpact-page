import styled from "styled-components";

export const MapListArea = styled.section`
  height: 100%;
  max-height: 90vh;
  overflow-x: auto;
  width: 100vw;
  max-width: 420px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 22px;
  background: rgba(237, 237, 237, 1);
  height: 100px;
  padding: 1rem;
  text-align: center;
  margin: auto;
`;

export const CardMap = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0px 0px 1px 1px #c7c7c7;
  border-radius: 10px;
  padding: 1rem 1.4rem;
  min-height: 9rem;
  font-size: 0.7rem;
  width: 19rem;
  margin: 1rem 2rem;
  font-weight: 300;
  word-wrap: break-word;
  list-style: none;
  cursor: pointer;
  margin: auto;

  h1 {
    font-weight: bold;
    font-size: 14px;
    color: var(--secundary-color);
    margin: 0.4rem 0px 10px;
    width: 280px;
  }

  p {
    font-size: 12px;
    width: 100%;
    margin-left: 0rem;
    line-height: 18px;
  }
`;
