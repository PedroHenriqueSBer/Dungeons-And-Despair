import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../Sidebar";
import { Button } from './../../layout/Button/index';
import { Container } from "./styles";

export const Header = () => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const elementRef = useRef<HTMLDivElement | null>(null);

    const closeElement = () => {
        setIsSidebarOpen(false);
    };
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
          closeElement();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    const navigate = useNavigate()
    const id = '313132'
    const Btns = id === undefined? 
    [
        {
            path: '/',
            name: 'Signin'
        }
    ] : [
        {
            path: '/',
            name: 'Inventory'
        },
        {
            path: '/',
            name: 'Pdfs'
        },
        {
            path: '/',
            name: 'Account'
        }
    ]
    return (
        <>
            <Container>
                <button 
                    className="iconBtn" 
                    onClick={()=>setIsSidebarOpen(true)}>
                    <MenuIcon />
                </button>
                <h1>Dungeons And Despair</h1>
                <span className="spacer"/>
                { Btns.map((el,index) =>
                    <Button
                        key={index}
                        onClick={() => navigate(el.path)}
                        text={el.name}
                        width="10rem"
                        height="100%"
                        borderRadius="0"
                    />
                )}
            </Container>
            <Sidebar 
                isOpen={isSidebarOpen}
                onClose={() => {
                    setIsSidebarOpen(false)
                }}/>
      </>
    )
}