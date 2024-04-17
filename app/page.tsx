'use client'
import React, {Component} from "react";
import NavBar from "./components/navbar";
import styles from "./page.module.css"

const navigation = {
    brand: { name: "Drafted", to: "/"},
    links: [
        { name: "Batch Control", to: "/batchcontrol", },
        { name: "Beer Listing", to: "/beerlisting", },
        { name: "News Posts", to: "/news", },
        { name: "Settings", to: "/settings", },
    ]
    
}

export default class Home extends Component {
    render() {
        const { brand, links } = navigation;

        return (
            <main className={styles.main}>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <NavBar brand={brand} links={links}/>

                <div className={styles.mainContainer}>
                    <div className="form">
                        <h2 className={styles.heading1}>Home</h2>
                    </div>
                </div>

                
            </main>
        );
    }
}