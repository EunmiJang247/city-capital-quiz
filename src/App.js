import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { PinkButton } from "./components/PinkButton";
import {next} from "./store/modules/score"
import styled from "styled-components";
import Quiz from "./components/Quiz";
import { reset } from "./store/modules/score";

function App(){
  const score = useSelector((state)=> state.score.score)
  const page = useSelector((state)=> state.score.page)
  const quizs = useSelector((state => state.score.quizs))
  const dispatch = useDispatch();

  const [initscore, setInitscore] = useState(0)
  console.log(score)
  console.log(initscore)

  useEffect(()=>{
    if(page > quizs.length){
        if(initscore < score){
        let interval = setInterval(()=>{
            setInitscore(initscore+1)
        },20);
        return () => {
          clearInterval(interval);
        }
      }
    }else{
      setInitscore(0)
    }
  })

  return(
    <>
      {page === 0 && (
        <Main>
          <Mainimg src="/city/main.jpg" alt="뉴욕 풍경"/>
          <MainHeader style={{margin : "30px"}}>나라별 수도 퀴즈</MainHeader>
          <SubHeader>진정한 수도 고인물도 100점을 받기 어렵습니다!</SubHeader>
          <PinkButton text="테스트시작!" clickEvent={()=>{
            dispatch(next())
          }}/>
        </Main>
      )}
      {page > 0 && page <= quizs.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {page > quizs.length && (
        <Main>
          <MainHeader>당신의 수도 퀴즈 점수는?</MainHeader>
          <Score>{initscore}점</Score>
          <SubHeader></SubHeader>
          <PinkButton text="다시 테스트하기" clickEvent={()=>{
            dispatch(reset());
          }}/>
        </Main>
      )}
    </>
  );
}
export default App;

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  padding: 30px 0;
  margin: auto;
  text-align: center;

`
const MainHeader = styled.h1`
  margin : 30px 0;
`

const Mainimg = styled.img`
  width: inherit;
`
const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px ;
`

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`