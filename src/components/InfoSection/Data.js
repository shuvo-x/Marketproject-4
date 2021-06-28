import carImg from '../../images/svg-2.svg';
import Card from '../../images/svg-3.svg';
import shawa from '../../images/svg-4.svg';
import Holl from '../../images/svg-5.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transation without getting charged any fees ',
    buttonLabel: 'Get started',
    imgStart: true,
    img: carImg,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false

}

export const homeObjTwo = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Unlimited Transaction with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transation without getting charged any fees ',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: Card,
    alt: 'Card',
    dark: false,
    primary:false,
    darkText: true

}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headLine: 'Creating an account is extreamely easy',
    description: 'Get access to our exclusive app that allows you to send unlimited transation without getting charged any fees ',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: Holl,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true

}