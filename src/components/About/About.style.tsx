import styled from "@emotion/styled";

export const TitleContainer = styled.div`
    width: 100%;
    padding-top: 160px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

export const SkillsTitleContainer = styled.div`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
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

export const AboutContainer = styled.div`
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
`

export const SkillsContainer = styled.div`
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
`

export const ContentBox = styled.div`
    flex: 1;
    margin: 20px;
    padding: 30px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    background-color: #FFF2F2;
    box-shadow: 0px 4px 12px #FFF2F2;
    border-radius: 30px;
    @media (max-width: 768px){
        height: 300px;
    }
`