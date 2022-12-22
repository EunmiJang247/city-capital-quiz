import React from "react";
import styled from "styled-components";

const MyButton = styled.a`
    position: relative;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    transform-style: preserve-3d;
    line-height: 1.6;
    font-weight: bold;
    color: #382b22;
    padding: 1.25em 2em;
    background: #fff0f0;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    user-select: none; //드레그 안되도록 하는것. 
    transition : .15s ease-out;
    &::before{
        content: ""; //before나 after넣기위해 항상있어야해.
        //div처럼쓰려면 비워둬. 
        position: absolute;
        width: 100%;
        height: 100%; //부모엘리먼트만큼 키워줌.
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #f9c4d2;
        border-radius: inherit; //부모꺼 가져옴
        box-shadow : 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
        transform: translate3d(0, .75em, -1em);
        transition: transform .15es ease-out, box-shadow .15s ease-out;
    }
    &:hover{
        background: #ffe9e9;
        transform: translateY(.25em);
    }
`;

export function PinkButton({text, clickEvent}){
    return <MyButton onClick={clickEvent}>{text}</MyButton>
}