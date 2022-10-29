//Function calculate distance from User to Ladkrabang
function calcCoorLKB(lati, longi){
    //Cooridinate
    const lat = +13.73
    const long = +100.78

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to Deli
function calcCoorDL(lati, longi){
    //Cooridinate
    const lat = +28.61
    const long = +77.23

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to London
function calcCoorLDN(lati, longi){
    //Cooridinate
    const lat = +51.51
    const long = -0.13

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to Paris
function calcCoorPRS(lati, longi){
    //Cooridinate
    const lat = +48.86
    const long = +2.35

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to Sydney
function calcCoorSDN(lati, longi){
    //Cooridinate
    const lat = -33.87
    const long = +151.21

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to New York
function calcCoorNY(lati, longi){
    //Cooridinate
    const lat = +40.71
    const long = -74.01

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to Madagascar
function calcCoorMDG(lati, longi){
    //Cooridinate
    const lat = -18.92
    const long = +47.52

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Function calculate distance from User to Amazon
function calcCoorAMZ(lati, longi){
    //Cooridinate
    const lat = -15.52
    const long = -71.69

    const R = +6371000; // Radius of earth (metres)

    //Calculate latitude (metres)
    const φ1 = +lati * Math.PI/180; // φ, λ in radians
    const φ2 = +lat * Math.PI/180;

    //Calculate longitude (metres)
    const λ1 = +longi * Math.PI/180;
    const λ2 = +long * Math.PI/180;
    
    //Calculate distance (metres)
    const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
    const y = (φ2-φ1);
    const d = Math.sqrt(x*x + y*y) * R;

    return d;
}

//Check nearest path
export default function dist(lati, longi){

    //Set number distance of place
    let distLKB = calcCoorLKB(lati, longi)
    let distDL = calcCoorDL(lati, longi)
    let distLDN = calcCoorLDN(lati, longi)
    let distPRS = calcCoorPRS(lati, longi)
    let distSDN = calcCoorSDN(lati, longi)
    let distNY = calcCoorNY(lati, longi)
    let distMDG = calcCoorMDG(lati, longi)
    let distAMZ = calcCoorAMZ(lati, longi)

    //Check minimum distance
    let distMin = Math.min(distLKB, distDL, distLDN, distPRS, distSDN, distNY, distMDG ,distAMZ)
    
    //Check minimum to name of place
    if(distMin == distLKB){
        return "Ladkrabang"
    }else if(distMin == distDL){
        return "Deli"
    }else if(distMin == distLDN){
        return "London"
    }else if(distMin == distPRS){
        return "Paris"
    }else if(distMin == distSDN){
        return "Sydney"
    }else if(distMin == distNY){
        return "New York"
    }else if(distMin == distMDG){
        return "Madagascar"
    }else if(distMin == distAMZ){
        return "Amazon"
    }
}
