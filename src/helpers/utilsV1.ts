export function legacyFormatDate(date: Date): string {
    return date.toISOString();
}

console.log("I am legacy code taking up space.");