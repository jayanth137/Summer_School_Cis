
import Ieee from  "./sponsorlogo/ieee.png";
import IeeeCis from  "./sponsorlogo/ieeecis.png";
import IeeeCusb from  "./sponsorlogo/ieeecusb.png";
import CU from "./sponsorlogo/chandigarhuniversity.png";
import Konsfhub from "./sponsorlogo/konfhub.png"
import TechaMonth from "./sponsorlogo/techamoonth.png";
import TechInvent from "./sponsorlogo/whitetechinvent.png"

const communitypartner = [{
        img: Ieee,
        txt: " IEEE",
        link: "",
    },
    {
        img: IeeeCis,
        txt: " IEEE CIS",
        link: " ",
    },
    {
        img: IeeeCusb,
        txt: " IEEE Cusb",
        link: " ",
    },
];

const platformpartner = [{
    img:  Konsfhub,
    txt: " Konsfhub",
    link: " https://konfhub.com/summerschool",
}, ];
const Brandkitpartner = [{
    img: TechInvent ,
    txt: "Tech Invent ",
    link: " https://konfhub.com/summerschool",

},{
    img: TechaMonth ,
    txt: " Tech a Month",
    link: " https://konfhub.com/summerschool",
    
}, ];

const venuepartner = [{
    img: CU,
    txt:  " Chandigarh University",
    link: " ",
}, ];

const sponsers = {
   communitypartner,
   venuepartner,
   platformpartner,
   Brandkitpartner
};

export default sponsers;