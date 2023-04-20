import styled from "@emotion/styled";
import { Carousel } from "antd";


export const TitleContainer = styled.div`
    width: 100%;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const Title = styled.div`
    font-size: 60px;
    font-weight: bold;
    color: snow;
    text-shadow:
    1px 1px 0 #777,
    2px 2px 0 #777,
    3px 3px 0 #777,
    4px 4px 0 #777,
    5px 5px 0 #777;
    display: flex;
    justify-content: center;
    @media (max-width: 768px){
        font-size: 40px;
    }
`

export const ProjectsContainer = styled.div`
    padding: 40px;
    padding-top: 80px;
    width: 100%;
    min-height: 680px;
    box-sizing: border-box;
    @media (max-width: 768px){
        min-height: 500px;
    }
`

export const ProjectsBox = styled(Carousel)`
    z-index: 1;
`