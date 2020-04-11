import * as constants from "content/constants";

export const questionsTexts = {
    en: {
        [constants.QUESTIONS_GROUP_INITIAL]: {
            question: "So do you get to go to CoscuLand very often?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_INITIAL}_1`,
                    value: "I've never been there"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_INITIAL}_2`,
                    value: "I don't remember"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_INITIAL}_3`,
                    value: "It's a secret"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_10]: {
            question: "Can I ask, why're you headed there?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_10}_1`,
                    value: "I'm moving"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_10}_2`,
                    value: "Can't say"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_11]: {
            question: "Does that mean you haven't even seen your house yet?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_11}_1`,
                    value: "I'll get a place there"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_11}_2`,
                    value: "I'm sure I'll be fine"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_12]: {
            question: "Are you perhaps moving to a new town?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_12}_1`,
                    value: "You guessed it"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_12}_2`,
                    value: "How'd you know"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_20]: {
            question: "Really? Umm... What are you going there for?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_20}_1`,
                    value: "I'm moving"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_20}_2`,
                    value: "I don't know"
                },
            ]
        }, 
        [constants.QUESTIONS_GROUP_21]: {
            question: "That's just weird! Perhaps some mysterious power is guiding you or something...",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_21}_1`,
                    value: "Yes, probably"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_21}_2`,
                    value: "No, that's not it at all"
                },
            ]
        }, 
        [constants.QUESTIONS_GROUP_22]: {
            question: "What if you suddenly felt like maybe settlin down in CoscuLand? Man, wouldn't that be something?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_22}_1`,
                    value: "Yeah, I think I will"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_22}_2`,
                    value: "I'll let fate decide"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_30]: {
            question: "Mya ha ha! A secret, you say? Ok, how about you telling me what you plan to do once you get to this place...? Or is that a secret too?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_30}_1`,
                    value: "Duh, it's a SECRET"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_30}_2`,
                    value: "I'm moving there"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_31]: {
            question: "Could you be moving?",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_31}_1`,
                    value: "You got it"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_31}_2`,
                    value: "Pretty sharp"
                },
            ]
        },
        [constants.QUESTIONS_GROUP_32]: {
            question: "Mya ha ha! You're a real funny one!",
            answers: [
                {
                    id: `${constants.QUESTIONS_GROUP_32}_1`,
                    value: "Yup"
                },
                {
                    id: `${constants.QUESTIONS_GROUP_32}_2`,
                    value: "No, I'm serious yo"
                },
            ]
        },
    },
    es: {

    }
}

export const we = () => console.log(questionsTexts)