import React, {useState, useEffect, useRef} from 'react';
import NavBar from './NavBar';
import styles from '../styles/Header.module.css';

function onClickOutside(ref, handler) {
    useEffect(() => {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
          document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler],);
}


export default function Header(props) {
    const [open, setOpen] = [props.open, props.setOpen];
    const node = useRef();
    onClickOutside(node, () => setOpen(false));

    function onPress() {
        setOpen(!open); 
    }

    return (
        <section className={styles.container} ref={node}>
            <div className={styles.headercontainer}>
                <h1 className={styles.headingtext}>{props.text}</h1>
            </div>
            <button className={open ? styles.menubutton_onclick : styles.menubutton} onClick={onPress}>Menu</button>
            <NavBar open={open} setOpen={setOpen} className={styles.navbar}/>
        </section>
    )
}
