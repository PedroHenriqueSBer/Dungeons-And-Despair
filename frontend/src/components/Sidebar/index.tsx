import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ExtensionIcon from '@mui/icons-material/Extension';
import GradeIcon from '@mui/icons-material/Grade';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from "@mui/material";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../layout/Button';
import { theme } from '../../style/GlobalStyle';
import { Container, Situation } from "./styles";

export const Sidebar: React.FC<{
    isOpen:boolean,
    onClose: () => void
}> = ({
    isOpen,
    onClose
}) => {

    interface ButtonProps{
        text: string,
        patch: string,
        icon?: any
    }

    const Menu: React.FC<{
        icon: any,
        defaultOpen?: boolean,
        title:string
        buttonList: ButtonProps[]
    }> = ({
        icon,
        title,
        defaultOpen,
        buttonList
    }) => {
        const [isOpen,setIsOpen] = useState(defaultOpen)
        const navigate = useNavigate()
        return(
            <>
                <Button 
                    text={title}
                    Icon={icon}
                    textSize='12rem'
                    width='100%'
                    borderRadius='0'
                    bright={isOpen? 0.95: 1}
                    onClick={() => setIsOpen(!isOpen)}/>
                <div>
                    {isOpen && buttonList.map((el,index)  => <>
                        {/*onClick={() => navigate(el.patch)}*/}
                        <Button 
                            key={index}
                            text={el.text}
                            borderRadius='0'
                            textSize='10rem'
                            width='100%'
                            fontSize='0.9rem'
                            Icon={el.icon}
                            bright={0.97}/>
                    </>)}
                </div>
            </>
        )
    }
    const Option: React.FC<ButtonProps> = ({
        icon,
        patch,
        text
    }) => {
        const navigate = useNavigate()
        return(
            <>
                <Button 
                    text={text}
                    Icon={icon}
                    textSize='12rem'
                    width='100%'
                    borderRadius='0'/>
            </>
        )
    }
    const icons = [
        PersonAddIcon,
        GroupsIcon,
        GroupIcon,
        AccountBoxIcon,
        DehazeIcon,
        GradeIcon
    ]
    
    const menusItens:ButtonProps[][] = [
        [
            {
                text: 'Add Friend',
                patch: '',
                icon:icons[0]
            },
            {
                text: 'Groups',
                patch: '',
                icon:icons[1]
            },
            {
                text: 'Friends',
                patch: '',
                icon:icons[2]
            }
        ],
        [
            {
                text: 'Account',
                patch: '',
                icon:icons[3]
            },
            {
                text: 'Feed',
                patch: '',
                icon:icons[4]
            },
            {
                text: 'Favorites',
                patch: '',
                icon:icons[5]
            }
        ]
    ]
    interface friendsProps{
        name: string
        situation: 'on' | 'off' | 'absent'
    }
    const friends:friendsProps[] = []

    const elementRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    return(
        <Container ref={elementRef} open={isOpen}>
            <header>
                <div className="Icon">
                    <Avatar
                        sx={{ width: '4rem', height: '4rem',bgcolor: theme.primary }}
                    >H</Avatar>
                    <Situation 
                        left='2.8rem'
                        top='1.2rem'
                        size='1.3rem' 
                        situation='on'/>
                </div>
                <div className='userInfo'>
                    <div className="up">
                        UserName
                    </div>
                    <span className="Bar"></span>
                    <div className="Down">
                        <button 
                            className="iconBtn" >
                                <NotificationsIcon />
                        </button>
                        <button 
                            className="iconBtn" >
                                <MessageIcon />
                        </button>
                        <button 
                            className="iconBtn" >
                                <SettingsIcon />
                        </button>
                    </div>
                </div>

            </header>
            <div className='Friends'>
                {friends.length < 1? <Button text='+ Add Friends' primary/> : friends.map((el,index) => 
                    <div key={index}>
                        <Avatar
                        sx={{ width: '4rem', height: '4rem',bgcolor: theme.primary }}
                        >{el.name}</Avatar>
                        <Situation 
                            left='2.8rem'
                            top='1.2rem'
                            size='1.3rem' 
                            situation={el.situation}/>
                    </div>)}
            </div>
            <div className='BtnContent'>
                <Menu 
                    title='Navigate'
                    icon={LanguageIcon}
                    buttonList={menusItens[1]}
                    defaultOpen/>
                <Menu 
                    title='Friends'
                    icon={GroupIcon}
                    buttonList={menusItens[0]}/>
                <Option 
                    text='Extension' 
                    icon={ExtensionIcon}
                    patch=''/>
            </div>
        </Container>
    )
}