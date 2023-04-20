import { ProjectsContainer, ProjectsBox, TitleContainer, Title } from "./Projects.style";

export default function Projects(){
    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'snow',
      };
    return (
        <>
            <TitleContainer>
                <Title>
                    Projects
                </Title>
            </TitleContainer>
            <ProjectsContainer>
                <ProjectsBox autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
                </ProjectsBox>
            </ProjectsContainer>
        </>
    )
}