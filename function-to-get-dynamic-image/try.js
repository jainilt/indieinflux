const measurementImages = {
    "jacket": "measurement_jacket.png",
    "lower": "measurement_lower.png",
    "bag": "measurement_bag.png"
};

let measurementFlags = {
    "jacket": false,
    "lower": false,
    "bag": false
};

function toggleMeasurement(imageId) {
    var measurementImage = document.getElementById("measurementImage");

    if (measurementImages.hasOwnProperty(imageId)) {
        if (!measurementFlags[imageId]) {
            measurementImage.src = measurementImages[imageId];
            measurementFlags[imageId] = true;
        } else{
            measurementImage.src = "";
            measurementFlags[imageId] = false;
        }
    } else {
        measurementImage.src = "default_measurement.png";
        measurementFlags[imageId] = true;
    }
}
