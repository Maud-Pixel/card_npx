#!/usr/bin/env node

const ora = require('ora');
const chalk = require('chalk');
const boxen = require('boxen');
const newline = "\n";
const EMPTYLINE="";

const data = 
{
    "Name": chalk.hex("#ff5500").bold("               Maud Leleux"),
    "Goal": chalk.hex("#ff6666").bold("       Win the Awwwards with my team"),
    "Github": chalk.hex("#80bfff").bold("Github : https://github.com/Maud-Pixel"),
    "Codepen": chalk.hex("#d580ff").bold("Codepen : https://codepen.io/maud-leleux"),
    "Gmail": chalk.hex("#ff99ff").bold("Gmail : leleuxmaud@gmail.com"),
    "Card": chalk.hex("#e6e600").bold("             Maud_Pixel_ngxcard"),
    "message": chalk.hex('#00001a')`Hello everybody. I'm a belgian developper passionate ${newline} by the code, liking hackatons ! ${newline} I would like to work in a super team. ${newline} So if you want you can contact me`  
}

  

console.log(boxen(`
    ${data.Name} ${newline}
    ${EMPTYLINE} ${newline}
    ${data.Goal} ${newline}
    ${EMPTYLINE} ${newline}
    ${data.Github}${newline}
    ${data.Codepen}${newline}
    ${data.Gmail}${newline}
    ${EMPTYLINE}${newline}
    ${data.Card}${newline}
    ${EMPTYLINE}${newline}
    ${data.message}${newline}`
,{padding:1, borderStyle:"round", float:"center", backgroundColor:"#ffffff"}));

 