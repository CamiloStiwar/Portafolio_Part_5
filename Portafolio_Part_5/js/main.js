/*
    Author: Camilo Rendon
    File Name: main.js
    Date: 11/24/2026
    Description: Scripts for the portfolio website. Controls the mobile hamburger menu
                 and marks form fields after the user leaves them so errors only show then.
*/

// Let the CSS know JavaScript is running (menu stays visible if JS is off)
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {

    // ---------- Mobile menu ----------
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (menuButton && nav) {
        // Open or close the menu and update aria-expanded for screen readers
        menuButton.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    }

    // ---------- Contact form ----------
    // Add a "touched" class when the user leaves a field or tries to submit,
    // so the red border does not show before they type anything
    const fields = document.querySelectorAll("form input, form select, form textarea");

    fields.forEach(function (field) {
        field.addEventListener("blur", function () {
            field.classList.add("touched");
        });
        field.addEventListener("invalid", function () {
            field.classList.add("touched");
        });
    });
});
