import { SkillType } from 'beautiful-skill-tree';
import redefinedLaserCanonIcon from './Refined_Laser_Cannon.webp';
import burstModulatedLasersIcon from './Burst_Modulated_Laser.webp';
import improvedContainmentIcon from './ImprovedContainment.webp';
import highIntensityPlasmaIcon from './High_Intensity_Plasma.webp';
import improvedBeamEmittersIcon from './Improved_Beam_Emitters.webp';
import beamAmplificationIcon from './Beam_Amplification.webp';
import psiTechPoweredLasersIcon from './PsiTech_Powered_lasers.webp';
import strongPlasmaEjectionIcon from './Strong_Plasma_Ejection.webp';
import rapidPlasmaGenerationIcon from './Rapid_Plasma_Generation.webp';
import superiorEmissionCoilsIcon from './Superior_Emission_Coils.webp';
import precisionBeamFocusIcon from './Precision_Beam_Focus.webp';
import inspiredReactorDesignIcon from './Inspired_Reactor_Design.webp';
import quickReactionCyclingIcon from './Quick_Reacting_Cycling.webp';
import synergisticReactionsIcon from './Synergetic_Reactions.webp';
import basicShieldProjectionsIcon from './Basic_Shield_Projection.webp';
import psiTechShieldEmittersIcon from './Psitech_Shield_Emitters.webp';
import potentShieldGenerationIcon from './Potent_Shield_Generation.webp';
import raisedShieldHarmonicsIcon from './Raised_Shield_Harmonics.webp';

export const hostility: SkillType = [
  {
    id: "redefinedLaser",
    icon: redefinedLaserCanonIcon,
    title: "Redefined Laser Cannons",
    tooltipDescription: "+5.0% Laser Damage (Per Level)",
    children: [
      {
        id: "burstModulated",
        icon: burstModulatedLasersIcon,
        title: "Burst Modulated Lasers",
        tooltipDescription: "+5.0% Laser Damage (Per Level)",
        children: [
          {
            id: "psiTechPoweredLaser",
            icon: psiTechPoweredLasersIcon,
            title: "PsiTech Powered Lasers",
            tooltipDescription: "+5.0% Laser Damage (Per Level)",
            children: []
          },
          {
            id: "improvedBeamEmit",
            icon: improvedBeamEmittersIcon,
            title: "Improved Beam Emitters",
            tooltipDescription: "+5.0% Beam Damage (Per Level)",
            children: [
              {
                id: "beamAmplification",
                icon: beamAmplificationIcon,
                title: "Beam Amplification",
                tooltipDescription: "+5.0% Beam Damage (Per Level)",
                children: [
                  {
                    id: "superiorEmission",
                    icon: superiorEmissionCoilsIcon,
                    title: "Superior Emission Coils",
                    tooltipDescription: "+5.0% Beam Damage (Per Level)",
                    children: [
                      {
                        id: "precisionBeam",
                        icon: precisionBeamFocusIcon,
                        title: "Prevision Beam Focus",
                        tooltipDescription: "+4.0% range for all Beam weapons (Per Level)",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "improvedContainment",
        icon: improvedContainmentIcon,
        title: "Improved Containment",
        tooltipDescription: "+5.0% Plasma Damage (Per Level)",
        children: [
          {
            id: "highIntensityPlasma",
            icon: highIntensityPlasmaIcon,
            title: "High Intensity Plasma",
            tooltipDescription: "+5.0% Plasma Damage (Per Level)",
            children: [
              {
                id: "strongPlasmaEject",
                icon: strongPlasmaEjectionIcon,
                title: "Strong Plasma Ejection",
                tooltipDescription: "+5.0% Plasma Damage (Per Level)",
                children: [
                  {
                    id: "rapidPlasmaGen",
                    icon: rapidPlasmaGenerationIcon,
                    title: "Rapid Plasma Generation",
                    tooltipDescription: "+5% fire rate to all Plasma weapons (Per Level)",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "basicShield",
    icon: basicShieldProjectionsIcon,
    title: "Basic Shield Projection",
    tooltipDescription: "+5.0% Shield, +5.0% Shield Regeneration",
    children: [
      {
        id: "psiTechShieldEmit",
        icon: psiTechShieldEmittersIcon,
        title: "PsiTech Shield Emitters",
        tooltipDescription: "+5.0% Shield, +5.0% Shield Regeneration",
        children: [
          {
            id: "potentShieldGen",
            icon: potentShieldGenerationIcon,
            title: "Potent Shield Generation",
            tooltipDescription: "+5.0% Shield, +5.0% Shield Regeneration",
            children: [
              {
                id: "raisedShield",
                icon: raisedShieldHarmonicsIcon,
                title: "Raised Shield Harmonics",
                tooltipDescription: "+2.0% shield Mitigation",
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];