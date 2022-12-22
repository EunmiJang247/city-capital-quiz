import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";
import { check, next } from "./../store/modules/score"
import styled from "styled-components";

export default function Quiz(){
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.score.quizs);
    const page = useSelector(state => state.score.page);

    return(
        <>
            {quiz[page-1].img && <Img src={quiz[page-1].img} /> }
            <h1 style={{margin : "50px 0"}}>{quiz[page-1].q}</h1>  
            {quiz[page-1].a.map(item => {
                return(
                    <BlueButton 
                        text={item.text} 
                        key={item.text}
                        clickEvent={()=>{
                            //정답체크
                            dispatch(check({isCorrect : item.isCorrect}));
                            //다음페이지로이동
                            dispatch(next());
                        }}
                    />
                )
            })}
                <Progress page={page} maxPage={quiz.length}/>
        </>
    )
}
const Img = styled.img`
    width: inherit;
`