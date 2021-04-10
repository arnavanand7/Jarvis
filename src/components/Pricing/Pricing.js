import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

function Pricing() {
    return ( <
        IconContext.Provider value = {
            { color: '#a9b3c1', size: 64 }
        } >
        <
        PricingSection >
        <
        PricingWrapper >
        <
        PricingHeading > Our Services < /PricingHeading> <
        PricingContainer >
        <
        PricingCard to = '/sign-up' >
        <
        PricingCardInfo >
        <
        PricingCardIcon >
        <
        GiRock / >
        <
        /PricingCardIcon> <
        PricingCardPlan > Starter Pack < /PricingCardPlan> <
        PricingCardCost > Rs .150 < /PricingCardCost> <
        PricingCardLength > per month < /PricingCardLength> <
        PricingCardFeatures >
        <
        PricingCardFeature > Medical Bills < /PricingCardFeature> <
        PricingCardFeature > Prescribed Medicines < /PricingCardFeature> <
        PricingCardFeature > A Free Session with a Psychologist < /PricingCardFeature> < /
        PricingCardFeatures > <
        Button primary > Choose Plan < /Button> < /
        PricingCardInfo > <
        /PricingCard> <
        PricingCard to = '/sign-up' >
        <
        PricingCardInfo >
        <
        PricingCardIcon >
        <
        GiCrystalBars / >
        <
        /PricingCardIcon> <
        PricingCardPlan > Gold Pack < /PricingCardPlan> <
        PricingCardCost > Rs .300 < /PricingCardCost> <
        PricingCardLength > per month < /PricingCardLength> <
        PricingCardFeatures >
        <
        PricingCardFeature > All features of Starter Pack < /PricingCardFeature> <
        PricingCardFeature > Medical Report Storage < /PricingCardFeature> <
        PricingCardFeature > < center > Free Sessions with a Therapist & Dietician < /center>< /PricingCardFeature > < /
        PricingCardFeatures > <
        Button primary > Choose Plan < /Button> < /
        PricingCardInfo > <
        /PricingCard> <
        PricingCard to = '/sign-up' >
        <
        PricingCardInfo >
        <
        PricingCardIcon >
        <
        GiCutDiamond / >
        <
        /PricingCardIcon> <
        PricingCardPlan > Diamond Pack < /PricingCardPlan> <
        PricingCardCost > Rs .500 < /PricingCardCost> <
        PricingCardLength > per month < /PricingCardLength> <
        PricingCardFeatures >
        <
        PricingCardFeature > All Perks of Gold Pack < /PricingCardFeature> <
        PricingCardFeature > < center > 24 * 7 On call availibility of a Doctors < /center> < /PricingCardFeature > <
        PricingCardFeature > < center > Free sessions with a Dietician, Therapist and Chiropractor < /center> < /PricingCardFeature > < /
        PricingCardFeatures > <
        Button primary > Choose Plan < /Button> < /
        PricingCardInfo > <
        /PricingCard> < /
        PricingContainer > <
        /PricingWrapper> < /
        PricingSection > <
        /IconContext.Provider>
    );
}
export default Pricing;