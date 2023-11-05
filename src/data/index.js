export const personalInfoFieldArray = [
  {
    fieldType: "text",
    name: "firstName",
    label: "What is your first name?",
    required: true,
  },
  {
    fieldType: "text",
    name: "lastName",
    label: "...and last name?",
    required: true,
  },
  {
    fieldType: "text",
    name: "phone",
    label: "What is your phone number?",
    description:
      "Having your phone number will help us communicate quicker, especially during scheduling. But we respect your privacy and providing your phone number at this stage is optional.",
  },
  {
    fieldType: "text",
    name: "country",
    label: "What is your country or residence?",
    description: "Where do you currently live?",
    required: true,
  },
  {
    fieldType: "text",
    name: "city",
    label: "... and what city?",
    required: true,
  },
  {
    fieldType: "text",
    name: "nationality",
    label: "What is your nationality?",
    description: "What country are you a citizen of?",
    required: true,
  },
];

export const webPresenceFormFields = [
  {
    fieldType: "text",
    name: "linkedin",
    label: "LinkedIn",
    description:
      "Do you have a LinkedIn profile? If so, please enter it below.",
  },
  {
    fieldType: "text",
    name: "facebook",
    label: "Facebook",
    description: "Are you on Facebook? Care to share your profile address?",
  },
  {
    fieldType: "text",
    name: "twitter",
    label: "Twitter",
    description: "Do you tweet? Mind sharing your Twitter handle URL?",
  },
  {
    fieldType: "text",
    name: "github",
    label: "GitHub",
    description:
      "As a developer, it is highly valuable if you have and share your GitHub profile.",
  },
  {
    fieldType: "text",
    name: "website",
    label: "Personal Website or Blog",
    description:
      "Do you have your own website and/or blog? If so, we would love to check it out.",
  },
  {
    fieldType: "text",
    name: "references",
    label: "Any other references",
    description:
      "Do you have any other references you would like to share? Mentions to your work, articles, or any other relevant references you would like to share? Feel free to enter one URL per line.",
  },
];
