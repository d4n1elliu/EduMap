import ConnectImg from '../../assets/ConnectWithThose.png';
import CVImg from '../../assets/CV.png';
import FindWhatSuitsImg from '../../assets/findWhatSuitsYou.png';
import NetworkingImg from '../../assets/networking.png';
import RaspberryPiImg from '../../assets/raspberryPi.png';
import { PATHS } from '../../config/routes';

// Alternating image/text sections below the hero
export const FEATURE_SECTIONS = [
    {
        title: 'Find out what suits you',
        text: 'Discover and realise your interests and skills to share them with others.',
        image: FindWhatSuitsImg,
        imageAlt: 'Find what suits you',
        imageSide: 'left',
        cta: { to: PATHS.QUESTIONNAIRE, label: 'Take the Questionnaire' },
    },
    {
        title: 'Connect with those on your path',
        text: 'Find others who are in similar situations and connect with a peer mentor ' +
            'who can help you learn what it’s like to be in different fields.',
        image: ConnectImg,
        imageAlt: 'connecting',
        imageSide: 'right',
        dark: true,
        cta: { to: PATHS.BUDDY, label: 'Start Connecting' },
    },
];

export const FEATURED_EVENTS = [
    { title: 'Raspberry Pi Workshop', host: 'Tech Soc', image: RaspberryPiImg },
    { title: 'Writing a CV Resume', host: 'Tech Soc', image: CVImg },
    { title: 'Industry Networking', host: 'UTS UXID', image: NetworkingImg },
];
