// utils/deviceDetector.js

export function detectDevice(userAgent) {
    // Add your device detection logic here
    // For example:
    if (userAgent.match(/Android/i)) {
        return "Android";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return "iOS";
    } else if (userAgent.match(/Windows Phone|Windows NT/i)) {
        return "Windows Phone/Windows";
    } else {
        return "Unknown";
    }
}
