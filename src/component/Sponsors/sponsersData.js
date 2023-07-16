
import Ieee from  "./sponsorlogo/ieee.png";
import IeeeCis from  "./sponsorlogo/ieeecis.png";
import IeeeCusb from  "./sponsorlogo/ieeecusb.png";
import CU from "./sponsorlogo/chandigarhuniversity.png";
import Konsfhub from "./sponsorlogo/konfhub.png"

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

const mediapartner = [{
    img:  Konsfhub,
    txt: " ",
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
   mediapartner
};

export default sponsers;