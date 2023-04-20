import { CloseOutlined, FacebookOutlined, FileTextOutlined, FundProjectionScreenOutlined, GithubOutlined, HomeOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const NavbarContainer = styled.div`
    /* background-image: url("/topimage3.jpeg");
    background-repeat: no-repeat;
    background-size: cover; */
    position: fixed;
    width: 100%;
    top: 0px;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    background-color: inherit;
    box-shadow: 0px 4px 12px #FFF2F2;
`

export const LogoContainer = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    color: snow;
    font-size: 28px;
    font-weight: bold;
    font-style: italic;
    text-shadow:
    1px 1px 0 #777,
    2px 2px 0 #777,
    3px 3px 0 #777,
    4px 4px 0 #777,
    5px 5px 0 #777;
    transform: skew(-15deg);
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const MenuContainer = styled.div`
    flex: 6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const MenuItem = styled.div`
    color: snow;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 2px;
    text-shadow:
    1px 1px 0 #777,
    2px 2px 0 #777,
    3px 3px 0 #777,
    4px 4px 0 #777,
    5px 5px 0 #777;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const HomeIcon = styled(HomeOutlined)`
    font-size: 26px;
    margin-right: 5px;
`

export const AboutIcon = styled(UserOutlined)`
    font-size: 26px;
    margin-right: 5px;
`

export const ProjectsIcon = styled(FundProjectionScreenOutlined)`
    font-size: 26px;
    margin-right: 5px;
`

export const ResumeIcon = styled(FileTextOutlined)`
    font-size: 26px;
    margin-right: 5px;
`



export const IconContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`

export const InstagramIcon = styled(InstagramOutlined)`
    font-size: 28px;
    color: snow;
    padding: 2px;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const FacebookIcon = styled(FacebookOutlined)`
    font-size: 28px;
    color: snow;
    padding: 2px;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const LinkedInIcon = styled(LinkedinOutlined)`
    font-size: 28px;
    color: snow;
    padding: 2px;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const GithubIcon = styled(GithubOutlined)`
    font-size: 28px;
    color: snow;
    padding: 2px;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const MenuIcon = styled(MenuOutlined)`
    font-size: 28px;
    display: none;
    @media (max-width: 768px) {
        display: inline-block;
        color: snow;
        :hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`

export const CloseMenuIcon = styled(CloseOutlined)`
    font-size: 28px;
    display: none;
    @media (max-width: 768px) {
        display: inline-block;
        color: snow;
        :hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`

export const DropdownMenuContainer = styled.div`
    box-sizing: border-box;
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    height: 580px;
    background: inherit;
    box-shadow: 0px 4px 12px #FFF2F2;
    animation: ${bounce} 1s ease;
    @media (min-width: 768px) {
        display: none;
        z-index: 10;
    }
`

export const DropdownMenuItem = styled.div`
    background: inherit;
    display: flex;
    justify-content: center;
    padding: 20px 5px;
    color: snow;
    font-size: 24px;
    border-radius: 5px;
    box-shadow: 0px 8px 15px #FFF2F2;
    text-shadow:
    1px 1px 0 #777,
    2px 2px 0 #777,
    3px 3px 0 #777,
    4px 4px 0 #777,
    5px 5px 0 #777;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const DropdownIconContainer = styled.div`
    background: inherit;
    display: flex;
    justify-content: space-around;
    padding: 20px 5px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px #FFF2F2;
`