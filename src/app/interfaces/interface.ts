export interface Major {
    name: string;
}

export interface IconButton {
    buttonLabel: string;
    icon: string;
}

export interface User {
    personalDetails: PersonalDetails
}

export interface PersonalDetails {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    summaryOfQualifications: string;
    linkedInURL?: string;
  }

export interface Education {
    institution: string;
    degreeType: string;
    fieldOfStudy: string;
    yearStarted: string;
    yearCompleted: string;
}