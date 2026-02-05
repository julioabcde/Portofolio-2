import AOS from 'aos';

export const initAOS = () => {
    AOS.init({
        once: true,
        easing: 'ease-in-out',
        duration: 700,
    })
}