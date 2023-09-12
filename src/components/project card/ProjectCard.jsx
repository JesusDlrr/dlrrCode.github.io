import React from "react";
import styles from './ProjectCard.module.css';

export const ProjectCard = ({title}) => {
    return(
        <article className={styles.c}>
            <span>
                <img src="https://rgbteahouse.neocities.org/img/cdctr3232323.jpg" className={styles.b} alt={title}/>
            </span>
            <header className={styles.a}>
                <b>{title}</b>
            </header>
            <p className={styles.a}>aaaaaaa</p>
        </article>
    );
}