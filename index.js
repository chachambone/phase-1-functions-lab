const FEET_PER_BLOCK = 264;

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free ride for first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
        return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
}