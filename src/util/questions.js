import { questionsTexts } from "content/questions";
import * as constants from "content/constants";

export const getQuestionsGroup = (questionGroupId, lang) => questionsTexts[lang][questionGroupId];

export const getQuestionsGroupByAnswerId = (answerID, lang) => {
    let questionGroup = null;
    switch (answerID) {
        case `${constants.QUESTIONS_GROUP_INITIAL}_1`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_10, lang)
            break;
        case `${constants.QUESTIONS_GROUP_INITIAL}_2`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_20, lang)
            break;
        case `${constants.QUESTIONS_GROUP_INITIAL}_3`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_30, lang)
            break;
        case `${constants.QUESTIONS_GROUP_10}_1`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_11, lang)
            break;
        case `${constants.QUESTIONS_GROUP_10}_2`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_12, lang)
            break;
        case `${constants.QUESTIONS_GROUP_20}_1`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_21, lang)
            break;
        case `${constants.QUESTIONS_GROUP_20}_2`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_22, lang)
            break;
        case `${constants.QUESTIONS_GROUP_30}_1`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_31, lang)
            break;
        case `${constants.QUESTIONS_GROUP_30}_2`:
            questionGroup = getQuestionsGroup(constants.QUESTIONS_GROUP_32, lang)
            break;
    }
    return questionGroup;
}