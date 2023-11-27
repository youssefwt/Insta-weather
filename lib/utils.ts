export function isSameHour(dateString:string):boolean {
    // Parse the provided date string
    const providedDate = new Date(dateString);

    // Get the current date and time
    const currentDate = new Date();

    // Extract hours
    const providedHour = providedDate.getHours();
    const currentHour = currentDate.getHours();

    // Comparison
    if (currentHour === providedHour) {
        return true
    } else{
        return false
    }
}

export function extractHour(dateString:string) {
    // Parse the provided date string
    const date = new Date(dateString);

    // Extract the hour and minute
    const hour = date.getHours();
    const minute = date.getMinutes();

    // Format hour and minute to always have two digits
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinute}`;
}

export function formatDate(dateInput:string,options:{}){
const date=new Date(dateInput)
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate
}