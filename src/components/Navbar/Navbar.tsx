import { useState } from "react";
import { AboutIcon, CloseMenuIcon, DropdownIconContainer, DropdownMenuContainer, DropdownMenuItem, FacebookIcon, GithubIcon, HomeIcon, IconContainer, InstagramIcon, LinkedInIcon, Logo, LogoContainer, MenuContainer, MenuIcon, MenuItem, NavbarContainer, ProjectsIcon, ResumeIcon } from "./Navbar.style";
import { useNavigate } from "react-router-dom";




export default function Navbar(){
    const redirect = useNavigate();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

    const onClickMenuIcon = () => {
        setIsDropdownMenuOpen(prev => !prev);
    }

    // function scrollToHome() {
    //     const element = document.getElementById("home");
    //     element?.scrollIntoView({ behavior: "smooth" });
    // }

    const onCLickHome = () => {
        setIsDropdownMenuOpen(false);
        redirect("/");
    }

    const onCLickAbout = () => {
        setIsDropdownMenuOpen(false);
        redirect("/about");
    }

    const onCLickProjects = () => {
        setIsDropdownMenuOpen(false);
        redirect("/projects");
    }

    const onCLickResume = () => {
        setIsDropdownMenuOpen(false);
        redirect("/resume");
    }
    
    return (
        <>
            <NavbarContainer>
                <LogoContainer>
                    <Logo onClick={onCLickHome}>Yun</Logo>
                </LogoContainer>
                <MenuContainer>
                    <MenuItem onClick={onCLickHome}>
                        <HomeIcon/>
                        Home
                    </MenuItem>
                    <MenuItem onClick={onCLickAbout}>
                        <AboutIcon/>
                        About
                    </MenuItem>
                    <MenuItem onClick={onCLickProjects}>
                        <ProjectsIcon/>
                        Projects
                    </MenuItem>
                    <MenuItem onClick={onCLickResume}>
                        <ResumeIcon/>
                        Resume
                    </MenuItem>
                </MenuContainer>
                <IconContainer>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <LinkedInIcon/>
                    <GithubIcon/>
                </IconContainer>
                {
                    isDropdownMenuOpen ?
                    <CloseMenuIcon onClick={onClickMenuIcon}/>
                    :
                    <MenuIcon onClick={onClickMenuIcon}/>
                }
                
            </NavbarContainer>
            {
                isDropdownMenuOpen &&
                <DropdownMenuContainer>
                    <DropdownMenuItem onClick={onCLickHome}>
                        <HomeIcon/>
                        Home
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onCLickAbout}>
                        <AboutIcon/>
                        About
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onCLickProjects}>
                        <ProjectsIcon/>
                        Projects
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onCLickResume}>
                        <ResumeIcon/>
                        Resume
                    </DropdownMenuItem>
                    <DropdownIconContainer>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <LinkedInIcon/>
                        <GithubIcon/>
                    </DropdownIconContainer>
                </DropdownMenuContainer>
            }
        </>
    )
}