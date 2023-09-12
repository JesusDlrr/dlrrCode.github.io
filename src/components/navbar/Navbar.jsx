import React from "react";

export const Navbar = () => {
    return (
        <navbar>
            <ul>
                Index
                <ul>
                    <li><a href="home.html">Home page</a></li>
                    <li>
                        My projects
                        <ul>
                            <li><a href="#">Programs</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Music</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About me</a></li>
                </ul>
            </ul>
        </navbar>
    );
}