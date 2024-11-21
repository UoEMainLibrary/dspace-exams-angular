import { getInfoModulePath } from '../app-routing-paths';

export const END_USER_AGREEMENT_PATH = 'end-user-agreement';
export const PRIVACY_PATH = 'privacy';
export const FEEDBACK_PATH = 'feedback';
export const ACCESSIBILITY_PATH = 'accessibility';
export const ABOUT_PATH = 'about';
export const FAQS_PATH = 'faqs';
export const HELP_PATH = 'help';
export const UNAVAILABLE_PATH = 'unavailable';

export function getEndUserAgreementPath() {
    return getSubPath(END_USER_AGREEMENT_PATH);
}

export function getPrivacyPath() {
    return getSubPath(PRIVACY_PATH);
}

export function getFeedbackPath() {
    return getSubPath(FEEDBACK_PATH);
}

export function getAccessibilityPath() {
    return getSubPath(ACCESSIBILITY_PATH);
}

export function getAboutPath() {
    return getSubPath(ABOUT_PATH);
}

export function getFaqsPath() {
    return getSubPath(FAQS_PATH);
}

export function getHelpPath() {
    return getSubPath(HELP_PATH);
}

export function getUnavailablePath() {
    return getSubPath(UNAVAILABLE_PATH);
}

function getSubPath(path: string) {
    return `${getInfoModulePath()}/${path}`;
}
