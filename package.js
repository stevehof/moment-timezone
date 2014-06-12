var profile = {
    resourceTags: {
        ignore: function(filename, mid){
            // only include moment/moment
            return  !/moment-timezone\/moment-timezone/.test(filename);
            //return mid != "moment-timezone/moment-timezone"
        },
        amd: function(filename, mid){
            return /\.js$/.test(filename);
        }
    }
};

