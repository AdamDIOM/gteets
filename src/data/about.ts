import CaptionedImage from "../components/content/CaptionedImage.astro";
import ActionButton from "../components/ActionButton.astro";
import Image from "../components/content/Image.astro";
import { aboutConcept, adam } from "../data/images";


export const about = [
    {
        title: "The Concept",
        subtitle: "Where did GETS come from?",
        content: [
            {
                type: "text",
                value: "GETS was conceived as a platform to streamline and enhance the way we manage and interact with our digital assets. It aims to provide a seamless experience for users by integrating various tools and functionalities into a single, cohesive system."
            },
            {
                type: "component",
                component: Image,
                props: { image: aboutConcept }
            }
        ]
    },
    {
        title: "The Team",
        subtitle: "Meet the team behind GETS",
        content: [
            {
                type: "component",
                component: CaptionedImage,
                props: { image: aboutConcept, caption: "Grant Torbet • Chief Training Officer", shape: "profile" }
            },
            {
                type: "component",
                component: CaptionedImage,
                props: { image: adam, caption: "Adam Drummond • Chief Technical Officer", shape: "profile" }
            }
        ],
        props: {
            colSize: "sm"
        }
    },
    {
        title: "The Materials",
        subtitle: "Explore the resources and plans available for GETS",
        content: [
            {
                type: "text",
                value: "Global Engineering Training System (GETS) provides a comprehensive set of materials and plans to train electrical operatives from beginner to SAP. These resources are designed to guide users through various aspects of the system, ensuring a smooth and productive experience, with refresher courses available after initial training."
            },
            {
                type: "component",
                component: ActionButton,
                props: { label: "Explore Materials", page: "/materials" }
            }
        ]
    }
]