import { AboutContainer, ContentBox, SkillsContainer, SkillsTitleContainer, Title, TitleContainer } from "./About.style";

export default function About(){
    return (
        <>
            <TitleContainer>
                <Title>About</Title>
            </TitleContainer>
            <AboutContainer>
                <ContentBox>About</ContentBox>
            </AboutContainer>
            <SkillsTitleContainer>
                <Title>Skills</Title>
            </SkillsTitleContainer>
            <SkillsContainer>
                <ContentBox>Skills</ContentBox>
            </SkillsContainer>
        </>
    )
}