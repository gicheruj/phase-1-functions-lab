// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
        return blocks - 42;
    }else if (blocks < 42){
        return 42 - blocks;
    }
}
function distanceFromHqInFeet(feet) {
    let blocks = distanceFromHqInBlocks(feet);
    return blocks * 264; 
}
function distanceTravelledInFeet(pickupPoint, destination) {
    if (pickupPoint > destination) {
        return (pickupPoint - destination) * 264;
    }else if (destination > pickupPoint) {
        return (destination - pickupPoint) * 264;
    }
}
function calculatesFarePrice(pickupPoint, destination) {
    let feet = distanceTravelledInFeet(pickupPoint, destination);
    if (feet < 400) {
        return 0;
    }else if (feet <= 2000) {
        return (feet - 400) * 0.02;
    }else if (feet <= 2500) {
        return 25;
    }else {
        return 'cannot travel that far';
    }
}