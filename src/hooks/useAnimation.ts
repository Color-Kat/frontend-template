import React, {useEffect} from "react";
import {Power2, TweenMax} from "gsap";

type AnimationType = 'appearance' | 'fast-appearance' | 'text-appearance' | 'text-fast-appearance';

// Add animation to the ref element then page loads
export default function useAnimation(
    refElement:  React.RefObject<HTMLElement>,
    animation: AnimationType = 'appearance',
    delay: number = 0
) {
    useEffect(() => {
        if(!refElement.current) return;

        // --- Appearance --- //
        if(animation == 'appearance')
            TweenMax.fromTo(
                refElement.current,
                .5,
                {
                    css: {opacity: 0, y: 25,},
                    // easy: Power2.easeOut
                },
                {
                    css: {opacity: 1, y: 0,},
                    // easy: Power2.easeOut,
                    delay: delay
                },
            );

        // --- Fast Appearance --- //
        if(animation == 'fast-appearance')
            TweenMax.fromTo(
                refElement.current,
                .2,
                {
                    css: {opacity: 0, y: 15,},
                    // easy: Power2.easeOut
                },
                {
                    css: {opacity: 1, y: 0,},
                    // easy: Power2.easeOut,
                    delay: delay
                },
            );

        // --- Text appearance --- //
        if(animation == 'text-appearance')
            TweenMax.fromTo(
                refElement.current,
                .6,
                {
                    css: {opacity: 0, y: 15,},
                    // easy: Power2.easeOut
                },
                {
                    css: {opacity: 1, y: 0,},
                    // easy: Power2.easeOut,
                    delay: delay
                }
            );

        // --- Text ast appearance --- //
        if(animation == 'text-fast-appearance')
            TweenMax.fromTo(
                refElement.current,
                .3,
                {
                    css: {opacity: 0, y: 10,},
                    // easy: Power2.easeOut
                },
                {
                    css: {opacity: 1, y: 0,},
                    // easy: Power2.easeOut,
                    delay: delay
                }
            );
    }, []);
}
