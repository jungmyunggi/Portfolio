export type SkillType = {
    stack: string;
    color: string;
    description: string;
    proficiency: number;
};

export type SkillItemType = {
    stack: SkillType;
    handleEnter?: (skill: SkillType) => void;
    handleLeave?: () => void;
};

export type SkillDescriptionType = {
    stack: SkillType | null;
};

export type SkillSectionType = {
    title: string;
    skills: SkillType[];
};
