export type techType = 'Next' | 'React' | 'TypeScript' | 'Tailwind' | 'Supabase';

export type dataType = {
    title: string,
    techs: techType[],
    description: string,
    badge?: string,
    href: string,
    img1: string,
    img2: string
}