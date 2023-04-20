import styled from "@emotion/styled";

export const TitleContainer = styled.div`
    width: 100%;
    padding-top: 200px;
    padding-bottom: 50px;
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

export const SubTitle = styled.div`
    font-size: 30px;
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
        font-size: 24px;
    }
`



export const HomeContainer = styled.div`
    padding: 40px;
    width: 100%;
    min-height: 700px;
    box-sizing: border-box;
    display: flex;
    @media (max-width: 768px){
        flex-direction: column;
        height: 700px;
    }
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

export const ContentTitle = styled.div`
    font-size: 32px;
    color: black;
    text-shadow:
    1px 1px 0 #777;
    border-bottom: 2px solid black;
    @media (max-width: 768px){
        font-size: 24px;
    }
`

export const Content = styled.div`
    font-size: 24px;
    color: black;
    margin-top: 20px;
    @media (max-width: 768px){
        font-size: 14px;
    }
`



export const ImageBox = styled.div`
    flex: 1;
    margin: 20px;
    height: 500px;
    box-sizing: border-box;
    background-color: #FFF2F2;
    box-shadow: 0px 4px 12px #FFF2F2;
    border-radius: 30px;
    @media (max-width: 768px){
        height: 300px;
    }
`

export const Image = styled.img`
    margin: 1px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 30px;
`

