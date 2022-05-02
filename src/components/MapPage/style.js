import styled from "styled-components";

export const CardMap = styled.div`
  background-color: rgba(237, 237, 237, 1);
  padding: 1rem 1.4rem;
  min-height: 9rem;
  font-size: 0.7rem;
  width: 100vw;

  font-weight: 300;
  word-wrap: break-word;
  list-style: none;
  width: 100vw;
  max-width: 420px;
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

export const Iframe = styled.iframe`
  border: none;
  width: 350px;
  height: 400px;
  margin: 20px 10px;
`;
