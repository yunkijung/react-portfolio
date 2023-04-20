import { Content, ContentBox, ContentTitle, HomeContainer, Image, ImageBox, SubTitle, Title, TitleContainer } from "./Home.style";

export default function Home(){
    return (
        <>
            <TitleContainer>
                <Title>Hello,</Title>
                <Title>I'm Yun Ki Jung.</Title>
                <SubTitle>Jr. Software Engineer</SubTitle>
            </TitleContainer>
            <HomeContainer id="home">
                <ContentBox>
                    <ContentTitle>About Me</ContentTitle>
                    <Content>
                    Welcome to my portfolio website! As a junior software engineer, 
                    I'm excited to showcase my passion for coding and share the projects I've worked on.
                    I have a passion for Frontend Developement and am constantly striving to improve my skills and knowledge in this area.
                    (JavaScript, TypeScript, React, Next.js, RestAPI, Graphql)
                    </Content>
                </ContentBox>
                <ImageBox>
                    <Image src="/profile.png"/>
                </ImageBox>
            </HomeContainer>
        </>
    )
}