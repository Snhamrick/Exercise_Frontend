import { SafeResourceUrl } from "@angular/platform-browser"

export interface Exercise {
    name: string,
    difficulty: number,
    tgtMuscle: string,
    secMuscle: string,
    description: string,
    vidLink: string,
    variations: string,
    safeVidLink: SafeResourceUrl
}